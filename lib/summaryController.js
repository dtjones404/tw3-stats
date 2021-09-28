import Summary, { factionList } from '../models/summary.js';

export default summaryController = {
  async getSummaries() {
    try {
      const data = await Promise.all(
        factionList.map((factionName) => {
          return Summary.findOne({ faction: factionName });
        })
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  },

  async updateSummary(newData) {
    try {
      const updatedData = await Summary.findOneAndUpdate(
        { faction: newData.faction },
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
