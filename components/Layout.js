import Head from 'next/head';
import Image from 'next/image';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Head>
          <title>Total Warhammer Stats</title>
          <meta
            name="description"
            content="Statistics for Total War: Warhammer III"
          />
        </Head>
        <Header />
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