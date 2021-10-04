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
