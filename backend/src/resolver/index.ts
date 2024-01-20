import { Resolvers } from "../generated/graphql"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import UserModel from '../models/user'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import OrgnisationModel from '../models/org'

const resolvers: Resolvers = {
  Query: {
    getUserByOrganization: async (_, { organizationId }) => {
      const response = await OrgnisationModel.find({ organization: organizationId })
      console.log(response)
      return response;
    }
  }
}

export default resolvers