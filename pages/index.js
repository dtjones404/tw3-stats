import factionController from '../lib/factionController';
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
  let factions = await factionController.getFactions();
  return {
    props: { factions },
    revalidate: 10000, // in seconds.
  };
}
