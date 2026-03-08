import styled, { keyframes, useTheme } from 'styled-components'

/*
 * FILM GRAIN ANIMATION
 * Adapted from: "Animated Film Grain effect" by Ooblek
 * Source: https://codepen.io/ooblek/pen/vYxYomx
 * Description: A simple animated film grain effect using pure CSS.
 * Keyframes animateGrain and overlay technique adapted for use as a hero/placeholder.
 * Used under CodePen's default license (code shared for viewing/inspiration).
 */
const animateGrain = keyframes`
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, -20%); }
  30% { transform: translate(-5%, -10%); }
  40% { transform: translate(-15%, -20%); }
  50% { transform: translate(-5%, -10%); }
  60% { transform: translate(-15%, -20%); }
  70% { transform: translate(-5%, -10%); }
  80% { transform: translate(-15%, -20%); }
  90% { transform: translate(-5%, -10%); }
`

export const FilmGrainAnimation = styled.div`
  width: 100%;
  height: 100%;
  min-height: ${(p) => p.$minHeight || '140px'};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  /* Base: gradient for contrast so it’s not a flat black box */
  background: linear-gradient(
    145deg,
    ${(p) => p.theme.colors.primary} 0%,
    ${(p) => p.theme.colors.surface} 50%,
    ${(p) => p.theme.colors.surfaceElevated} 100%
  );

  /* Grain overlay: CSS-only noise; animation from Ooblek (see citation at top).
   * Higher-contrast grain (white/amber) so it’s visible on dark background. */
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-image: radial-gradient(
        circle at 20% 30%,
        rgba(255, 255, 255, 0.12) 0,
        transparent 1px
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(255, 159, 28, 0.2) 0,
        transparent 1px
      ),
      radial-gradient(
        circle at 40% 80%,
        rgba(255, 255, 255, 0.08) 0,
        transparent 1px
      );
    background-size: 4px 4px, 5px 5px, 6px 6px;
    opacity: 0.9;
    animation: ${animateGrain} 8s steps(10) infinite;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`

/*
 * SCIENCE / ATOM ORBIT ANIMATION
 * Adapted from: "Animated Atom Logo" by Hugo (Hugo Darby-Brown)
 * Source: https://codepen.io/hugo/pen/noobLB
 * Description: Three elliptical rings with orbiting "electron" dots; keyframes rotate + squash
 * for orbital motion. Original in SCSS/Compass; converted to plain CSS and theme colors.
 * Used under CodePen's default license (code shared for viewing/inspiration).
 */
const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.15);
  }
  50% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.15);
  }
`

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const squash = keyframes`
  0%, 50%, 100% { transform: scale(1, 1); top: -6px; }
  25%, 75% { transform: scale(2, 1); top: -4px; }
`

const AtomWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: ${(p) => p.$minHeight || '140px'};
  background: ${(p) => p.theme.colors.primary};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Ring = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-top-width: 4px;
  border-bottom-width: 4px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.15);
  height: min(12em, 80%);
  width: min(12em, 80%);
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  animation: ${glow} 3s linear infinite;
  transform: ${(p) => `rotate(${p.$rotation}deg) scale(0.33, 1)`};

  div {
    animation: ${rotate} 4s linear infinite;
    border-radius: 50%;
    height: 100%;
    position: relative;
    width: 100%;

    &::after {
      animation: ${squash} 4s linear infinite;
      border-radius: 50%;
      content: '';
      left: 50%;
      height: 8px;
      margin-left: -4px;
      opacity: 0.9;
      position: absolute;
      top: -6px;
      width: 8px;
      background: ${(p) => p.$electronColor};
      box-shadow: 0 0 12px ${(p) => p.$electronColor};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    div,
    div::after {
      animation: none;
    }
  }
`

