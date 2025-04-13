import { Header } from './Header'

export function LayoutBase({ children }) {
  return (
    <>
      <Header />
      {children}
      <footer>
      Title: About
      Content: Vrume’s team has been working in the performance marketing industry since 2001. We
      are a passionate team of professionals that love the challenges the online space provides. We are
      here to help our clients and look forward to helping you.
      Address: Platform @ The Junction. 5 Edinburgh Rd S Guelph, Ont N1H 5N8, Canada
      Copyright: Copyright © 2024 Vrume. All rights reserved
      </footer>
    </>
  )
}