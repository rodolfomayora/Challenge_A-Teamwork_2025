import { Header } from './Header';
import { Footer } from './Footer';

export function LayoutBase({ children }) {
  return (
    <>
      <Header />
      <main style={{ height: '3746px' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}