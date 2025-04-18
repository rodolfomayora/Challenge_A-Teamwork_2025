import styles from './styles.module.css';

export function TagTitle({ children, className = styles.TagTitle, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}