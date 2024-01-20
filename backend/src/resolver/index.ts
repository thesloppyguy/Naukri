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
      return await OrgnisationModel.findById(organizationId)
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
          status: 'denied'
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

        const result = await OrgnisationModel.updateOne({ _id: id }, { $set: { status: status } })
        if (result.modifiedCount == 0) {
          return {
            error: {
              status: 400,
              message: "Organization not Found"
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
      console.log(input)
      return { response: true }
    }
  }
}

export default resolvers