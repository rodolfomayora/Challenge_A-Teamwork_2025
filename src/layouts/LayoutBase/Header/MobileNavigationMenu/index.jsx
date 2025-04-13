import { Links } from '../Links';
import { Container } from '@/components/Container';
import styles from './styles.module.css';

export function MobileNavigationMenu() {
  return (
    <nav className={styles.MobileNavigationMenu}>
      <Container>
        <ul className={styles.linkList}>
          <Links />
        </ul>
      </Container>
    </nav>
  );
}