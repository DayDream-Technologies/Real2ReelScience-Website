import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LOGO_HEADER } from '../constants'

const gradientKeyframes = `
  @keyframes headerGradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

const HeaderEl = styled.header`
  ${gradientKeyframes}
  background: linear-gradient(
    135deg,
    #1a2f42 0%,
    #2a4a5e 25%,
    #354a5e 50%,
    #2a4a5e 75%,
    #1a2f42 100%
  );
  background-size: 300% 300%;
  animation: headerGradient 12s ease infinite;
  color: ${(p) => p.theme.colors.text};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background-position: 0% 50%;
  }
`

const LogoLink = styled(Link)`
  display: block;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
  &:hover {
    text-decoration: none;
    opacity: 0.92;
    transform: scale(1.02);
  }
  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.accent};
    outline-offset: 2px;
  }
`

const Logo = styled.img`
  height: 52px;
  width: auto;
  display: block;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.75rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: ${(p) => (p.$open ? 'flex' : 'none')};
    flex-basis: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding-top: 0.5rem;
  }
`

const NavLink = styled(Link)`
  color: ${(p) => p.theme.colors.text};
  text-decoration: none;
  font-size: ${(p) => p.theme.fontSizes.sm};
  font-weight: 500;
  padding: 0.35rem 0;
  position: relative;
  &:hover {
    text-decoration: none;
    color: ${(p) => p.theme.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.accent};
    outline-offset: 2px;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${(p) => p.theme.colors.accent};
    transition: width 0.25s ease;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 0.6rem 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    &:last-child {
      border-bottom: none;
    }
  }
`

const MenuButton = styled.button`
  display: none;
  padding: 0.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: ${(p) => p.theme.radii.sm};
  color: ${(p) => p.theme.colors.text};
  cursor: pointer;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;

  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.accent};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const MenuBar = styled.span`
  display: block;
  width: 22px;
  height: 2px;
  background: currentColor;
`

const navItems = [
  { to: '/servicesandprices', label: 'Services' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/about', label: 'About' },
  { to: '/#contact', label: 'Contact' },
  { to: '/resources', label: 'Resources and Inspiration' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderEl>
      <LogoLink to="/" title="Home" aria-label="Real 2 Reel Science – Home">
        <Logo src={LOGO_HEADER} alt="Real 2 Reel Science – Home" />
      </LogoLink>
      <MenuButton
        type="button"
        onClick={() => setMenuOpen((o) => !o)}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <MenuBar />
        <MenuBar />
        <MenuBar />
      </MenuButton>
      <Nav id="main-nav" $open={menuOpen}>
        {navItems.map(({ to, label }) => (
          <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}>
            {label}
          </NavLink>
        ))}
      </Nav>
    </HeaderEl>
  )
}
