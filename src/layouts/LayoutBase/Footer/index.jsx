import { NewsletterForm } from './NewsletterForm/indext';
import { SocialLinks } from './SocialLinks';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.Footer}>
      {/* Footer Top */}
      <div className={styles.footerTop}>
        <div className={styles.aboutWapper}>
          <h4 className={styles.title}>ABOUT</h4>
          <p className={styles.about}>Vrume’s team has been working in the performance marketing industry since 2001. We
          are a passionate team of professionals that love the challenges the online space provides. We are
          here to help our clients and look forward to helping you.</p>
        </div>

        <nav className={styles.socialWrapper}>
          <h4 className={styles.title}>SOCIAL</h4>
          <SocialLinks />
        </nav>

        <div className={styles.newsletterWrapper}>
          <h4 className={styles.title}>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <NewsletterForm />
        </div>
      </div>

      {/* Footer bottom */}
      <div className={styles.footerBottom}>
        <address className={styles.address}>Platform @ The Junction. 5 Edinburgh Rd S Guelph, Ont N1H 5N8, Canada</address>
        <small className={styles.copyright}>Copyright © 2024 Vrume. All rights reserved.</small>
      </div>
    </footer>
  );
}