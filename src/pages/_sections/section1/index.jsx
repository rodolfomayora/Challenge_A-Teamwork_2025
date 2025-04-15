import { Container } from '@/components/Container';
import { TagTitle } from '@/components/TagTitle';
import { ButtonSection } from './ButtonSection';
import styles from './styles.module.css';

export function Section1() {
  return (
    <section className={styles.Section1}>
      <Container>
        <div className={styles.content}>
          <TagTitle>Welcome to Vrume</TagTitle>
          <h1 className={styles.mainTitle}>Drive Profits with Targeted Advertising Solutions</h1>
          <p className={styles.text}>Whether you’re a seasoned marketer or just starting to scale your business, our customized online advertising strategies will accelerate your growth and drive targeted customers straight to your offers.</p>
          <ButtonSection>BECOME AN ADVERTISER!</ButtonSection>
          <img
            className={styles.image}
            src="/assets/B&W Man Red.png"
            alt="hero section"
            width="400"
            height="400"
          />
        </div>
      </Container>
    </section>
  );
}