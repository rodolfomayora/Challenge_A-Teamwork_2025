import styles from './styles.module.css';

export function TagTitle({ children, ...props }) {
  return (
    <div className={styles.TagTitle} {...props}>{children}</div>
  );
}