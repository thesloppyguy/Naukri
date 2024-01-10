import { type InferSchemaType, model, Schema } from 'mongoose'

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['User', 'Admin', 'Maintainer'], default: 'User' },
  organization: { type: Schema.Types.ObjectId, ref: 'Organization' }
})

type User = InferSchemaType<typeof userSchema>

export default model<User>('User', userSchema)
