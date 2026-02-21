export const CATEGORIES = [
  { slug: 'info', label: '連絡' },
  { slug: 'tech', label: '技術' },
  { slug: 'reading', label: '読書' },
  { slug: 'misc', label: '雑記' },
] as const

export type CategorySlug = (typeof CATEGORIES)[number]['slug']

export function getCategoryLabel(slug: CategorySlug): string {
  return CATEGORIES.find(c => c.slug === slug)?.label ?? slug
}
