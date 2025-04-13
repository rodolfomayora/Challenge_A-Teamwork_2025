import Head from "next/head";
import { LayoutBase } from '@/layouts/LayoutBase';
// import Image from "next/image";

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
        <main>
          <section>
          Tagline: Welcome to Vrume
          Title: Drive Profits with Targeted Advertising Solutions
          Content: Whether you’re a seasoned marketer or just starting to scale your business, our
          customized online advertising strategies will accelerate your growth and drive targeted customers
          straight to your offers.
          Button/CTA: Apply to become an Advertiser!
          </section>

          <section>
          Tagline: What we do?
          Title: Engage, Convert, and Scale Your Business with Precision
          Content: We don’t just offer standard advertising solutions — we help you build real connections
          with your audience through social media ads, affiliate marketing, and email campaigns that are
          tailored to your business. Here’s how we stand out.
          [Card 1]
          Title: CPC & CPL Performance Marketing
          Content: Our performance-based marketing models give you the power to only pay for what
          works. Whether it’s CPC (Cost Per Click) or CPL (Cost Per Lead), our model ensures that you’re
          investing in conversions and measurable results.
          [Card 2]
          Title: Targeted Ads That Reach Your Ideal Audience
          Content: Our advanced targeting ensures that your message reaches the right people at the right
          time. With native ads and targeted social media campaigns, you’re not just throwing ads out into
          the void — you’re speaking directly to a hand-picked audience primed to take action.
          [Card 3]
          Title: Social Media & Email Marketing Expertise
          Content: Leverage the power of email marketing, social networking in marketing, and affiliate
          strategies to build a list of loyal subscribers, followers, and buyers. We craft email campaigns that
          cut through the noise, driving conversions and improving customer retention.
          [Card 4]
          Title: Affiliate Networks & Marketing
          Content: Scale your business with high-performing affiliate marketing strategies. By partnering
          with our extensive affiliate network, you gain access to a world of qualified leads and targeted
          marketing opportunities that will supercharge your growth.
          [Card 5]
          Title: Premium Traffic Sources
          Content: Maximize the impact of your campaigns with premium traffic that’s highly targeted and
          guaranteed to increase your visibility and sales. Our proprietary network of traffic sources is
          designed to deliver high-quality leads that convert at a higher rate.
          </section>

          <section>
          Tagline: How Vrume Works
          Title: Our process is designed to be simple, effective, and ROI-focused.
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
          </section>

          <section>
          Tagline: Our clients love us
          Title: What Our Customers Have to Say
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
          </section>

          <section>
          Tagline: Contact Us
          Title: Get Started Today
          Content: Ready to elevate your advertising game? Join the hundreds of businesses already driving
          success with VRUME’s targeted advertising solutions. Whether you’re focused on email ads,
          Instagram ads, or affiliate marketing, we’ve got the expertise and resources to help you succeed.
          Button/CTA: Apply to become an Advertiser!
          [Form]
          [First Name] [Last Name]
          [Email]
          [Your message (optional)]
          (Submit)
          </section>
        </main>
      </LayoutBase>
    </>
  );
}
