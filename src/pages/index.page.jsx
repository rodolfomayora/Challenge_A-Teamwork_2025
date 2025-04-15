import Head from "next/head";
import { LayoutBase } from '@/layouts/LayoutBase';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import styles from './styles.module.css';
// import Image from "next/image";


import { TagTitle } from '@/components/TagTitle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Vrume</title>
        <meta name="description" content="VRUME home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutBase>
        <section className={styles.section1}>
          <Container>
            <div className={styles.heroContent}>
              <TagTitle>Welcome to Vrume</TagTitle>
              <h1 className={styles.mainTitle}>Drive Profits with Targeted Advertising Solutions</h1>
              <p className={styles.text}>Whether you’re a seasoned marketer or just starting to scale your business, our customized online strategies will accelerate your growth and drive targeted customers straight to your offers.</p>
              <Button style={{ letterSpacing: "-0.3px", wordSpacing: 1, paddingInline: 26 }}>
                BECOME AN ADVERTISER!
              </Button>
              <img className={styles.heroImage} src="/assets/B&W Man Red.png" alt="hero section" />
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className={styles.content}>
              <TagTitle style={{ color: "var(--color-orange)"}}>What we do?</TagTitle>
              <h2 className={styles.title}>Engage, Convert, and Scale Your Business with Precision</h2>
              <p>We don’t just offer standard advertising solutions — we help you build real connections with your audience  <strong>social media ads, affiliate marketing,</strong> and <strong>email campaigns</strong> that are tailored to your business. Here’s how we stand out.</p>

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

        <section style={{ backgroundColor: "var(--color-black)", color: "var(--color-white)", display: "none" }}>
          <Container>
            <div className={styles.content}>
              <div className={styles.tagTitle}>How Vrume Works</div>
              <h2 className={styles.title}>Our process is designed to be simple, effective, and ROI-focused.</h2>
              <ul className={styles.stepList}></ul>
              [Step 1]
              Title: Identify Your Audience
              Content: Using our advanced targeting tools, we define your target audience based on
              demographics, behavior, and interests. Whether you’re in business marketing, mobile advertising,
              or native display ads, we ensure your campaigns hit the mark.
              [Step 2]
              Title: Customize Your Campaign
              Content: From ads branding to campaigns on Instagram or social network ads, we create
              tailor-made ads that resonate with your audience, ensuring that every impression counts.
              [Step 3]
              Title: Optimize for Conversions
              Content: Continuous monitoring and tracking conversions through detailed analytics help us
              fine-tune your campaigns, ensuring that your investment continues to generate results. Our
              expertise in media buying and ads placement ensures that your budget is being spent wisely,
              leading to maximum returns.
              [Step 4]
              Title: Scale Your Success
              Content: Once your campaigns are performing well, we work with you to scale them. Whether it’s
              ramping up your CPC ads, expanding affiliate partnerships, or exploring new advertising platforms
              online, we help you grow efficiently and sustainably.
            </div>
          </Container>
        </section>

        <section style={{ display: "none" }}>
          <Container>
            <div className={styles.content}>
              <div className={styles.tagTitle}>Our clients love us</div>
              <h2 className={styles.title}>Title: What Our Customers Have to Say</h2>
              <ul className={styles.testimonialCarousel}></ul>
              [Testimonial 1]
              Content: "Vrume has been providing us with exceptional traffic for 2 years now, they provide
              fantastic support and are capable to supply traffic in numerous geos. Highly recommended"
              Name: Matt
              Company: Tremendio Network
              [Testimonial 2]
              Content: "I've been working with Vrume for quite some time now. It's been a blast so far! Strong
              collaboration, fast communication and all round good guys! Looking forward to see what the
              future will bring"
              Name: Jarno
              Company: Rebll Network
              [Testimonial 3]
              Content: "We have been working with Mark and his team for many years. They provide profitable
              traffic and excellent support. We appreciate very much our cooperation. Highly recommended!"
              Name: Alina
              Company: Mirelia Networks
              [Testimonial 4]
              Content: "Vrume has been providing MBNexus with exceptional traffic for 2 years now, they
              provide fantastic support and are capable to supply traffic in numerous geos. Highly
              recommended"
              Name: Tarik
              Company: MB Nexus
              [Testimonial 5]
              Content: "Been working with Vrume for years now. They really know how to keep delivering high
              quality traffic along with all the assistance in maximizing the results. Highly recommend Vrume to
              anyone who is looking for a long term stable relationship in terms of buying traffic"
              Name: Ovation
              Company: Ovation
              [Testimonial 6]
              Content: "We have been using Vrume for years! Solid clicks, solid service and solid ROI"
              Name: Primary Marketing BV
              Company: Primary Marketing
              [Testimonial 7]
              Content: “I have worked with Vrume for 2+ years and it’s been a great experience. He provides
              high-quality traffic for multiple geos, is easy to work with, and always delivers on time.”
              Name: Marinus
              Company: Admolly
              [Testimonial 8]
              Content: “I have worked with Mark and his team from Vrume since 2005. They know how to drive
              quality traffic and work with their buyers to get results.”
              Name: Daniel
              Company: AdWorldMedia
            </div>
          </Container>
        </section>

        <section style={{ backgroundColor: "var(--color-black-dark)", color: "var(--color-white)", display: "none" }}>
          <Container>
            <div className={styles.content}>
              <div className={styles.tagTitle}>Contact Us</div>
              <h2 className={styles.title}>Get Started Today</h2>
              <p>Ready to elevate your advertising game? Join the hundreds of businesses already driving
              success with <strong>VRUME’s targeted advertising solutions.</strong> Whether you’re focused on
              <strong>email ads, Instagram ads,</strong> or <strong>affiliate marketing,</strong> we’ve got the
              expertise and resources to help you succeed.</p>
              <button>Apply to become an Advertiser!</button>
              <form>
                <label>
                  <span>First Name</span>
                  <input type="text" placeholder="Enter Your First Name" />
                </label>
                <label>
                  <span>Last Name</span>
                  <input type="text" placeholder="Enter Your Last Name" />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" placeholder="Email Address" />
                </label>
                <label>
                  <span>Your message (optional)</span>
                  <textarea placeholder="Write Your Message"></textarea>
                </label>
                <button type="button">Submit</button>
              </form>
            </div>
          </Container>
        </section>
      </LayoutBase>
    </>
  );
}
