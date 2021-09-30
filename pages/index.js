import Head from 'next/head';
import Image from 'next/image';
import Faction, { factionNames } from '../models/Faction.js';
import dbConnect from '../lib/dbConnect';
import { FactionTable } from '../components/FactionTable.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import styles from '../styles/Index.module.css';

export default function Index({ tableData }) {
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
        <FactionTable factions={tableData} />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  await dbConnect();

  const factions = await Faction.find({}, { _id: 0 })
    .select('name gamesPlayed gamesWon winrateVsFaction')
    .lean()
    .exec();
  const tableData = factions.map((obj) => ({
    name: factionNames[obj.name],
    ...obj.winrateVsFaction,
  }));
  return {
    props: { tableData },
  };
}
