import Head from "next/head";
import { LayoutBase } from '@/layouts/LayoutBase';
import { Section1 } from './_sections/section1';
import { Section2 } from './_sections/section2';
import { Section3 } from './_sections/section3';
import { Section5 } from './_sections/section5';
import { Container } from '@/components/Container';
import styles from './styles.module.css';

// import Image from "next/image";
import { TagTitle } from '@/components/TagTitle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Vrume</title>
        <meta name="description" content="VRUME home page" />
      </Head>
      <LayoutBase>
        <Section1 />
        <Section2 />
        <Section3 />

        <section className={styles.Section4}>
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

        <Section5 />
      </LayoutBase>
    </>
  );
}