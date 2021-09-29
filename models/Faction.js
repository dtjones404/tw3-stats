import mongoose from 'mongoose';

export const factionList = [
  'empire',
  'greenskins',
  'dwarfs',
  'vampireCounts',
  'warriorsOfChaos',
  'beastmen',
  'bretonnia',
  'woodElves',
  'norsca',
  'highElves',
  'lizardmen',
  'darkElves',
  'skaven',
  'tombKings',
  'vampireCoast',
  'kislev',
  'khorne',
  'nurgle',
  'slaanesh',
  'tzeentch',
  'grandCathay',
];

const factionSchema = new mongoose.Schema(
  {
    name: String,
    gamesPlayed: Number,
    gamesWon: Number,
    winrateVsFaction: {
      empire: Number,
      greenskins: Number,
      dwarfs: Number,
      vampireCounts: Number,
      warriorsOfChaos: Number,
      beastmen: Number,
      bretonnia: Number,
      woodElves: Number,
      norsca: Number,
      highElves: Number,
      lizardmen: Number,
      darkElves: Number,
      skaven: Number,
      tombKings: Number,
      vampireCoast: Number,
      kislev: Number,
      khorne: Number,
      nurgle: Number,
      slaanesh: Number,
      tzeentch: Number,
      grandCathay: Number,
    },
  },
  { timestamps: true }
);

// necessary for hot-reload dev environment
export default mongoose.models.faction ||
  mongoose.model('faction', factionSchema);
