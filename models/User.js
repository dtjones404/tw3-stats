import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    apiKey: { type: String, required: false },
  },
  { timestamps: true }
);

// necessary for hot-reload dev environment
export default (mongoose.models ? mongoose.models.user : null) ||
  mongoose.model('user', userSchema);
