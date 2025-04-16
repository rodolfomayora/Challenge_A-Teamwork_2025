import { Container } from '@/components/Container';
import { ServiceList } from './ServiceList';
import { TagTitleSection } from './TagTitleSection';
import styles from './styles.module.css';

export function Section2() {
  return (
    <section className={styles.Section2}>
      <Container>
        <div className={styles.content}>
          <TagTitleSection>What we do?</TagTitleSection>
          <h2 className={styles.title}>Engage, Convert, and Scale Your Business with Precision</h2>
          <p className={styles.text}>We don’t just offer standard advertising solutions — we help you build real connections with your audience  <strong>social media ads, affiliate marketing,</strong> and <strong>email campaigns</strong> that are tailored to your business. Here’s how we stand out.</p>
          <ServiceList />
        </div>
      </Container>
    </section>
  );
}