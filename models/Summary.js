import mongoose from 'mongoose';

const factionList = [
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

const summarySchema = new mongoose.Schema({
  faction: String,
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
});

const Summary = mongoose.model('summary', summarySchema);

export default Summary;
