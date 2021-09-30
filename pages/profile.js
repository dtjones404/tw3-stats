import Layout from '../components/Layout';
import { getSession } from 'next-auth/client';
import MatchHistory from '../components/MatchHistory';
import dbConnect from '../lib/dbConnect';
import Game from '../models/Game';
import User from '../models/User';

export default function Profile({ username, email, userGames }) {
  return (
    <Layout>
      <MatchHistory username={username} userGames={userGames} />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  //TEST
  // return {
  //   props: {
  //     username: 'dtjones',
  //     email: 'dustintaylorjones@gmail.com',
  //     userGames: [
  //       {
  //         p1Faction: 'Vampire Counts',
  //         p2Faction: 'Nurgle',
  //         p1Username: 'dtjones',
  //         p2Username: 'next_js',
  //         duration: '5:50',
  //         winner: 'dtjones',
  //       },
  //       {
  //         p1Faction: 'Vampire Counts',
  //         p2Faction: 'Beastmen',
  //         p1Username: 'dtjones',
  //         p2Username: 'next_js',
  //         duration: '10:08',
  //         winner: 'dtjones',
  //       },
  //       {
  //         p1Faction: 'Beastmen',
  //         p2Faction: 'Vampire Coast',
  //         p1Username: 'dtjones',
  //         p2Username: 'sTaTiCReNdErInG',
  //         duration: '11:17',
  //         winner: 'dtjones',
  //       },
  //       {
  //         p1Faction: 'Lizardmen',
  //         p2Faction: 'Dark Elves',
  //         p1Username: 'dtjones',
  //         p2Username: 'next_js',
  //         duration: '7:24',
  //         winner: 'dtjones',
  //       },
  //       {
  //         p1Faction: 'Dark Elves',
  //         p2Faction: 'Dwarfs',
  //         p1Username: 'dtjones',
  //         p2Username: 'Reactxtable',
  //         duration: '12:12',
  //         winner: 'Reactxtable',
  //       },
  //       {
  //         p1Faction: 'Skaven',
  //         p2Faction: 'Slaanesh',
  //         p1Username: 'dtjones',
  //         p2Username: 'next_js',
  //         duration: '6:15',
  //         winner: 'dtjones',
  //       },
  //       {
  //         p1Faction: 'Beastmen',
  //         p2Faction: 'Empire',
  //         p1Username: 'dtjones',
  //         p2Username: 'Mong00ose',
  //         duration: '7:55',
  //         winner: 'dtjones',
  //       },
  //       {
  //         p1Faction: 'Warriors of Chaos',
  //         p2Faction: 'Dwarfs',
  //         p1Username: 'dtjones',
  //         p2Username: 'next_js',
  //         duration: '11:50',
  //         winner: 'dtjones',
  //       },
  //       {
  //         p1Faction: 'Dwarfs',
  //         p2Faction: 'Tzeentch',
  //         p1Username: 'dtjones',
  //         p2Username: 'Mong00ose',
  //         duration: '3:06',
  //         winner: 'Mong00ose',
  //       },
  //       {
  //         p1Faction: 'Slaanesh',
  //         p2Faction: 'Norsca',
  //         p1Username: 'dtjones',
  //         p2Username: 'Mong00ose',
  //         duration: '12:48',
  //         winner: 'Mong00ose',
  //       },
  //     ],
  //   },
  // };

  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin`,
        permanent: false,
      },
    };
  }
  await dbConnect();
  const email = session.user.email;
  const user = await User.findOne({ email });
  const username = user.username;
  const userGames = await Game.find({
    $or: [{ p1Username: username }, { p1Username: username }],
  });
  return {
    props: {
      username,
      email,
      userGames,
    },
  };
}
