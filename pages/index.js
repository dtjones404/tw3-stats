import Faction from '../models/Faction.js';
import dbConnect from '../lib/dbConnect';
import { FactionTable } from '../components/FactionTable.js';

export default function Index({ tableData }) {
  return <FactionTable factions={tableData} />;
}

export async function getStaticProps() {
  await dbConnect();

  const factions = await Faction.find({}, { _id: 0 })
    .select('name gamesPlayed gamesWon winrateVsFaction')
    .lean()
    .exec();
  const tableData = factions.map((obj) => ({
    name: obj.name,
    ...obj.winrateVsFaction,
  }));
  return {
    props: { tableData },
  };
}
