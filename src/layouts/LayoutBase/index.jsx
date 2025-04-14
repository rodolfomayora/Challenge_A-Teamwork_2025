import { Header } from './Header';
import { Footer } from './Footer';

export function LayoutBase({ children }) {
  return (
    <>
      <Header />
      <main style={{ height: '4880px' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}