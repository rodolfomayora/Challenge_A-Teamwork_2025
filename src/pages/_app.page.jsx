import localFont from 'next/font/local';
import "@/styles/globals.css";

const bebasNeue = localFont({
  variable: '--font-bebas-neue',
  src: '../../public/fonts/Bebas_Neue/BebasNeue-Regular.ttf',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={bebasNeue.variable}>
      <Component {...pageProps} />
    </div>
  );
}
