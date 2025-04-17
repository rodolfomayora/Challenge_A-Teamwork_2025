import styles from './styles.module.css';

export function Testimony({ content, name, company }) {
  return (
    <div className={styles.Testimony}>
      <div className={styles.card}>
        <p className={styles.content}>“{content}”</p>
        <span className={styles.client}>{name}</span>
        <span className={styles.company}>{company}</span>
      </div>
    </div>
  );
}