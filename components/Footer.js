import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/privacy">
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
};
