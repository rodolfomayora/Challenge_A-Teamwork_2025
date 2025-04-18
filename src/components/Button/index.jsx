import styles from './styles.module.css';

export function Button({ children, className = styles.Button, ...props }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}