import { useMemo } from 'react'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
  25% { transform: translate(2px, -3px) scale(1.1); opacity: 0.6; }
  50% { transform: translate(-2px, 2px) scale(0.95); opacity: 0.35; }
  75% { transform: translate(3px, 1px) scale(1.05); opacity: 0.5; }
`

const Particle = styled.span`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${(p) => p.$color};
  pointer-events: none;
  animation: ${float} ${(p) => p.$duration}s ease-in-out infinite;
  animation-delay: ${(p) => p.$delay}s;
  left: ${(p) => p.$x}%;
  top: ${(p) => p.$y}%;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.25;
  }
`

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
`

const PARTICLE_COUNT = 50
const COLORS = [
  'rgba(255, 159, 28, 0.35)',
  'rgba(248, 246, 243, 0.2)',
  'rgba(184, 180, 173, 0.25)',
  'rgba(255, 255, 255, 0.15)',
]

export default function ParticleBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: COLORS[i % COLORS.length],
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
    }))
  }, [])

  return (
    <Wrapper aria-hidden="true">
      {particles.map((p) => (
        <Particle
          key={p.id}
          $x={p.x}
          $y={p.y}
          $color={p.color}
          $duration={p.duration}
          $delay={p.delay}
        />
      ))}
    </Wrapper>
  )
}
