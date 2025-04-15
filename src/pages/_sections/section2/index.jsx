import { Container } from '@/components/Container';
import { TagTitle } from '@/components/TagTitle';
import styles from './styles.module.css';

export function Section2() {
  return (
    <section>
      <Container>
        <div className={styles.content}>
          <TagTitle style={{ color: "var(--color-orange)"}}>What we do?</TagTitle>
          <h2 className={styles.title}>Engage, Convert, and Scale Your Business with Precision</h2>
          <p className={styles.info}>We don’t just offer standard advertising solutions — we help you build real connections with your audience  <strong>social media ads, affiliate marketing,</strong> and <strong>email campaigns</strong> that are tailored to your business. Here’s how we stand out.</p>

          <ul className={styles.cardGrid}>
            <li className={styles.card}>
              {/* <img src="" alt="" /> */}
              <h3>CPC & CPL Performance Marketing</h3>
              <p>Our <strong>performance-based marketing</strong> models give you the <strong>power</strong> to only pay for what works. Whether it’s <strong>CPC</strong> (Cost Per Click) or <strong></strong> (Cost Per Lead), our model ensures that you’re investing in conversions and measurable results.</p>
            </li>
            <li className={styles.card}>
              {/* <img src="" alt="" /> */}
              <h3>Targeted Ads That Reach Your Ideal Audience</h3>
              <p>Our advanced targeting ensures that your message reaches the <strong>right people</strong> at the right time.  <strong>native ads</strong> and <strong>targeted social media campaigns,</strong> you’re not just throwing ads into the void — you’re speaking directly to a hand-picked audience primed to take action.</p>
            </li>
            <li className={styles.card}>
              {/* <img src="" alt="" /> */}
              <h3>Social Media & Email Marketing Expertise</h3>
              <p>Leverage the power of <strong>email marketing, social networking in marketing,</strong> and <strong>affiliate strategies</strong> to build a list of loyal subscribers, followers, and buyers. We craft email <strong>campaigns</strong> that cut through the noise, driving <strong>conversions</strong> and improving <strong>customer retention.</strong></p>
            </li>
            <li className={styles.card}>
              {/* <img src="" alt="" /> */}
              <h3>Affiliate Networks & Marketing</h3>
              <p>Scale your business with high-performing <strong>affiliate marketing</strong> strategies. By partnering with our extensive <strong>affiliate network</strong>, you gain access to a world of <strong>qualified leads</strong> and <strong>targeted marketing opportunities</strong> that will supercharge your growth.</p>
            </li>
            <li className={styles.card}>
              {/* <img src="" alt="" /> */}
              <h3>Premium Traffic Sources</h3>
              <p>Maximize the impact of your campaigns with <strong>premium traffic</strong> that’s <strong>highly targeted</strong> and
              guaranteed to increase your visibility and sales. Our proprietary network of traffic sources is
              designed to deliver <strong>high-quality leads</strong> that convert at a higher rate.</p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}