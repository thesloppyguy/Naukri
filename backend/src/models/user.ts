import { type InferSchemaType, model, Schema } from 'mongoose'

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
})

type User = InferSchemaType<typeof userSchema>

export default model<User>('User', userSchema)
