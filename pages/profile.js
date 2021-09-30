import { useSession } from 'next-auth/client';
import Layout from '../components/Layout';

export default function Profile() {
  const [session, loading] = useSession();
  console.log(session, loading);
  return <Layout></Layout>;
}
