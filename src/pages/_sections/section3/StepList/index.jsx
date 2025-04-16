import styles from './styles.module.css';

export function StepList() {
  return (
    <ul className={styles.StepList}>
      <li>
        <div className={styles.number}>1</div>
        <div className={styles.info}>
          <span className={styles.title}>Identify Your Audience</span>
          <p className={styles.text}>Using our advanced targeting tools, we define your target audience based on demographics, behavior, and interests. Whether you’re in business marketing, mobile advertising, or native display ads, we ensure your campaigns hit the mark.</p>
        </div>
        </li>
      <li>
        <div className={styles.number}>2</div>
        <div className={styles.info}>
          <span className={styles.title}>Customize Your Campaign</span>
          <p className={styles.text}>From ads branding to campaigns on Instagram or social network ads, we create tailor-made ads that resonate with your audience, ensuring that every impression counts.</p>
        </div>
      </li>
      <li>
        <div className={styles.number}>3</div>
        <div className={styles.info}>
          <span className={styles.title}>Optimize for Conversions</span>
          <p className={styles.text}>Continuous monitoring and tracking conversions through detailed analytics help us fine-tune your campaigns, ensuring that your investment continues to generate results. Our expertise in media buying and ads placement ensures that your budget is being spent wisely, leading to maximum returns.</p>
        </div>
      </li>
      <li>
        <div className={styles.number}>4</div>
        <div className={styles.info}>
          <span className={styles.title}>Scale Your Success</span>
          <p className={styles.text}>Once your campaigns are performing well, we work with you to scale them. Whether it’s ramping up your CPC ads, expanding affiliate partnerships, or exploring new advertising platforms online, we help you grow efficiently and sustainably.</p>
        </div>
      </li>
    </ul>
  );
}