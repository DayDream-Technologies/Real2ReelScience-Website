import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AnimatedSection from '../components/AnimatedSection'
import PageMeta from '../components/PageMeta'
import {
  WritingLinesInline,
  FilmStripInline,
  CollaborationDotsInline,
} from '../components/FilmScienceAnimations'
import ServicesDiagram from '../components/ServicesDiagram'

const IntroBlock = styled.section`
  margin-bottom: ${(p) => p.theme.spacing.section};
  padding: 1.5rem 0;
`

const H1 = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.xl};
  font-weight: 600;
  margin: 0 0 1rem;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.colors.text};
`

const H2 = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.lg};
  font-weight: 600;
  margin: 0 0 1rem;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.colors.text};
`

const Paragraph = styled.p`
  margin: 0 0 1rem;
  line-height: 1.75;
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.text};
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

const Card = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.md};
  padding: ${(p) => p.theme.spacing.card};
  background: ${(p) => p.theme.colors.surfaceElevated};
  box-shadow: ${(p) => p.theme.shadows.card};
  transition: box-shadow 0.25s, transform 0.25s;
  &:hover {
    box-shadow: ${(p) => p.theme.shadows.cardHover};
    transform: translateY(-2px);
  }
`

const CardTitle = styled.h3`
  font-size: ${(p) => p.theme.fontSizes.md};
  margin: 0 0 0.5rem;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.colors.accent};
`

const CtaLink = styled(Link)`
  display: inline-block;
  margin-top: 0.75rem;
  color: ${(p) => p.theme.colors.accent};
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    color: ${(p) => p.theme.colors.accentHover};
  }
`

export default function Services() {
  return (
    <>
      <PageMeta
        title="Consulting Services"
        description="Script coverage, script consultation, and science consultation for screenwriters. One-hour phone or Zoom sessions with Emilie Lorditch."
      />

      <AnimatedSection>
        <IntroBlock>
          <H1>SERVICES</H1>
          <H2>How can I help?</H2>
          <ServicesDiagram centerLabel="How can I help?" />
          <Paragraph>
            You&apos;ll get feedback on your script AND an in-depth phone consultation to review it.
          </Paragraph>
          <Paragraph>Contact Emilie today to find out how she can help you!</Paragraph>
        </IntroBlock>
      </AnimatedSection>

      <AnimatedSection delay={80}>
        <GridSection>
          <GridContent>
            <Card>
              <CardTitle>Script Coverage</CardTitle>
              <Paragraph>
                Ready for feedback on your script? Emilie provides script coverage/notes and a
                one-hour telephone/Zoom session to discuss your story.
              </Paragraph>
              <CtaLink to="/#contact">HELP ME WITH MY SCRIPT</CtaLink>
            </Card>
          </GridContent>
          <GridAnimation>
            <WritingLinesInline size="100px" />
          </GridAnimation>
        </GridSection>
      </AnimatedSection>

      <AnimatedSection delay={120}>
        <GridSection>
          <GridAnimation>
            <FilmStripInline size="110px" />
          </GridAnimation>
          <GridContent>
            <Card>
              <CardTitle>Script Consultation</CardTitle>
              <Paragraph>
                Looking for more in-depth help? Emilie provides specific ideas based on your needs
                and a one-hour telephone/Zoom session to discuss your story.
              </Paragraph>
              <CtaLink to="/#contact">HELP ME WITH MY SCRIPT</CtaLink>
            </Card>
          </GridContent>
        </GridSection>
      </AnimatedSection>

      <AnimatedSection delay={160}>
        <GridSection>
          <GridContent>
            <Card>
              <CardTitle>Science Consultation</CardTitle>
              <Paragraph>
                Emilie will research the science and tech featured in your story and provide ideas
                for your consideration based on current research and a one-hour telephone/Zoom
                session to discuss your story.
              </Paragraph>
              <CtaLink to="/#contact">HELP ME WITH MY SCRIPT</CtaLink>
            </Card>
          </GridContent>
          <GridAnimation>
            <CollaborationDotsInline size="100px" />
          </GridAnimation>
        </GridSection>
      </AnimatedSection>
    </>
  )
}
