import styles from './styles.module.css';

export function MobileNavigationButton({ isExpanded, onClick }) {
  const buttonIcon = isExpanded ?
    <img className={styles.toggleButton} src="/icons/menu-open.png" width="34" height="34" /> :
    <img className={styles.toggleButton} src="/icons/menu-close.png" width="34" height="34" /> ; 

  return (
    <button className={styles.MobileNavigationButton} onClick={onClick}>
      {buttonIcon}
    </button>
  );
}