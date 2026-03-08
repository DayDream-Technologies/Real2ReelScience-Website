import styled from 'styled-components'
import PageMeta from '../components/PageMeta'

const Content = styled.article`
  max-width: 720px;
`

const H1 = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.xl};
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${(p) => p.theme.colors.text};
`

const H2 = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.lg};
  font-weight: 600;
  margin: 1.5rem 0 0.5rem;
  color: ${(p) => p.theme.colors.text};
`

const Paragraph = styled.p`
  margin: 0 0 0.75rem;
  line-height: 1.65;
  color: ${(p) => p.theme.colors.text};
`

export default function Terms() {
  return (
    <Content>
      <PageMeta
        title="Terms of Use"
        description="Terms of Use for the Real 2 Reel Science website and services."
      />
      <H1>Terms of Use</H1>
      <Paragraph>Last updated: {new Date().toLocaleDateString('en-US')}</Paragraph>
      <Paragraph>
        By using the Real 2 Reel Science website and services, you agree to these Terms of Use.
      </Paragraph>
      <H2>Use of the Website</H2>
      <Paragraph>
        You may use this website for lawful purposes only. You may not use it in any way that
        could harm the site, other users, or third parties, or that violates applicable laws.
      </Paragraph>
      <H2>Services and Consultations</H2>
      <Paragraph>
        Consulting services (script coverage, science consultation, etc.) are subject to separate
        agreements and communications. Use of the contact form or site does not create a
        client relationship until we expressly agree.
      </Paragraph>
      <H2>Intellectual Property</H2>
      <Paragraph>
        Content on this site, including text, branding, and materials, is owned by Real 2 Reel
        Science or its licensors and is protected by copyright and other intellectual property
        laws.
      </Paragraph>
      <H2>Disclaimer</H2>
      <Paragraph>
        The site and services are provided &ldquo;as is.&rdquo; We do not guarantee uninterrupted
        or error-free operation. Professional advice provided through our services is for
        general guidance and does not replace specialized legal, scientific, or other
        professional advice where appropriate.
      </Paragraph>
      <H2>Contact</H2>
      <Paragraph>
        For questions about these Terms of Use, contact{' '}
        <a href="mailto:emilie@real2reelscience.com" style={{ color: 'inherit' }}>
          emilie@real2reelscience.com
        </a>
        .
      </Paragraph>
    </Content>
  )
}
