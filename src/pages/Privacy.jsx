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

const List = styled.ul`
  margin: 0.5rem 0 1rem;
  padding-left: 1.5rem;
  color: ${(p) => p.theme.colors.text};
`

export default function Privacy() {
  return (
    <Content>
      <PageMeta
        title="Privacy Policy"
        description="Privacy Policy for Real 2 Reel Science. How we collect, use, and protect your information."
      />
      <H1>Privacy Policy</H1>
      <Paragraph>Last updated: {new Date().toLocaleDateString('en-US')}</Paragraph>
      <Paragraph>
        Real 2 Reel Science (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your
        privacy. This policy describes how we collect, use, and protect information when you use
        our website or contact us.
      </Paragraph>
      <H2>Information We Collect</H2>
      <Paragraph>
        When you use our contact form or get in touch with us, we may collect:
      </Paragraph>
      <List>
        <li>Name and email address</li>
        <li>Message content and any other details you provide</li>
      </List>
      <H2>How We Use Your Information</H2>
      <Paragraph>
        We use the information you provide to respond to your inquiries, deliver requested
        services, and improve our website and services.
      </Paragraph>
      <H2>Cookies and Analytics</H2>
      <Paragraph>
        Our site may use cookies or similar technologies. If we use analytics services, we will
        process data in accordance with this policy and your consent where required.
      </Paragraph>
      <H2>Sharing and Disclosure</H2>
      <Paragraph>
        We do not sell your personal information. We may share information only as needed to
        provide our services or as required by law.
      </Paragraph>
      <H2>Contact</H2>
      <Paragraph>
        For questions about this Privacy Policy, contact us at{' '}
        <a href="mailto:emilie@real2reelscience.com" style={{ color: 'inherit' }}>
          emilie@real2reelscience.com
        </a>
        .
      </Paragraph>
    </Content>
  )
}
