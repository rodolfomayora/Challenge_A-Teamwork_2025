import { Container } from '@/components/Container';
import { TagTitle } from '@/components/TagTitle';
import styles from './styles.module.css';

import { Carousel } from './Carousel';

export function Section4() {
  return (
    <section className={styles.Section4}>
      <Container>
        <div className={styles.content}>
        <TagTitle style={{ color: "var(--color-orange)"}}>Our clients love us</TagTitle>
          <h2 className={styles.title}>What Our Customers Have to Say</h2>
          <Carousel />
        </div>
      </Container>
    </section>
  );
}