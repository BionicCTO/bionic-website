import { getArticleSlugs, getArticleContent, getAllArticles } from '@/lib/articles'
import type { Metadata } from 'next'
import ArticleClient from './ArticleClient'

export async function generateStaticParams() {
  const slugs = getArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { meta } = getArticleContent(params.slug)
  return {
    title: meta.title,
    description: meta.subtitle,
    openGraph: {
      title: meta.title,
      description: meta.subtitle,
      type: 'article',
      publishedTime: meta.date,
      authors: [meta.author],
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { meta, content } = getArticleContent(params.slug)
  const allArticles = getAllArticles()
  const related = allArticles
    .filter((a) => a.slug !== params.slug)
    .slice(0, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.subtitle,
    datePublished: meta.date,
    author: {
      '@type': 'Person',
      name: meta.author,
      url: 'https://bionic.global/about',
      jobTitle: 'AI & Enterprise Strategy Advisor',
      sameAs: ['https://www.linkedin.com/in/amitpatel911', 'https://x.com/amitpatel911'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bionic',
      url: 'https://bionic.global',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://bionic.global/${params.slug}`,
    },
    ...(meta.heroImage && {
      image: `https://bionic.global${meta.heroImage}`,
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleClient meta={meta} content={content} related={related} />
    </>
  )
}
