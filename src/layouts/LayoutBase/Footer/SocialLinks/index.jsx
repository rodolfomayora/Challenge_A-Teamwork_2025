import Image from 'next/image';
import styles from './styles.module.css';

export function SocialLinks() {
  return (
    <ul className={styles.SocialLinks}>
      <li>
        <a
          className={styles.Link}
          href="#"
          target="_blank"
          rel="external noreferrer noopener"
          aria-label="Facebook"
        >
          <Image
            src="/icons/facebook.png"
            alt="Facebook"
            width="32" height="32"
          />
        </a>
      </li>
      <li>
        <a
          className={styles.Link}
          href="#"
          target="_blank"
          rel="external noreferrer noopener"
          aria-label="Instragram"
        >
          <Image
            src="/icons/instagram.png"
            alt="Instragram"
            width="32" height="32"
          />
        </a>
      </li>
      <li>
        <a
          className={styles.Link}
          href="#"
          target="_blank"
          rel="external noreferrer noopener"
          aria-label="LinkeIn"
        >
          <Image
            src="/icons/linkedin.png"
            alt="LinkeIn"
            width="32" height="32"
          />
        </a>
      </li>
      <li>
        <a
          className={styles.Link}
          href="#"
          target="_blank"
          rel="external noreferrer noopener"
          aria-label="Twitter-X"
        >
          <Image
            src="/icons/twitter-x.png"
            alt="Twitter-X"
            width="32" height="32"
          />
        </a>
      </li>
    </ul>
  );
}