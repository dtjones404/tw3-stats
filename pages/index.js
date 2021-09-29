import Faction from '../models/Faction.js';
import dbConnect from '../lib/dbConnect';

export default function Index({ factions }) {
  return (
    <div>
      {factions.map(({ name, gamesPlayed, gamesWon, winrateVsFaction }) => (
        <div>
          <div>{name}</div>
          <div>{gamesPlayed}</div>
          <div>{gamesWon}</div>
          <div>{JSON.stringify(winrateVsFaction)}</div>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  await dbConnect();

  try {
    const factions = await Faction.find({}, { _id: 0 })
      .select('name gamesPlayed gamesWon winrateVsFaction')
      .lean();
    return {
      props: { factions },
      revalidate: 10000, // in seconds.
    };
  } catch (err) {
    console.log(err);
  }
}
