import Head from 'next/head'
import Script from 'next/script'
import remarkFrontmatter from 'remark-frontmatter'

 export default {
  projectLink: 'https://github.com/EvmosGov/docs',
  docsRepositoryBase: 'https://github.com/EvmosGov/docs/blob/main',
  github: 'https://github.com/EvmosGov',
  titleSuffix: ' – Evmos DAO',
  mdxOptions: {
    remarkPlugins: [remarkFrontmatter]
  },
  logo: (
    <>
      <img className="inline mr-2" src="/logo-round.svg" />
      <span className="mr-2 font-semibold text-lg hidden md:inline">Evmos DAO</span>
      <span className="text-gray-400 font-normal hidden md:inline">
       Governance Docs
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#1d1f21" />
      <meta name="theme-color" content="#1d1f21" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
     
    </>
    ),
  search: true,
  unstable_stork: false,
  prevLinks: true,
  nextLinks: true,
  darkMode: true,
  floatTOC: false,
  unstable_staticImage: true,
  footer: true,
  footerEditLink: 'View Changes on Github →',
  footerText: <><span className="text-gray-200">Maintained by Governance, Evmos DAO</span></>,
  unstable_faviconGlyph: '🪐',
  feedbackLink: <>Give us feedback →</>,
  feedbackLabels: 'feedback',
  defaultTheme: "dark",
  forcedTheme: "dark",
  storageKey: "theme",
  defaultMenuCollapsed: false,
  nextThemes: {
    defaultTheme: "dark",
    forcedTheme: "dark",
    storageKey: "theme"
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'ko', text: '한국어' },
  ]
}
