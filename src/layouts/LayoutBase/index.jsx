import { Header } from './Header';
import { Footer } from './Footer';

export function LayoutBase({ children }) {
  return (
    <>
      <Header />
      <main style={{ height: '7103px' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}