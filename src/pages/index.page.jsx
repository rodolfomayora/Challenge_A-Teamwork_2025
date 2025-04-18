import Head from "next/head";
import { LayoutBase } from '@/layouts/LayoutBase';
import { Section1 } from './_sections/section1';
import { Section2 } from './_sections/section2';
import { Section3 } from './_sections/section3';
import { Section4 } from './_sections/section4';
import { Section5 } from './_sections/section5';

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
        <Section4 />
        <Section5 />
      </LayoutBase>
    </>
  );
}