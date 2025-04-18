import { Container } from '@/components/Container';
import { TagTitle } from '@/components/TagTitle';
import { Carousel } from './Carousel';
import styles from './styles.module.css';

export function Section4() {
  return (
    <section className={styles.Section4}>
      <Container>
        <div className={styles.content}>
          <TagTitle className={styles.customTagTitle}>Our clients love us</TagTitle>
          <h2 className={styles.title}>What Our Customers Have to Say</h2>
          <Carousel />
        </div>
      </Container>
    </section>
  );
}