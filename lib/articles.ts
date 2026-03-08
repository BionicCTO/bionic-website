import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDir = path.join(process.cwd(), 'content')

export interface ArticleMeta {
  title: string
  subtitle: string
  date: string
  author: string
  category: string
  slug: string
  readingTime: string
  featured?: boolean
  heroImage?: string
}

export function getArticleSlugs(): string[] {
  const files = fs.readdirSync(contentDir)
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}

export function getArticleMeta(slug: string): ArticleMeta {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(source)
  const stats = readingTime(content)

  return {
    title: data.title || slug,
    subtitle: data.subtitle || '',
    date: data.date || new Date().toISOString(),
    author: data.author || 'Amit Patel',
    category: data.category || 'BUILD',
    slug,
    readingTime: stats.text,
    featured: data.featured || false,
    heroImage: data.heroImage || undefined,
  }
}

export function getAllArticles(): ArticleMeta[] {
  const slugs = getArticleSlugs()
  const articles = slugs.map(getArticleMeta)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticleContent(slug: string): { meta: ArticleMeta; content: string } {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(source)
  const stats = readingTime(content)

  return {
    meta: {
      title: data.title || slug,
      subtitle: data.subtitle || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Amit Patel',
      category: data.category || 'BUILD',
      slug,
      readingTime: stats.text,
      featured: data.featured || false,
      heroImage: data.heroImage || undefined,
    },
    content,
  }
}
