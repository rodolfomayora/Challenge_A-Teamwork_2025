import styles from './styles.module.css';

export function ServiceList() {
  return (
    <ul className={styles.ServiceList}>
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
  );
}