import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { useState, useEffect } from 'react';
import { signIn, signOut, getSession } from 'next-auth/client';

export const Header = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      const session = await getSession();
      console.log({ session });
      setSession(session);
      setLoading(false);
    };
    checkLogin();
  }, []);

  return (
    <nav className={styles.header}>
      <h1 className={styles.logo}>
        <a href="#">Total Warhammer Stats</a>
      </h1>
      <ul
        className={`${styles.mainNav} ${
          !session && loading ? styles.loading : styles.loaded
        }`}
      >
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
              <a onClick={() => signIn('github')}>Sign In</a>
            </Link>
          </li>
        )}

        {session && (
          <li>
            <Link href="/api/auth/signout">
              <a onClick={() => signOut()}>Sign Out</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
