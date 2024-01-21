import { Resolvers } from "../generated/graphql"
import UserModel from '../models/User'
import OrgnisationModel from '../models/Organization'
import bcrypt from 'bcrypt'

const resolvers: Resolvers = {
  Query: {
    getOrganizations: async () => {
      return await OrgnisationModel.find({})
    },
    getUserByOrganization: async (_, { organizationId }) => {
      return await UserModel.find({organization:organizationId})
    }
  },
  Mutation: {
    registerOrganization: async (_, { input }) => {
      const name = input.name
      const contactEmail = input.email
      const url = input.url
      try {
        if ((name == null) || (contactEmail == null)) {
          return {
            error: {
              status: 400,
              message: "Parameters missing"
            }
          }
        }
        const existingOrganizations = await OrgnisationModel.findOne({ name, contactEmail }).exec()

        if (existingOrganizations !== null) {
          return {
            error: {
              status: 400,
              message: "Organization already taken. Please check your email for an Invite."
            }
          }
        }
        await OrgnisationModel.create({
          name,
          contactEmail,
          url,
          status: 'Review'
        })
        // await sendInvite()
        return {
          response: true
        }
      } catch (error) {
        return {
          error: {
            status: 500,
            message: `Internal Server Error: ${error}`
          }
        }
      }
    },
    inviteOrganization: async (_, { input }) => {
      const name = input.name
      const contactEmail = input.email
      const url = input.url
      try {
        if ((name == null) || (contactEmail == null)) {
          return {
            error: {
              status: 400,
              message: "Parameters missing"
            }
          }
        }
        const existingOrganizations = await OrgnisationModel.findOne({ name, contactEmail }).exec()
        if (existingOrganizations !== null) {
          return {
            error: {
              status: 400,
              message: "Organization already taken. Please check your email for an Invite."
            }
          }
        }
        await OrgnisationModel.create({
          name,
          contactEmail,
          url,
          status: 'Review'
        })
        // await sendInvite()
        return {
          response: true
        }
      } catch (error) {
        return {
          error: {
            status: 500,
            message: "Internal Server Error"
          }
        }
      }
    },
    deleteOrganization: async (_, { id }) => {
      try {
        if (!id) {
          return {
            error: {
              status: 400,
              message: "User Id Missing"
            }
          }
        }
        const user = OrgnisationModel.findById(id);
        if (!user) { return { response: false } }
        await UserModel.deleteMany({organization: id})
        await OrgnisationModel.deleteOne({ _id: id })
        return { response: true }
      } catch (error) {
        return {
          error: {
            status: 500,
            message: "Internal Server Error"
          }
        }
      }
    },
    updateOrganizationStatus: async (_, { input }) => {
      const id = input.id
      const status = input.status
      try {
        if ((id == null) || (status == null)) {
          return {
            error: {
              status: 400,
              message: "Parameter Missing"
            }
          }
        }
        const organization = await OrgnisationModel.findById(id)
        if (organization == null) {
          return {
            error: {
              status: 400,
              message: "Organization not Found"
            }
          }
        }
        await OrgnisationModel.updateOne({ _id: id }, { $set: { status: status } })
        if(status==='Approved') {
          const user = await UserModel.findOne({email: organization?.contactEmail, organization: organization?._id })
          if (user==null) {
            UserModel.create({
              name: organization?.name,
              email: organization?.contactEmail,
              role: "Admin",
              organization: organization
            })
          }
        }
        return {
          response: true
        }
      } catch (error) {
        return {
          error: {
            status: 500,
            message: "Internal Server Error"
          }
        }
      }
    },
    inviteUser: async (_, { input }) => {
      const name = input.name
      const email = input.email
      const role = input.role
      const organization = input.organization
      try {
        if ((name == null) || (email == null) || (role == null) || (organization == null)) {
          return {
            error: {
              status: 400,
              message: "Parameter Missing"
            }
          }
        }
        const org = OrgnisationModel.findById(organization)
        if (!org) {
          return {
            error: {
              status: 400,
              message: "Org Not Registered"
            }
          }
        }
        await UserModel.create({
          name,
          email,
          role,
          organization: organization
        })
        console.log("Send Invite")
        return {
          response: true
        }
      } catch (error) {
        return {
          error: {
            status: 500,
            message: "Internal Server Error"
          }
        }
      }
    },
    resetPasswordUser: async (_, { input }) => {
      try {
        const id = input.id
        const passwordRaw = input.password
        if ((passwordRaw == null)) {
          return {
            error: {
              status: 400,
              message: "Parameter missing"
            }
          }
        }
        if ((id == null)) {
          return {
            error: {
              status: 400,
              message: "Invalid Invite Link"
            }
          }
        }
        const passwordHashed = await bcrypt.hash(passwordRaw, 10)
        const result = await UserModel.updateOne({ _id: id }, { $set: { password: passwordHashed } })
        if (result.modifiedCount === 0) {
          return {
            error: {
              status: 400,
              message: "User not found"
            }
          }
        }
        return {
          response: true
        }
      } catch (error) {
        return {
          error: {
            status: 500,
            message: "Internal Server Error"
          }
        }
      }
    },
    activateUser: async (_, { input }) => {
      try {
        const id = input.id
        const passwordRaw = input.password
        if ((passwordRaw == null)) {
          return {
            error: {
              status: 400,
              message: "Parameter missing"
            }
          }
        }
        if ((id == null)) {
          return {
            error: {
              status: 400,
              message: "Invalid Invite Link"
            }
          }
        }
        const passwordHashed = await bcrypt.hash(passwordRaw, 10)
        const result = await UserModel.updateOne({ _id: id }, { $set: { password: passwordHashed } })
        if (result.modifiedCount === 0) {
          return {
            error: {
              status: 400,
              message: "User not found"
            }
          }
        }
        return {
          response: true
        }
      } catch (error) {
        return {
          error: {
            status: 500,
            message: "Internal Server Error"
          }
        }
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        if (!id) {
          return {
            error: {
              status: 400,
              message: "User Id Missing"
            }
          }
        }
        const user = UserModel.findById(id);
        if (!user) { return { response: false } }
        await UserModel.deleteOne({ _id: id })
        return { response: true }
      } catch (error) {
        return {
          error: {
            status: 500,
            message: "Internal Server Error"
          }
        }
      }
    },
    updateUserRole: async (_, { input }) => {
      const id = input.id
      const role = input.role
      try {
        if ((id == null) || (role == null)) {
          return {
            error: {
              status: 400,
              message: "Parameter Missing"
            }
          }
        }
        const user = await UserModel.findById(id)
        if (user == null) {
          return {
            error: {
              status: 400,
              message: "User not Found"
            }
          }
        }
        await UserModel.updateOne({ _id: id }, { $set: { role: role } })
        // Update Jwt token
        return {
          response: true
        }
      } catch (error) {
        return {
          error: {
            status: 500,
            message: "Internal Server Error"
          }
        }
      }
    }
  }
}

export default resolvers