import Head from "next/head";
import { LayoutBase } from '@/layouts/LayoutBase';
import { Section1 } from './_sections/section1';
import { Section2 } from './_sections/section2';
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
        <Section1 />
        <Section2 />

        <section style={{ backgroundColor: "var(--color-black)", color: "var(--color-white)" }}>
          <Container>
            <div className={styles.content}>
              <div className={styles.tagTitle}>How Vrume Works</div>
              <h2 className={styles.title}>Our process is designed to be simple, effective, and ROI-focused.</h2>
              <ul className={styles.stepList}>
                <li>
                  [Step 1]
                  <h3>Identify Your Audience</h3>
                  <p>Using our advanced targeting tools, we define target audience based on demographics, behavior, and interests. Whether you’re in business marketing, mobile advertising, or native display ads, we ensure your campaigns hit the mark.</p>
                </li>
                <li>
                  [Step 2]
                  <h3>Customize Your Campaign</h3>
                  <p>From ads branding to campaigns on Instagram or network ads, we create tailor-made ads that resonate with your audience, ensuring that every impression counts.</p>
                </li>
                <li>
                  [Step 3]
                  <h3>Optimize for Conversions</h3>
                  <p>Continuous monitoring and tracking conversions through detailed analytics help us fine-tune your campaigns, ensuring that your investment continues to generate results. Our expertise in media buying and ads placement ensures that your budget is being spent wisely, leading to maximum returns.</p>
                </li>
                <li>
                  [Step 4]
                  <h3>Scale Your Success</h3>
                  <p>Once your campaigns are performing well, we work with you to scale them. Whether it’s ramping up your CPC ads, expanding affiliate partnerships, or exploring new advertising platforms online, we help you grow efficiently and sustainably.</p>
                </li>
              </ul>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className={styles.content}>
            <TagTitle style={{ color: "var(--color-orange)"}}>Our clients love us</TagTitle>

              <h2 className={styles.title}>What Our Customers Have to Say</h2>
              <ul className={styles.testimonialCarousel} style={{ display: "none" }}>
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
              </ul>
            </div>
          </Container>
        </section>

        <section style={{ backgroundColor: "var(--color-black-dark)", color: "var(--color-white)" }}>
          <Container>
            <div className={styles.content + " " + styles.formSection}>
              <div style={{ display: 'grid', gap: 40, justifyItems: 'center' }}>
                <TagTitle>Contact Us</TagTitle>
                <h2 className={styles.title}>Get Started Today</h2>
                <p>Ready to elevate your advertising game? Join the hundreds of businesses already driving
                success with <strong>VRUME’s targeted advertising solutions.</strong> Whether you’re focused on
                <strong>email ads, Instagram ads,</strong> or <strong>affiliate marketing,</strong> we’ve got the
                expertise and resources to help you succeed.</p>
                <Button>APPLY TO BECOME AN ADVERTISER!</Button>
              </div>
              
              <form className={styles.contactForm}>
                <div>
                  <label>
                    <span>First Name</span>
                    <input type="text" placeholder="Enter Your First Name" />
                  </label>
                  <label>
                    <span>Last Name</span>
                    <input type="text" placeholder="Enter Your Last Name" />
                  </label>
                </div>
                <label>
                  <span>Email</span>
                  <input type="email" placeholder="Email Address" />
                </label>
                <label>
                  <span>Your message (optional)</span>
                  <textarea placeholder="Write Your Message"></textarea>
                </label>
                <Button type="Button">Submit</Button>
              </form>
            </div>
          </Container>
        </section>
      </LayoutBase>
    </>
  );
}
