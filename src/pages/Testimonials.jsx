import styled from 'styled-components'
import AnimatedSection from '../components/AnimatedSection'
import PageMeta from '../components/PageMeta'

const H1 = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.xl};
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${(p) => p.theme.colors.text};
`

const Testimonial = styled.blockquote`
  margin: 0 0 2rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  &:last-of-type {
    border-bottom: none;
  }
`

const Quote = styled.p`
  font-style: italic;
  margin: 0 0 0.5rem;
  line-height: 1.65;
  color: ${(p) => p.theme.colors.text};
`

const Attribution = styled.cite`
  display: block;
  font-style: normal;
  font-size: ${(p) => p.theme.fontSizes.xs};
  color: ${(p) => p.theme.colors.textMuted};
`

const testimonials = [
  {
    quote:
      "I have had the pleasure of working with Emilie throughout my career. Each time, I have always been incredibly impressed at her quick understanding of all thing scientific and her ability to create clear and compelling narratives based on scientific studies. What seems dry and boring for a lot of people, Emilie brings to life. She makes it look easy, but I know from experience that it's not. I look forward to working with Emilie on an upcoming science-based screenplay!",
    author:
      'Victoria Bruce, Filmmaker The Kidnapping of Ingrid Betancourt, Author Inspector Oldfield and the Black Hand Society: America\'s Orginal Gangsters and the U.S. Postal Detective Who Brought Them to Justice and Media Strategist.',
  },
  {
    quote:
      "Real2Real Science is an amazing service. I received spot on information (from Emilie) to complete the intricate details of my script and would gladly use this service again. It's definitely a valuable resource to have.",
    author: 'Antonia Jones, Screenwriter',
  },
  {
    quote:
      "Emilie understands that scientific facts don't make a good story, and good science won't make a bad story good. After working with her in the American Film Institute's Catalyst program, I know of no better collaborator. Emilie also understands that great storytelling is about evoking emotion in a reader and audience, and that research and data can be a supporting player and a cool idea generator––and what are you looking for in storytelling if not cool ideas and meaningful emotion? You can't grow good stories in a lab, but you can find good storytellers (and consultants) in them. To me, Emilie Lorditch is the best one.",
    author:
      'Adam Benic, Recipient of the Sundance Institute-Sloan Foundation Episodic Storytelling Grant & Staff Writer on an upcoming Apple TV+ Series',
  },
  {
    quote:
      "Emilie has one foot planted firmly in storytelling and the other in the world of science. That gives her the unique ability to understand not only how to get the science in a story right, but how to use science to make the story even better. She doesn't see the challenge as balancing story and science: she sees it as weaving them together, so that the plot and the characters become richer and more nuanced.",
    author:
      'Diandra Leslie-Pelecky, Physicist, Blogger (Building Speed), Author (The Physics of NASCAR) and Screenwriter.',
  },
  {
    quote:
      "I was so fortunate to have Emilie Lorditch as my Science Mentor for the Alfred P. Sloan Fellowship when I attended the American Film Institute, AFI. She has a vast knowledge of all sciences and a passion for film and character development. I felt as though I had an expert who understood the complexities of the geological aspects of avalanches and what I needed to know but was able to translate it into layman's terms for me, the writer -- to describe it so it's interesting for the reader. She went above and beyond to find other information she felt was relevant to the piece I was writing. For example, my lead character was a virologist, so she found a \"make-shift\" microscope lens that was recently invented by a Professor at UCLA -- to actually fit on the lens of an iPhone. This microscope was used in a crucial scene to set my lead character off on his mission. Emilie was committed to helping me create the best possible project and has remained a valued contributor for all my technical writing projects. I highly value her insight and her cinematic sensibilities.",
    author: 'Cindy Matta, Screenwriter, Alfred P. Sloan Finalist & AFI Class of 2011',
  },
  {
    quote:
      "Emilie's original idea had potential but her main character wasn't working no matter what she did; he wasn't compellingly or sympathetic. I applaud Emilie for her flexibility and willingness to completely rethink her main character. She took a huge risk and her story ended up being better for it.",
    author:
      'Erik Bork, is a screenwriter, producer, script consultant and blogger (https://www.flyingwrestler.com/) best known for his work on the HBO miniseries Band of Brothers (TV miniseries) and From the Earth to the Moon, for which he wrote multiple episodes, and won two Emmy and two Golden Globe Awards as part of the producing team.',
  },
]

export default function Testimonials() {
  return (
    <>
      <PageMeta
        title="Testimonials"
        description="What screenwriters and filmmakers say about working with Emilie Lorditch and Real 2 Reel Science."
      />
      <AnimatedSection>
        <H1>TESTIMONIALS</H1>
      </AnimatedSection>
      {testimonials.map((t, i) => (
        <AnimatedSection key={i} delay={i * 80}>
          <Testimonial>
            <Quote>&ldquo;{t.quote}&rdquo;</Quote>
            <Attribution>– {t.author}</Attribution>
          </Testimonial>
        </AnimatedSection>
      ))}
    </>
  )
}
