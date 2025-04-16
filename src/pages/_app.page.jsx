import { roboto } from '@/fonts/Roboto';
import { bebasNeue } from '@/fonts/Bebas_Neue';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const fonts = [roboto.className, bebasNeue.variable, roboto.variable].join(' ');
  return (
    <div className={fonts}>
      <Component {...pageProps} />
    </div>
  );
}