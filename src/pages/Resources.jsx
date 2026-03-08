import styled from 'styled-components'
import AnimatedSection from '../components/AnimatedSection'
import PageMeta from '../components/PageMeta'

const PageTitle = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.xl};
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${(p) => p.theme.colors.text};
  grid-column: 1 / -1;
`

const SectionTitle = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.lg};
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: ${(p) => p.theme.colors.text};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const GridCard = styled.div`
  padding: 1.25rem;
  background: ${(p) => p.theme.colors.surfaceElevated};
  border-radius: ${(p) => p.theme.radii.md};
  border: 1px solid ${(p) => p.theme.colors.border};
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.25s, transform 0.25s;
  &:hover {
    box-shadow: ${(p) => p.theme.shadows.cardHover};
    transform: translateY(-2px);
  }

  /* size variants via props */
  grid-column: ${(p) => (p.$wide ? 'span 2' : 'span 1')};
  grid-row: ${(p) => (p.$tall ? 'span 2' : 'span 1')};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: auto;
  }
`

const Paragraph = styled.p`
  margin: 0;
  line-height: 1.65;
  color: ${(p) => p.theme.colors.text};
  font-size: ${(p) => (p.$small ? p.theme.fontSizes.xs : p.theme.fontSizes.sm)};
`

const ResourceLink = styled.a`
  color: ${(p) => p.theme.colors.accent};
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    color: ${(p) => p.theme.colors.accentHover};
  }
`

const resources = [
  {
    title: 'Science and Entertainment Exchange',
    wide: true,
    tall: false,
    content: (
      <>
        <ResourceLink
          href="https://scienceandentertainmentexchange.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Science and Entertainment Exchange
        </ResourceLink>
        <Paragraph style={{ marginTop: '0.5rem' }}>
          The Science & Entertainment Exchange (The Exchange) is a program of the National Academy
          of Sciences (NAS) that connects entertainment industry professionals with top scientists
          and engineers to create a synergy between accurate science and engaging storylines in both
          film and TV programming.
        </Paragraph>
      </>
    ),
  },
  {
    title: 'Hollywood Health and Society',
    wide: true,
    tall: true,
    content: (
      <>
        <ResourceLink
          href="https://www.hollywoodhealthandsociety.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hollywood Health and Society
        </ResourceLink>
        <Paragraph style={{ marginTop: '0.5rem' }}>
          Hollywood, Health & Society (HH&S) is a program of the{' '}
          <ResourceLink
            href="http://learcenter.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            USC Annenberg Norman Lear Center
          </ResourceLink>
          {' '}
          that provides the entertainment industry with accurate and up-to-date information for
          storylines on health, safety, and security.
        </Paragraph>
      </>
    ),
  },
  {
    title: 'MSUToday – Twister',
    wide: false,
    tall: false,
    content: (
      <>
        <Paragraph $small>MSUToday</Paragraph>
        <ResourceLink
          href="https://msutoday.msu.edu/news/2024/staff-voice-how-twister-made-me-a-better-science-communicator-emilie-lorditch?collection=4434914d-7a80-4c34-8449-94e67b7474e5"
          target="_blank"
          rel="noopener noreferrer"
        >
          How &lsquo;Twister&rsquo; made me a better science communicator
        </ResourceLink>
      </>
    ),
  },
  {
    title: 'Physics World',
    wide: false,
    tall: false,
    content: (
      <>
        <ResourceLink
          href="https://physicsworld.com/a/turning-science-to-movie%E2%80%AFmagic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PHYSICS WORLD: Turning Science into Movie Magic
        </ResourceLink>
      </>
    ),
  },
  {
    title: 'Podcasts',
    wide: true,
    tall: false,
    content: (
      <>
        <ResourceLink
          href="https://natashabajema.com/?s=lorditch"
          target="_blank"
          rel="noopener noreferrer"
        >
          AUTHORS OF MASS DESTRUCTION PODCAST: Guest Interviews
        </ResourceLink>
      </>
    ),
  },
]

export default function Resources() {
  return (
    <>
      <PageMeta
        title="Resources and Inspiration"
        description="Science and entertainment resources, articles, and podcasts from Real 2 Reel Science."
      />
      <AnimatedSection>
        <PageTitle>Resources</PageTitle>
      </AnimatedSection>

      <AnimatedSection delay={80}>
        <Grid>
          {resources.map((item, i) => (
            <GridCard key={i} $wide={item.wide} $tall={item.tall}>
              <SectionTitle>{item.title}</SectionTitle>
              {item.content}
            </GridCard>
          ))}
        </Grid>
      </AnimatedSection>
    </>
  )
}
