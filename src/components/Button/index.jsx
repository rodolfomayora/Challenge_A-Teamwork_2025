import styles from './styles.module.css';

export function Button({ children, ...props }) {
  return (
    <button className={styles.Button} {...props}>
      {children}
    </button>
  );
}