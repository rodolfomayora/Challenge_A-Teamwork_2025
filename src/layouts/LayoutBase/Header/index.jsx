import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.Header}>
      {/* menu desktop */}
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <div>
            <a href="#">
              <img className={styles.logo} src="/assets/VRUME-white-with-red-dot.png" alt="Vrume Logo" width="140" height="50" />
            </a>
          </div>
          <div>
            <img className={styles.toggleButton} src="/icons/menu-close.png" width="34" height="34" />
            {/* <img className={styles.toggleButton} src="/icons/menu-open.png" width="34" height="34" /> */}
          </div>
          {/*<ul className={styles.desktopNavigation}>
            <li><a>Home</a></li>
            <li><a>Advertisers</a></li>
            <li><a>Publisher</a></li>
            <li><a>Case Studies</a></li>
            <li><a>Contact us</a></li>
          </ul> */}
        </nav>
      </div>
      {/* menu movile */}
      {/* <nav></nav> */}
    </header>
  );
}