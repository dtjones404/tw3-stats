import dbConnect from '../lib/dbConnect';
import Faction from '../models/Faction';

const factionController = {
  async updateFaction(newData) {
    try {
      await dbConnect();

      const updatedData = await Faction.findOneAndUpdate(
        { name: newData.name },
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
