import { type InferSchemaType, model, Schema } from 'mongoose'

const organizationSchema = new Schema({
  name: { type: String, required: true, unique: true },
  contactEmail: { type: String, required: true, unique: true },
  status: { type: String, enum: ['allowed', 'denied'] }
})

type OrganizationUser = InferSchemaType<typeof organizationSchema>

export default model<OrganizationUser>('Organization', organizationSchema)
