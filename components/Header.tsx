import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
  const { data: session, status } = useSession(session);

  return (
    <nav className={styles.header}>
      <h1 className={styles.logo}>
        <a href="#">Total Warhammer Stats</a>
      </h1>
      <ul
        className={`${styles.mainNav} ${
          status === 'loading' ? styles.loading : styles.loaded
        }`}
      >
        <li>
          <Link href="/">
            <a>Download</a>
          </Link>
        </li>
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

        {status === 'unauthenticated' && (
          <li>
            <Link href="/api/auth/signin">
              <a onClick={() => signIn()}>Sign In</a>
            </Link>
          </li>
        )}

        {status === 'authenticated' && (
          <li>
            <Link href="/api/auth/signout">
              <a onClick={() => signOut()}>Sign Out</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
