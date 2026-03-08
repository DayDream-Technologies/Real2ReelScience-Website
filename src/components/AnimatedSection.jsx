import { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateY(${(p) => (p.$visible ? 0 : 24)}px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${(p) => (p.$delay ? `${p.$delay}ms` : '0ms')};
`

export default function AnimatedSection({ children, delay = 0, as, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Wrapper ref={ref} $visible={visible} $delay={delay} as={as} {...props}>
      {children}
    </Wrapper>
  )
}
