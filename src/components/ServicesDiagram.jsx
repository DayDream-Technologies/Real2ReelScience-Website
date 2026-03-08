import styled from 'styled-components'

const DEFAULT_ITEMS = [
  'Script coverage',
  'Notes',
  'Script consultation',
  'Story research',
  'Science consultation',
  'Custom consultation',
]

const SIZE = 480
const RADIUS = 180
const ROTATION_DURATION = '50s'

const DiagramWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${SIZE}px;
  height: ${SIZE}px;
  margin: 1.5rem auto 2rem;

  @media (max-width: 640px) {
    max-width: 320px;
    height: 320px;
    margin: 1.25rem auto 1.5rem;
    transform: scale(0.75);
    transform-origin: center top;
  }
`

const RotatingRing = styled.div`
  position: absolute;
  inset: 0;
  animation: diagramRotate ${ROTATION_DURATION} linear infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  @keyframes diagramRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const DiagramList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  inset: 0;
`

const DiagramItem = styled.li`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  transform: ${(p) => `rotate(${p.$angle}deg)`};
`

const CounterRotate = styled.span`
  display: inline-block;
  animation: counterRotate ${ROTATION_DURATION} linear infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  @keyframes counterRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`

const DiagramNode = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: ${(p) =>
    `translate(-50%, -50%) translateY(-${p.$radius}px) rotate(${-p.$angle}deg)`};
  padding: 0.5rem 1rem;
  font-size: ${(p) => p.theme.fontSizes.sm};
  font-weight: 500;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.colors.text};
  background: ${(p) => p.theme.colors.surfaceElevated};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.md};
  white-space: nowrap;
  box-shadow: ${(p) => p.theme.shadows.card};
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  animation: nodeEnter 0.5s ease-out backwards;
  animation-delay: ${(p) => 0.15 + (p.$index ?? 0) * 0.08}s;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  @keyframes nodeEnter {
    from {
      opacity: 0;
      transform: ${(p) =>
        `translate(-50%, -50%) translateY(-${p.$radius}px) rotate(${-p.$angle}deg) scale(0.6)`};
    }
    to {
      opacity: 1;
      transform: ${(p) =>
        `translate(-50%, -50%) translateY(-${p.$radius}px) rotate(${-p.$angle}deg) scale(1)`};
    }
  }

  @media (max-width: 640px) {
    font-size: ${(p) => p.theme.fontSizes.xs};
    padding: 0.4rem 0.75rem;
  }
`

const CenterLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${(p) => p.theme.fontSizes.md};
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.colors.accent};
  text-align: center;
  max-width: 70%;
  z-index: 1;
  animation: centerEnter 0.4s ease-out backwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  @keyframes centerEnter {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.85);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @media (max-width: 640px) {
    font-size: ${(p) => p.theme.fontSizes.sm};
  }
`

const CENTER = SIZE / 2

const ConnectorsSvg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  color: ${(p) => p.theme.colors.border};
`

const ConnectorLine = styled.line`
  stroke: currentColor;
  stroke-width: 0.5;
  stroke-opacity: 0.25;
  stroke-dasharray: ${RADIUS};
  stroke-dashoffset: ${RADIUS};
  animation: lineDraw 0.6s ease-out forwards;
  animation-delay: ${(p) => 0.05 + (p.$index ?? 0) * 0.06}s;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    stroke-dasharray: none;
    stroke-dashoffset: 0;
  }
  @keyframes lineDraw {
    to {
      stroke-dashoffset: 0;
    }
  }
`

export default function ServicesDiagram({ items = DEFAULT_ITEMS, centerLabel }) {
  return (
    <DiagramWrapper aria-hidden="true">
      <RotatingRing>
        <ConnectorsSvg viewBox={`0 0 ${SIZE} ${SIZE}`} preserveAspectRatio="xMidYMid meet">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * 60 * Math.PI) / 180
            const x = CENTER + RADIUS * Math.sin(angle)
            const y = CENTER - RADIUS * Math.cos(angle)
            return (
              <ConnectorLine
                key={i}
                x1={CENTER}
                y1={CENTER}
                x2={x}
                y2={y}
                $index={i}
              />
            )
          })}
        </ConnectorsSvg>
        <DiagramList as="ul" role="list">
          {items.map((label, index) => {
            const angle = index * 60
            return (
              <DiagramItem key={label} $angle={angle} $index={index}>
<DiagramNode $angle={angle} $radius={RADIUS} $index={index}>
                <CounterRotate>{label}</CounterRotate>
              </DiagramNode>
              </DiagramItem>
            )
          })}
        </DiagramList>
      </RotatingRing>
      {centerLabel && <CenterLabel>{centerLabel}</CenterLabel>}
    </DiagramWrapper>
  )
}
