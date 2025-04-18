import Head from 'next/head';
import { roboto } from '@/fonts/Roboto';
import { bebasNeue } from '@/fonts/Bebas_Neue';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const fonts = [roboto.className, bebasNeue.variable, roboto.variable].join(' ');
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={fonts}>
        <Component {...pageProps} />
      </div>
    </>
  );
}