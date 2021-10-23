import mongoose from 'mongoose';

export interface userInterface {
  username: string;
  email: string;
  apiKey: string;
}

const userSchema = new mongoose.Schema<userInterface>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    apiKey: { type: String, required: false },
  },
  { timestamps: true }
);

// necessary for hot-reload dev environment
export default (mongoose.models ? mongoose.models.user : null) ||
  mongoose.model<userInterface>('user', userSchema);
