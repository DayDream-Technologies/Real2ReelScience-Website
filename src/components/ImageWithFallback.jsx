import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: ${(p) => p.$minHeight || '120px'};
  background: ${(p) => p.theme.colors.surfaceElevated};
  border-radius: inherit;
  overflow: hidden;
  display: block;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(p) => (p.$loaded ? 1 : 0)};
  transition: opacity 0.3s ease;
`

const LoadingState = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.textMuted};
  font-size: ${(p) => p.theme.fontSizes.xs};
`

const ErrorState = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.textMuted};
  font-size: ${(p) => p.theme.fontSizes.xs};
  padding: 1rem;
  text-align: center;
`

export default function ImageWithFallback({
  src,
  alt = '',
  minHeight,
  ...imgProps
}) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <Wrapper $minHeight={minHeight}>
      {loading && !error && (
        <LoadingState aria-hidden="true">Loading…</LoadingState>
      )}
      {error && (
        <ErrorState aria-live="polite">
          Image could not be loaded.
        </ErrorState>
      )}
      <Img
        src={src}
        alt={alt}
        $loaded={!loading && !error}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false)
          setError(true)
        }}
        {...imgProps}
      />
    </Wrapper>
  )
}
