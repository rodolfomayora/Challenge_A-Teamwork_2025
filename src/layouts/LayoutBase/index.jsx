import { Header } from './Header';
import { Footer } from './Footer';

export function LayoutBase({ children }) {
  return (
    <>
      <Header />
      {children}
      <br />
      <Footer />
    </>
  )
}