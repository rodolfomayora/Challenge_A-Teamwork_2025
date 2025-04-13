import { useState } from 'react';
import styles from './styles.module.css';

export function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  }
  const buttonIcon = isExpanded ?
    <img className={styles.toggleButton} src="/icons/menu-open.png" width="34" height="34" /> :
    <img className={styles.toggleButton} src="/icons/menu-close.png" width="34" height="34" /> ; 

  return (
    <header className={styles.Header}>
      {/* menu desktop */}
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <div className={styles.logoWrapper}>
            <a href="#">
              <img className={styles.logo} src="/assets/VRUME-white-with-red-dot.png" alt="Vrume Logo" width="140" height="50" />
            </a>
          </div>
          <div onClick={handleToggle}>
            {buttonIcon}
          </div>
          <div className={styles.desktopNavigationWrapper}>
            <ul className={styles.desktopNavigation}>
              <li><a className={styles.link} href="#">Home</a></li>
              <li><a className={styles.link} href="#">Advertisers</a></li>
              <li><a className={styles.link} href="#">Publisher</a></li>
              <li><a className={styles.link} href="#">Case Studies</a></li>
              <li><a className={styles.link} href="#">Contact us</a></li>
            </ul>
          </div>
        </nav>
      </div>
      {/* menu movile */}
      <nav className={styles.mobileNavigationWrapper} data-expanded={isExpanded}>
        <div className={styles.container}>
          <ul className={styles.mobileNavigation}>
            <li><a className={styles.link} href="#">Home</a></li>
            <li><a className={styles.link} href="#">Advertisers</a></li>
            <li><a className={styles.link} href="#">Publisher</a></li>
            <li><a className={styles.link} href="#">Case Studies</a></li>
            <li><a className={styles.link} href="#">Contact us</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}