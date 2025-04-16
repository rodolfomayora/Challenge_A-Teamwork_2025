import styles from './styles.module.css';

export function Textarea({
  label,
  placeholder = '',
  type = 'text',
  value = '',
  onChange = () => {}, 
}) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <textarea
        className={styles.textarea}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </label>
  );
}