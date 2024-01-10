import { type InferSchemaType, model, Schema } from 'mongoose'

const organizationSchema = new Schema({
  name: { type: String, required: true },
  contactEmail: { type: String, required: true },
  url: { type: String, required: false },
  status: { type: String, enum: ['allowed', 'review', 'denied'], default: 'review' }
})

type OrganizationUser = InferSchemaType<typeof organizationSchema>

export default model<OrganizationUser>('Organization', organizationSchema)
