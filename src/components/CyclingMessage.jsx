import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`

const Wrapper = styled.div`
  margin-bottom: 1rem;
  min-height: 2.5em;
  display: flex;
  align-items: center;
`

const Message = styled.p`
  margin: 0;
  font-family: ${(p) => p.theme.fonts.heading};
  font-size: ${(p) => p.theme.fontSizes.lg};
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.colors.text};
  animation: ${fadeIn} 0.4s ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const DEFAULT_MESSAGES = [
  'Schedule a free consultation',
  'Contact Emilie',
  "Let's talk about your script",
  'Get in touch today',
  'Ready to bring science to your story?',
]

export default function CyclingMessage({ messages = DEFAULT_MESSAGES, intervalMs = 3500 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [messages.length, intervalMs])

  return (
    <Wrapper aria-live="polite" aria-atomic="true">
      <Message key={index}>{messages[index]}</Message>
    </Wrapper>
  )
}
