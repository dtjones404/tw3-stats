import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/terms">
        <a>Privacy Policy</a>
      </Link>
      <Link href="/terms">
        <a>Terms of Service</a>
      </Link>
      <Link href="/contact">
        <a>Contact Us</a>
      </Link>
    </footer>
  );
}
