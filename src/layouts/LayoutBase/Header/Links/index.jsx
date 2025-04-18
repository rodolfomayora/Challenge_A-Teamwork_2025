import Link from 'next/link'
import styles from './styles.module.css';

export function Links() {
  return (
    <>
      <li><Link className={styles.Link} href="/">Home</Link></li>
      <li><Link className={styles.Link} href="/">Advertisers</Link></li>
      <li><Link className={styles.Link} href="/">Publisher</Link></li>
      <li><Link className={styles.Link} href="/">Case Studies</Link></li>
      <li><Link className={styles.Link} href="/">Contact us</Link></li>
    </>
  );
}