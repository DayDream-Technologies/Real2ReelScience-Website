import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '../constants'

const SITE_NAME = 'Real 2 Reel Science'
const DEFAULT_DESCRIPTION = 'Science writer and script consultant. Script coverage, science consultation, and story research for screenwriters. Contact for a free consultation.'
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo.png`

export default function PageMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}) {
  const { pathname } = useLocation()
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const canonical = `${SITE_URL}${pathname === '/' ? '' : pathname}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
