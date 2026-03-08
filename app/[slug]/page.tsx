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

  return <ArticleClient meta={meta} content={content} related={related} />
}
