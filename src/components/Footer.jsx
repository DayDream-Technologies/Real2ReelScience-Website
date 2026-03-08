import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LOGO_FOOTER, SOCIAL } from '../constants'
import SocialIcons from './SocialIcons'

const footerGradientKeyframes = `
  @keyframes footerGradient {
    0%, 100% { background-position: 100% 50%; }
    50% { background-position: 0% 50%; }
  }
`

const FooterEl = styled.footer`
  ${footerGradientKeyframes}
  background: linear-gradient(
    -135deg,
    #0d1b2a 0%,
    #1a2f3d 25%,
    #243447 50%,
    #2d3d4a 75%,
    #0d1b2a 100%
  );
  background-size: 300% 300%;
  animation: footerGradient 14s ease infinite;
  color: ${(p) => p.theme.colors.text};
  padding: 2.5rem 2rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.12);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background-position: 0% 50%;
  }
`

const FooterLogoLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1.25rem;
  opacity: 0.95;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
    text-decoration: none;
  }
`

const FooterLogo = styled.img`
  height: 44px;
  width: auto;
  display: block;
`

const SocialWrap = styled.div`
  margin-bottom: 1.25rem;
`

const FooterNav = styled.nav`
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`

const FooterLink = styled(Link)`
  color: ${(p) => p.theme.colors.textMuted};
  text-decoration: none;
  font-size: ${(p) => p.theme.fontSizes.xs};
  &:hover {
    text-decoration: underline;
    color: ${(p) => p.theme.colors.text};
  }
  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.accent};
    outline-offset: 2px;
  }
`

const Copyright = styled.p`
  margin: 0.5rem 0 0;
  font-size: ${(p) => p.theme.fontSizes.xs};
  color: ${(p) => p.theme.colors.textMuted};
`

const Credit = styled.p`
  margin: 0.75rem 0 0;
  font-size: ${(p) => p.theme.fontSizes.xs};
  color: ${(p) => p.theme.colors.textMuted};
`

const CreditLink = styled.a`
  color: ${(p) => p.theme.colors.textMuted};
  text-decoration: none;
  &:hover {
    color: ${(p) => p.theme.colors.accent};
    text-decoration: underline;
  }
  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.accent};
    outline-offset: 2px;
  }
`

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <FooterEl>
      <FooterLogoLink to="/" aria-label="Real 2 Reel Science – Home">
        <FooterLogo src={LOGO_FOOTER} alt="Real 2 Reel Science" />
      </FooterLogoLink>
      <SocialWrap>
        <SocialIcons links={SOCIAL} />
      </SocialWrap>
      <FooterNav>
        <FooterLink to="/#contact">Contact</FooterLink>
        <FooterLink to="/privacy">Privacy</FooterLink>
        <FooterLink to="/terms">Terms</FooterLink>
      </FooterNav>
      <Copyright>© {year} Real 2 Reel Science. All rights reserved.</Copyright>
      <Credit>
        Designed and developed by{' '}
        <CreditLink href="https://daydreamtechnologies.net" target="_blank" rel="noopener noreferrer">
          DayDream Technologies
        </CreditLink>
      </Credit>
    </FooterEl>
  )
}
