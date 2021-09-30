import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema(
  {
    p1Username: { type: String, required: true },
    p1Faction: { type: String, required: true },
    p2Username: { type: String, required: true },
    p2Faction: { type: String, required: true },
    duration: { type: String, required: true },
    winner: String,
  },
  { timestamps: true }
);

// necessary for hot-reload dev environment
export default (mongoose.models ? mongoose.models.game : null) ||
  mongoose.model('game', gameSchema);
