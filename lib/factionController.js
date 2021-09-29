import Faction from '../models/Faction.js';

const factionController = {
  async getFactions() {
    try {
      const data = await Faction.find({}, { _id: 0 })
        .select('name gamesPlayed gamesWon winrateVsFaction')
        .lean();
      return data;
    } catch (err) {
      console.log(err);
    }
  },

  async updateFaction(newData) {
    try {
      const updatedData = await Faction.findOneAndUpdate(
        { name: newData.faction },
        newData,
        {
          new: true,
          upsert: true,
        }
      );
      return updatedData;
    } catch (err) {
      console.log(err);
    }
  },
};

export default factionController;
