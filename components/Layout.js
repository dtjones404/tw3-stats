import Head from 'next/head';
import Image from 'next/image';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import styles from '../styles/Layout.module.css';
import { useEffect } from 'react';

export default function Layout({ children }) {
  useEffect(() => {
    document.querySelector('#__next').className = styles.next;
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Total Warhammer Stats</title>
        <meta
          name="description"
          content="Statistics for Total War: Warhammer III"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.bgWrap}>
          <Image
            src="/bg.jpg"
            alt="Warhammer III Splash"
            layout="fill"
            objectFit="cover"
            priority={true}
            quality={100}
          />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
