import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CONSENT_KEY = 'r2r-cookie-consent'

const Banner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 1.5rem;
  background: ${(p) => p.theme.colors.surfaceElevated};
  border-top: 1px solid ${(p) => p.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  z-index: 1000;
  font-size: ${(p) => p.theme.fontSizes.xs};
  color: ${(p) => p.theme.colors.text};
`

const AcceptBtn = styled.button`
  padding: 0.5rem 1rem;
  font-size: inherit;
  font-family: inherit;
  font-weight: 600;
  background: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.primary};
  border: none;
  border-radius: ${(p) => p.theme.radii.sm};
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.accent};
    outline-offset: 2px;
  }
`

const PolicyLink = styled(Link)`
  color: ${(p) => p.theme.colors.accent};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.accent};
    outline-offset: 2px;
  }
`

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(false)
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'accepted')
      setVisible(false)
      // Analytics would be loaded here, e.g. window.gtag or Plausible
    } catch {
      setVisible(false)
    }
  }

  if (!visible) return null

  return (
    <Banner role="dialog" aria-label="Cookie consent">
      <span>
        We use cookies to improve your experience. By continuing you agree to our{' '}
        <PolicyLink to="/privacy">Privacy Policy</PolicyLink>.
      </span>
      <AcceptBtn type="button" onClick={accept}>
        Accept
      </AcceptBtn>
    </Banner>
  )
}
