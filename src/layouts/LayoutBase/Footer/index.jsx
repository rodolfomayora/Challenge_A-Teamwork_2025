import { Container } from '@/components/Container';

import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerTop}>
        <div className={styles.about}>
          <h4>ABOUT</h4>
          <p>Vrume’s team has been working in the performance marketing industry since 2001. We
          are a passionate team of professionals that love the challenges the online space provides. We are
          here to help our clients and look forward to helping you.</p>
        </div>

        <nav className={styles.social}>
          <h4>SOCIAL</h4>
          <ul className={styles.linkList}>
            <li>
              <a 
                className={styles.link}
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
                className={styles.link}
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
                className={styles.link}
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
                className={styles.link}
                href="#"
                target="_blank"
                rel="external noreferrer noopener"
                aria-label="Twitter-X"
              >
                <img src="/icons/twitter-x.png" />
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.newsletter}>
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <form className={styles.newsletterForm}>
            <label className={styles.emailLabel}>
              <span>Email</span>
              <input type="text" className={styles.emailInput} />
            </label>
            <button
              className={styles.button}
              type="button"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <address className={styles.address}>Platform @ The Junction. 5 Edinburgh Rd S Guelph, Ont N1H 5N8, Canada</address>
        <small className={styles.copyright}>Copyright © 2024 Vrume. All rights reserved.</small>
      </div>
    </footer>
  );
}