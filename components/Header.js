import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { signIn, signOut, useSession } from 'next-auth/client';

export const Header = () => {
  const { session, loading } = useSession();
  return (
    <nav className={styles.header}>
      <h1 className={styles.logo}>
        <a href="#">Total Warhammer Stats</a>
      </h1>
      <ul className={styles.mainNav}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>

        {!loading && !session && (
          <li>
            <Link href="/api/auth/signin">
              <a onClick={signIn('github')}>Sign In</a>
            </Link>
          </li>
        )}

        {session && (
          <li>
            <Link href="/api/auth/signout">
              <a onClick={signOut()}>Sign Out</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
