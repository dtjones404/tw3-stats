import mongoose from 'mongoose';

export const factionNames = {
  empire: 'Empire',
  greenskins: 'Greenskins',
  dwarfs: 'Dwarfs',
  vampireCounts: 'Vampire Counts',
  warriorsOfChaos: 'Warriors of Chaos',
  beastmen: 'Beastmen',
  bretonnia: 'Bretonnia',
  woodElves: 'Wood Elves',
  norsca: 'Norsca',
  highElves: 'High Elves',
  lizardmen: 'Lizardmen',
  darkElves: 'Dark Elves',
  skaven: 'Skaven',
  tombKings: 'Tomb Kings',
  vampireCoast: 'Vampire Coast',
  kislev: 'Kislev',
  khorne: 'Khorne',
  nurgle: 'Nurgle',
  slaanesh: 'Slaanesh',
  tzeentch: 'Tzeentch',
  grandCathay: 'Grand Cathay',
  ogreKingdoms: 'Ogre Kingdoms',
};

export interface factionInterface {
  name: string;
  gamesPlayed: number;
  gamesWon: number;
  winrateVsFaction: {
    empire: number;
    greenskins: number;
    dwarfs: number;
    vampireCounts: number;
    warriorsOfChaos: number;
    beastmen: number;
    bretonnia: number;
    woodElves: number;
    norsca: number;
    highElves: number;
    lizardmen: number;
    darkElves: number;
    skaven: number;
    tombKings: number;
    vampireCoast: number;
    kislev: number;
    khorne: number;
    nurgle: number;
    slaanesh: number;
    tzeentch: number;
    grandCathay: number;
    ogreKingdoms: number;
  };
}

const factionSchema = new mongoose.Schema<factionInterface>(
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
      ogreKingdoms: Number,
    },
  },
  { timestamps: true }
);

// necessary for hot-reload dev environment
export default (mongoose.models ? mongoose.models.faction : null) ||
  mongoose.model<factionInterface>('faction', factionSchema);
