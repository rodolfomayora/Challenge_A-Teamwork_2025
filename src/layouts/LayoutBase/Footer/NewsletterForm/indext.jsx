import { Button } from '@/components/Button';
import styles from './styles.module.css';

export function NewsletterForm() {
  return (
    <form className={styles.NewsletterForm}>
      <label className={styles.label}>
        <span>Email</span>
        <input
          className={styles.input}
          type="email"
          placeholder="Your Email"
        />
      </label>
      <Button type="button">
        SUBMIT
      </Button>
    </form>
  );
}