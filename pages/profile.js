import Layout from '../components/Layout';
import { getSession, signIn } from 'next-auth/client';
import dbConnect from '../lib/dbConnect';
import Game from '../models/Game';
import User from '../models/User';

export default function Profile({ username, email, userGames }) {
  return <Layout>{(username, email, userGames)}</Layout>;
}

export async function getServerSideProps(context) {
  await dbConnect();
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin`,
        permanent: false,
      },
    };
  }
  const email = session.user.email;
  const username = User.findOne({ email });
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
