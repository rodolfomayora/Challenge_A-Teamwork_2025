import styles from './styles.module.css';

export function Container({ children }) {
  return (
    <div className={styles.Container}>
      {children}
    </div>
  );
}