import dbConnect from '../lib/dbConnect';

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
