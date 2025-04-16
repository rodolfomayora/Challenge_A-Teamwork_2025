import styles from './styles.module.css';

export function Input({ label, type = 'text', ...props }) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <input className={styles.input} type={type} {...props} />
    </label>
  );
}