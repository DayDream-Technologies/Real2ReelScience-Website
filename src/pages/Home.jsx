import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ContactForm from '../components/ContactForm'
import CyclingMessage from '../components/CyclingMessage'
import AnimatedSection from '../components/AnimatedSection'
import PageMeta from '../components/PageMeta'
import {
  ScienceAtomInline,
  OrbitSingleInline,
  SciencePulseInline,
} from '../components/FilmScienceAnimations'

const Section = styled.section`
  margin-bottom: ${(p) => p.theme.spacing.section};
  padding: 1.5rem 0;
`

const WelcomeBlock = styled.section`
  margin-bottom: ${(p) => p.theme.spacing.section};
  padding: 2rem 0;
`

const H1 = styled.h1`
  font-size: clamp(1.5rem, 4vw, ${(p) => p.theme.fontSizes.xxl});
  font-weight: 600;
  margin: 0 0 1.5rem;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.colors.text};
  max-width: 42ch;
`

const Lead = styled.p`
  font-size: ${(p) => p.theme.fontSizes.lg};
  line-height: 1.7;
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.textMuted};
  margin: 0 0 1rem;
  max-width: 55ch;
`

const Cta = styled.span`
  display: inline-block;
  margin-top: 1rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.accent};
  letter-spacing: 0.03em;
`

const H2 = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.lg};
  font-weight: 600;
  margin: 0 0 1rem;
  letter-spacing: 0.03em;
  color: ${(p) => p.theme.colors.text};
`

const H3 = styled.h3`
  font-size: ${(p) => p.theme.fontSizes.md};
  font-weight: 600;
  margin: 1.25rem 0 0.5rem;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.colors.text};
`

const Paragraph = styled.p`
  margin: 0 0 1rem;
  line-height: 1.75;
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.text};
`

const List = styled.ul`
  margin: 0.75rem 0 1.25rem;
  padding-left: 1.75rem;
  line-height: 1.8;
  color: ${(p) => p.theme.colors.text};
  li {
    margin-bottom: 0.5rem;
  }
`

const StyledLink = styled(Link)`
  color: ${(p) => p.theme.colors.accent};
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    color: ${(p) => p.theme.colors.accentHover};
  }
`

const Blockquote = styled.blockquote`
  margin: 1rem 0 1.25rem;
  padding: 1.5rem 1.5rem;
  border-left: 4px solid ${(p) => p.theme.colors.accent};
  font-style: italic;
  line-height: 1.75;
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.textMuted};
  background: ${(p) => p.theme.colors.surfaceElevated};
  border-radius: 0 ${(p) => p.theme.radii.sm} ${(p) => p.theme.radii.sm} 0;
`

const GridSection = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  margin-bottom: ${(p) => p.theme.spacing.section};
  padding: 1.5rem 0;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const GridContent = styled.div`
  min-width: 0;
`

const GridAnimation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    order: -1;
  }
`

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#contact') {
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <PageMeta
        title="Home"
        description="Real 2 Reel Science – script coverage, science consultation, and story research for screenwriters. Contact Emilie Lorditch for a free consultation."
      />
      <AnimatedSection>
        <WelcomeBlock>
          <H1>
            Welcome to Real 2 Reel Science!
          </H1>
          <Lead>
            Emilie Lorditch, founder of Real 2 Reel Science, is a science writer and storyteller
            turned reader, script analyst and science consultant/advisor.
          </Lead>
          <Cta>Contact Emilie for a FREE CONSULTATION TODAY!</Cta>
        </WelcomeBlock>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <GridSection>
          <GridContent>
            <H2>SERVICES</H2>
            <H3>How can I help?</H3>
            <Paragraph>Are you looking for:</Paragraph>
            <List>
              <li>Script coverage or notes?</li>
              <li>Ways to make your script stand out?</li>
              <li>Research help?</li>
              <li>Science facts to improve your fiction?</li>
            </List>
            <StyledLink to="/servicesandprices">More Info</StyledLink>
          </GridContent>
          <GridAnimation>
            <ScienceAtomInline size="120px" />
          </GridAnimation>
        </GridSection>
      </AnimatedSection>

      <AnimatedSection delay={150}>
        <GridSection>
          <GridAnimation>
            <OrbitSingleInline size="90px" />
          </GridAnimation>
          <GridContent>
            <H2>TESTIMONIALS</H2>
            <Blockquote>
              &ldquo;Emilie understands that scientific facts don&apos;t make a good story, and good
              science won&apos;t make a bad story good...She also understands that great storytelling is
              about evoking emotion in a reader and audience, and that research and data can be a
              supporting player and a cool idea generator––and what are you looking for in storytelling
              if not cool ideas and meaningful emotion?&rdquo;
            </Blockquote>
            <StyledLink to="/testimonials">More Info</StyledLink>
          </GridContent>
        </GridSection>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <GridSection id="contact">
          <GridContent>
            <CyclingMessage />
            <ContactForm />
          </GridContent>
          <GridAnimation>
            <SciencePulseInline size="80px" />
          </GridAnimation>
        </GridSection>
      </AnimatedSection>
    </>
  )
}
