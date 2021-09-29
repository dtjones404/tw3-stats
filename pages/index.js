// import factionController from '../lib/factionController';

// export default function Index({ factions }) {
//   return (
//     <div>
//       {factions.map(({ name, gamesPlayed, gamesWon, winrateVsFaction }) => (
//         <div>
//           <div>{name}</div>
//           <div>{gamesPlayed}</div>
//           <div>{gamesWon}</div>
//           <div>{winrateVsFaction}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

export default function Index() {
  return <div>hello world</div>;
}

// export async function getStaticProps() {
//   let factions = await factionController.getFactions();
//   return {
//     props: { factions },
//     revalidate: 10000, // in seconds.
//   };
// }
