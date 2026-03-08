import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import CookieConsent from './CookieConsent'
import Analytics from './Analytics'
import ParticleBackground from './ParticleBackground'

const Main = styled.main`
  position: relative;
  z-index: 0;
  min-height: calc(100vh - 140px);
  padding: 2rem;
  max-width: 920px;
  margin: 0 auto;
  color: ${(p) => p.theme.colors.text};
`

export default function Layout() {
  return (
    <>
      <ParticleBackground />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <CookieConsent />
      <Analytics />
    </>
  )
}
