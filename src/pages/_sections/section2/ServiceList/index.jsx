import styles from './styles.module.css';
import { Card } from './Card';

export function ServiceList() {
  return (
    <ul className={styles.ServiceList}>
      <li>
        <Card
          image="/assets/CPC-CPL-Performance-Marketing.png"
          title="CPC & CPL Performance Marketing"
          text={<>Our <strong>performance-based marketing</strong> models give you the <strong>power</strong> to only pay for what works. Whether it’s <strong>CPC</strong> (Cost Per Click) or <strong></strong> (Cost Per Lead), our model ensures that you’re investing in conversions and measurable results.</>}
        />
      </li>
      <li>
        <Card
          image="/assets/Targeted-Ads.png"
          title="Targeted Ads That Reach Your Ideal Audience"
          text={<>Our advanced targeting ensures that your message reaches the <strong>right people</strong> at the right time.  <strong>native ads</strong> and <strong>targeted social media campaigns,</strong> you’re not just throwing ads into the void — you’re speaking directly to a hand-picked audience primed to take action.</>}
        />
      </li>
      <li>
        <Card
          image="/assets/Social-Media-Email-Marketing-Expertise.png"
          title="Social Media & Email Marketing Expertise"
          text={<>Leverage the power of <strong>email marketing, social networking in marketing,</strong> and <strong>affiliate strategies</strong> to build a list of loyal subscribers, followers, and buyers. We craft email <strong>campaigns</strong> that cut through the noise, driving <strong>conversions</strong> and improving <strong>customer retention.</strong></>}
        />
      </li>
      <li>
        <Card
          image="/assets/Affiliate-Networks-Marketing.png"
          title="Affiliate Networks & Marketing"
          text={<>Scale your business with high-performing <strong>affiliate marketing</strong> strategies. By partnering with our extensive <strong>affiliate network</strong>, you gain access to a world of <strong>qualified leads</strong> and <strong>targeted marketing opportunities</strong> that will supercharge your growth.</>}
        />
      </li>
      <li>
        <Card
          image="/assets/Premium-Traffic.png"
          title="Premium Traffic Sources"
          text={<>Maximize the impact of your campaigns with <strong>premium traffic</strong> that’s <strong>highly targeted</strong> and
          guaranteed to increase your visibility and sales. Our proprietary network of traffic sources is
          designed to deliver <strong>high-quality leads</strong> that convert at a higher rate.</>}
        />
      </li>
    </ul>
  );
}