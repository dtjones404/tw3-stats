import Layout from '../components/Layout';
import Faction, { factionInterface, factionNames } from '../models/Faction';
import dbConnect from '../lib/dbConnect';
import FactionTable from '../components/FactionTable.js';

export default function Index({ tableData }) {
  return (
    <Layout>
      <FactionTable factions={tableData} />
    </Layout>
  );
}

export async function getStaticProps() {
  await dbConnect();

  const factions = await Faction.find({}, { _id: 0 })
    .select('name gamesPlayed gamesWon winrateVsFaction')
    .lean()
    .exec();
  const tableData = factions.map((obj) => ({
    name: factionNames[obj.name],
    ...obj.winrateVsFaction,
  }));
  return {
    props: { tableData },
  };
}
