import { getArticleSlugs, getArticleContent, getAllArticles } from '@/lib/articles'
import type { Metadata } from 'next'
import ArticleClient from './ArticleClient'

export async function generateStaticParams() {
  const slugs = getArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { meta } = getArticleContent(params.slug)
  const ogImage = meta.heroImage
    ? `https://bionic.global${meta.heroImage}`
    : 'https://bionic.global/images/og-image.png'

  return {
    title: meta.title,
    description: meta.subtitle,
    alternates: {
      canonical: `https://bionic.global/${params.slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.subtitle,
      type: 'article',
      publishedTime: meta.date,
      authors: [meta.author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.subtitle,
      creator: '@amitpatel911',
      images: [ogImage],
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { meta, content } = getArticleContent(params.slug)
  const allArticles = getAllArticles()
  const related = allArticles
    .filter((a) => a.slug !== params.slug)
    .slice(0, 2)

  const jsonLd: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: meta.title,
      description: meta.subtitle,
      datePublished: meta.date,
      articleSection: meta.category,
      wordCount: content.split(/\s+/).length,
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
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://bionic.global',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: meta.title,
          item: `https://bionic.global/${params.slug}`,
        },
      ],
    },
  ]

  // Add VideoObject schema if article has a video explainer
  if (meta.videoUrl) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: `${meta.title} — Video Explainer`,
      description: `AI-generated video explainer for: ${meta.subtitle}`,
      contentUrl: `https://bionic.global${meta.videoUrl}`,
      thumbnailUrl: meta.heroImage
        ? `https://bionic.global${meta.heroImage}`
        : 'https://bionic.global/images/og-image.png',
      uploadDate: meta.date,
      publisher: {
        '@type': 'Organization',
        name: 'Bionic',
        url: 'https://bionic.global',
      },
    })
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
