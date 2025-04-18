import { Container } from '@/components/Container';
import { TagTitle } from '@/components/TagTitle';
import { StepList } from './StepList';
import styles from './styles.module.css';

export function Section3() {
  return (
    <section className={styles.Section3}>
      <Container>
        <div className={styles.content}>
          <TagTitle>How Vrume Works</TagTitle>
          <h2 className={styles.title}>Our process is designed to be simple, effective, and ROI-focused.</h2>
          <StepList />
        </div>
      </Container>
    </section>
  );
}