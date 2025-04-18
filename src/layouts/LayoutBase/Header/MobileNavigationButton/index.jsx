import Image from 'next/image';
import styles from './styles.module.css';

export function MobileNavigationButton({ isExpanded, onClick }) {
  const buttonIcon = isExpanded ?
    <Image
      className={styles.toggleButton}
      src="/icons/menu-open.png"
      alt="menu open"
      width="34" height="34"
    /> :
    <Image
      className={styles.toggleButton}
      src="/icons/menu-close.png"
      alt="menu close"
      width="34" height="34"
    /> ; 

  return (
    <button className={styles.MobileNavigationButton} onClick={onClick}>
      {buttonIcon}
    </button>
  );
}