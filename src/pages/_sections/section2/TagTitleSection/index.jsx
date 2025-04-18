import { TagTitle } from '@/components/TagTitle';
import styles from './styles.module.css';

export function TagTitleSection({ children, ...props }) {
  return (
    <TagTitle className={styles.TagTitleSection} {...props}>
      {children}
    </TagTitle>
  );
}