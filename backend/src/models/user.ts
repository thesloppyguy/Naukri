import { type InferSchemaType, model, Schema } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  role: {
    type: String,
    enum: ['User', 'Admin', 'Maintainer'],
    default: 'User',
  },
  organization: { type: Schema.Types.ObjectId, ref: 'Organization' },
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>('User', userSchema);
