import Link from 'next/link';
import { useState } from 'react';
import { Container } from './Container';
import { MobileNavigationMenu } from './MobileNavigationMenu';
import { MobileNavigationButton } from './MobileNavigationButton';
import { Links } from './Links';
import styles from './styles.module.css';

export function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => setIsExpanded((isExpanded) => !isExpanded);

  return (
    <header className={styles.Header}>
      <Container>
        <nav className={styles.navigation}>
          
          {/* Vrum logo */}
          <div className={styles.logoWrapper}>
            <Link href="/">
              <img src="/assets/VRUME-white-with-red-dot.png"
                className={styles.logo}
                alt="Vrume Logo"
                width="140" height="50"
              />
            </Link>
          </div>
          
          {/* menu desktop */}
          <div className={styles.desktopNavigationWrapper}>
            <ul className={styles.desktopNavigation}>
              <Links />
            </ul>
          </div>
          
          <div className={styles.mobileButtonWrapper}> {/* menu mobile button */}
            <MobileNavigationButton
              isExpanded={isExpanded}  
              onClick={handleToggle}
            />
          </div>
        </nav>
      </Container>

      {/* menu mobile */}
      <div className={styles.mobileNavigationWrapper} data-expanded={isExpanded}>
        <MobileNavigationMenu />
      </div>
    </header>
  );
}