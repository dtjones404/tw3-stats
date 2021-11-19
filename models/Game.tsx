import mongoose from 'mongoose';

export interface gameInterface {
  p1Username: string;
  p1Faction: string;
  p2Username: string;
  p2Faction: string;
  duration: string;
  winner?: string;
}

const gameSchema = new mongoose.Schema<gameInterface>(
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
  mongoose.model<gameInterface>('game', gameSchema);
