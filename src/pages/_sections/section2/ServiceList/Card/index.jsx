import styles from './styles.module.css';

export function Card({ image, title, text }) {
  return (
    <div className={styles.Card}>
      <img
        className={styles.image}
        src={image}
        alt="service"
        width="120" height="120"
      />
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}