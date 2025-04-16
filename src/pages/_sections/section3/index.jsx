import { Container } from '@/components/Container';
import { TagTitle } from '@/components/TagTitle';
import styles from './styles.module.css';

export function Section3() {
  return (
    <section className={styles.Section3}>
      <Container>
        <div className={styles.content}>
          <TagTitle>How Vrume Works</TagTitle>
          <h2 className={styles.title}>Our process is designed to be simple, effective, and ROI-focused.</h2>
          <ul className={styles.stepList}>
            <li>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.info}>
                <span className={styles.stepTitle}>Identify Your Audience</span>
                <p className={styles.stepText}>Using our advanced targeting tools, we define your target audience based on demographics, behavior, and interests. Whether you’re in business marketing, mobile advertising, or native display ads, we ensure your campaigns hit the mark.</p>
              </div>
              </li>
            <li>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.info}>
                <span className={styles.stepTitle}>Customize Your Campaign</span>
                <p className={styles.stepText}>From ads branding to campaigns on Instagram or social network ads, we create tailor-made ads that resonate with your audience, ensuring that every impression counts.</p>
              </div>
            </li>
            <li>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.info}>
                <span className={styles.stepTitle}>Optimize for Conversions</span>
                <p className={styles.stepText}>Continuous monitoring and tracking conversions through detailed analytics help us fine-tune your campaigns, ensuring that your investment continues to generate results. Our expertise in media buying and ads placement ensures that your budget is being spent wisely, leading to maximum returns.</p>
              </div>
            </li>
            <li>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.info}>
                <span className={styles.stepTitle}>Scale Your Success</span>
                <p className={styles.stepText}>Once your campaigns are performing well, we work with you to scale them. Whether it’s ramping up your CPC ads, expanding affiliate partnerships, or exploring new advertising platforms online, we help you grow efficiently and sustainably.</p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}