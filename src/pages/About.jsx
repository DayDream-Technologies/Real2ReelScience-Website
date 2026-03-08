import styled from 'styled-components'
import AnimatedSection from '../components/AnimatedSection'
import PageMeta from '../components/PageMeta'
import { ScienceAtomAnimation } from '../components/FilmScienceAnimations'

const HeroImage = styled.div`
  width: 100%;
  max-width: 500px;
  height: 280px;
  border-radius: ${(p) => p.theme.radii.lg};
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: ${(p) => p.theme.shadows.card};
  & > * {
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const H1 = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.xl};
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${(p) => p.theme.colors.text};
`

const H2 = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.md};
  font-weight: 600;
  margin: 1.5rem 0 0.5rem;
  color: ${(p) => p.theme.colors.text};
`

const Paragraph = styled.p`
  margin: 0 0 0.75rem;
  line-height: 1.65;
  color: ${(p) => p.theme.colors.text};
`

const StyledLink = styled.a`
  color: ${(p) => p.theme.colors.accent};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: ${(p) => p.theme.colors.accentHover};
  }
`

const Signature = styled.div`
  margin-top: 2rem;
  font-weight: 500;
  padding-top: 1.5rem;
  border-top: 1px solid ${(p) => p.theme.colors.border};
`

export default function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="Emilie Lorditch, founder of Real 2 Reel Science – science writer, script analyst, and science consultant for screenwriters."
      />
      <AnimatedSection>
        <H1>ABOUT REAL 2 REEL SCIENCE</H1>
        <HeroImage>
          <ScienceAtomAnimation minHeight="280px" />
        </HeroImage>
        <Paragraph>
          Hello and welcome! My name is Emilie Lorditch. I am the founder of Real 2 Reel Science, an
          online resource for writers looking for inspiration and support. I specialize in finding
          unique ideas &ldquo;ripped from the science headlines&rdquo; that just might be the missing
          piece or idea that you are looking for your to make your script stand out.
        </Paragraph>
        <Paragraph>
          I am your very own script consultant/analyst and science advisor. Nice to meet you!
        </Paragraph>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <Paragraph>
          I got my start when I attended the launch of the Science and Entertainment Exchange in
          2008. A year later, I participated in the American Film Institute&apos;s (AFI) Catalyst
          program: a three-day crash course for scientists about screenwriting. This program not only
          gave me my first experience working with a screenwriter, but it also led to me to work with
          screenwriting students at the AFI Conservatory as an Alfred P. Sloan Foundation Science
          Advisor. You can read about my experience{' '}
          <StyledLink
            href="http://scienceandentertainmentexchange.org/article/scientist-spotlight-emilie-lorditch-sloan-science-advisor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </StyledLink>
          . The goal of the Alfred P. Sloan Foundation film school program is to influence the next
          generation of filmmakers to create more realistic and dramatic stories about science and
          technology while also challenging existing stereotypes about scientists and engineers
          through the use visual media.
        </Paragraph>
        <Paragraph>
          For the last four years I have been a reader for film festivals like the Austin Film
          Festival, screenwriting fellowships and individual screenwriters.
        </Paragraph>
        <Paragraph>
          Whether it&apos;s using a Diet Coke and Mentos fountain to distract the villan, combining
          earthquakes and tsunamis to create the mother of all natural disaster movies or creating a
          main character that is a scientist or engineer that you have never seen on screen before,
          science can be the answer to your script problem.
        </Paragraph>
        <Paragraph>
          Are you looking for a way to make your script stand out? Would you like someone to
          brainstorm ideas with? Maybe the latest science news is the missing piece to your current
          script or next project. I&apos;d love to help. Please contact me at{' '}
          <StyledLink href="mailto:emilie@real2reelscience.com">emilie@real2reelscience.com</StyledLink>
          .
        </Paragraph>
        <Signature>
          <H2>Emilie Lorditch</H2>
          <Paragraph style={{ margin: 0 }}>Founder</Paragraph>
          <Paragraph style={{ margin: 0 }}>Real 2 Reel Science</Paragraph>
        </Signature>
      </AnimatedSection>
    </>
  )
}