const Center = styled.div`
  position: absolute;
  background: ${(p) => p.theme.colors.text};
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.15);
  height: 10px;
  width: 10px;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

export function ScienceAtomAnimation({ minHeight }) {
  const theme = useTheme()
  const colors = [
    theme.colors.accent,
    theme.colors.textMuted,
    '#e74c3c',
  ]
  return (
    <AtomWrapper $minHeight={minHeight} aria-hidden="true">
      <Ring $rotation={0} $electronColor={colors[0]}>
        <div />
      </Ring>
      <Ring $rotation={120} $electronColor={colors[1]}>
        <div />
      </Ring>
      <Ring $rotation={240} $electronColor={colors[2]}>
        <div />
      </Ring>
      <Center />
    </AtomWrapper>
  )
}

/*
 * INLINE SCIENCE ANIMATIONS (no background, for grid use)
 * Same atom/orbit concept as above; transparent background so they sit inline with content.
 */

const AtomWrapperInline = styled.div`
  width: ${(p) => p.$size || '100px'};
  height: ${(p) => p.$size || '100px'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  flex-shrink: 0;
`

const RingInline = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-top-width: 2px;
  border-bottom-width: 2px;
  height: 85%;
  width: 85%;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  animation: ${glow} 3s linear infinite;
  transform: ${(p) => `rotate(${p.$rotation}deg) scale(0.33, 1)`};

  div {
    animation: ${rotate} 5s linear infinite;
    border-radius: 50%;
    height: 100%;
    position: relative;
    width: 100%;

    &::after {
      animation: ${squash} 5s linear infinite;
      border-radius: 50%;
      content: '';
      left: 50%;
      height: 5px;
      margin-left: -2.5px;
      opacity: 0.9;
      position: absolute;
      top: -4px;
      width: 5px;
      background: ${(p) => p.$electronColor};
      box-shadow: 0 0 8px ${(p) => p.$electronColor};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    div,
    div::after {
      animation: none;
    }
  }
`

const CenterInline = styled.div`
  position: absolute;
  background: ${(p) => p.theme.colors.accent};
  border-radius: 50%;
  height: 6px;
  width: 6px;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

export function ScienceAtomInline({ size = '100px' }) {
  const theme = useTheme()
  const colors = [theme.colors.accent, theme.colors.textMuted, '#e74c3c']
  return (
    <AtomWrapperInline $size={size} aria-hidden="true">
      <RingInline $rotation={0} $electronColor={colors[0]}><div /></RingInline>
      <RingInline $rotation={120} $electronColor={colors[1]}><div /></RingInline>
      <RingInline $rotation={240} $electronColor={colors[2]}><div /></RingInline>
      <CenterInline />
    </AtomWrapperInline>
  )
}

/* Single orbiting dot - minimal science motif, no background */
const orbitDot = keyframes`
  0% { transform: rotate(0deg) translateX(24px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(24px) rotate(-360deg); }
`

const OrbitSingleWrap = styled.div`
  width: ${(p) => p.$size || '80px'};
  height: ${(p) => p.$size || '80px'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  flex-shrink: 0;
`

const OrbitSingleRing = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  border: 1px solid rgba(255, 159, 28, 0.4);
  border-radius: 50%;
`

const OrbitSingleDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${(p) => p.theme.colors.accent};
  border-radius: 50%;
  box-shadow: 0 0 10px ${(p) => p.theme.colors.accent};
  animation: ${orbitDot} 4s linear infinite;
  top: 50%;
  left: 50%;
  margin-top: -4px;
  margin-left: -4px;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export function OrbitSingleInline({ size = '80px' }) {
  return (
    <OrbitSingleWrap $size={size} aria-hidden="true">
      <OrbitSingleRing />
      <OrbitSingleDot />
    </OrbitSingleWrap>
  )
}

/* Pulsing circles - subtle science motif, no background */
const pulseCircle = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.15); opacity: 0.7; }
`

const PulseWrap = styled.div`
  width: ${(p) => p.$size || '70px'};
  height: ${(p) => p.$size || '70px'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  flex-shrink: 0;
`

const PulseCircle = styled.span`
  position: absolute;
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.colors.accent};
  opacity: 0.4;
  animation: ${pulseCircle} 2.5s ease-in-out infinite;
  animation-delay: ${(p) => p.$delay}s;

  &:nth-child(1) { width: 30%; height: 30%; }
  &:nth-child(2) { width: 55%; height: 55%; }
  &:nth-child(3) { width: 80%; height: 80%; }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export function SciencePulseInline({ size = '70px' }) {
  return (
    <PulseWrap $size={size} aria-hidden="true">
      <PulseCircle $delay={0} />
      <PulseCircle $delay={0.3} />
      <PulseCircle $delay={0.6} />
    </PulseWrap>
  )
}

/*
 * WRITING / FILMING / COLLABORATION inline animations (no background)
 * For Services page: writing, filming, and collaboration themes.
 */

const lineReveal = keyframes`
  0% { transform: scaleX(0); opacity: 0.6; }
  50% { transform: scaleX(1); opacity: 1; }
  100% { transform: scaleX(0); opacity: 0.6; }
`

const WritingWrap = styled.div`
  width: ${(p) => p.$size || '90px'};
  height: ${(p) => p.$size || '90px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: transparent;
  flex-shrink: 0;
`

const WritingLine = styled.span`
  display: block;
  height: 3px;
  width: 80%;
  background: ${(p) => p.theme.colors.accent};
  border-radius: 2px;
  transform-origin: left;
  animation: ${lineReveal} 2s ease-in-out infinite;
  animation-delay: ${(p) => p.$delay}s;
  opacity: 0.8;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: scaleX(1);
  }
`

export function WritingLinesInline({ size = '90px' }) {
  return (
    <WritingWrap $size={size} aria-hidden="true">
      <WritingLine $delay={0} />
      <WritingLine $delay={0.25} />
      <WritingLine $delay={0.5} />
      <WritingLine $delay={0.75} />
    </WritingWrap>
  )
}

const filmScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

const FilmStripWrap = styled.div`
  width: ${(p) => p.$size || '100px'};
  height: ${(p) => p.$size || '100px'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: transparent;
  flex-shrink: 0;
`

const FilmStripInner = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 40%;
  width: 200%;
  background: repeating-linear-gradient(
    90deg,
    transparent 0,
    transparent 8px,
    rgba(255, 159, 28, 0.35) 8px,
    rgba(255, 159, 28, 0.35) 12px
  );
  animation: ${filmScroll} 6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export function FilmStripInline({ size = '100px' }) {
  return (
    <FilmStripWrap $size={size} aria-hidden="true">
      <FilmStripInner />
    </FilmStripWrap>
  )
}

const connectPulse = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
`

const CollaborationWrap = styled.div`
  width: ${(p) => p.$size || '100px'};
  height: ${(p) => p.$size || '100px'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  flex-shrink: 0;
`

const CollabNode = styled.span`
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${(p) => p.theme.colors.accent};
  box-shadow: 0 0 12px ${(p) => p.theme.colors.accent};
  animation: ${connectPulse} 2s ease-in-out infinite;
  animation-delay: ${(p) => p.$delay}s;

  &:nth-child(2) { left: 15%; top: 50%; margin-top: -7px; }
  &:nth-child(3) { right: 15%; top: 50%; margin-top: -7px; }
  &:nth-child(4) { left: 50%; top: 30%; margin-left: -7px; }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const CollabLine = styled.span`
  position: absolute;
  height: 2px;
  width: 50%;
  left: 25%;
  top: 50%;
  margin-top: -1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${(p) => p.theme.colors.accent}80,
    ${(p) => p.theme.colors.accent}80,
    transparent
  );
  opacity: 0.7;
`

export function CollaborationDotsInline({ size = '100px' }) {
  return (
    <CollaborationWrap $size={size} aria-hidden="true">
      <CollabLine />
      <CollabNode $delay={0} />
      <CollabNode $delay={0.4} />
      <CollabNode $delay={0.8} />
    </CollaborationWrap>
  )
}

/* Backward-compatible aliases for previous animation names */
export { FilmGrainAnimation as FilmStripAnimation, FilmGrainAnimation as FilmStripFrames }
export { ScienceAtomAnimation as ScienceOrbitAnimation }
