import Layout from '../components/Layout';
import { getSession } from 'next-auth/react';
import MatchHistory from '../components/MatchHistory';
import dbConnect from '../lib/dbConnect';
import Game, { gameInterface } from '../models/Game';
import User from '../models/User';
import { GetServerSideProps } from 'next';

type Props = {
  username: string;
  email: string;
  userGames: gameInterface[];
};

export default function Profile({ username, email, userGames }: Props) {
  return (
    <Layout>
      <MatchHistory username={username} userGames={userGames} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
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
};
