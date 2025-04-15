import { Button } from '@/components/Button';
import styles from './styles.module.css';

export function ButtonSection({ children, ...props }) {
  return (
    <Button className={styles.ButtonSection} {...props}>
      {children}
    </Button>
  );
}