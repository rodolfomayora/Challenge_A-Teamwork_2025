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
          <img src="/icons/facebook.png" />
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
          <img src="/icons/instagram.png" />
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
          <img src="/icons/linkedin.png" />
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
          <img src="/icons/twitter-x.png" />
        </a>
      </li>
    </ul>
  );
}