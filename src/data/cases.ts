/** Case study cards (illustrative until real brands are confirmed). */
export type CaseCard = {
  slug: string
  name: string
  lane: string
  /** Brand color: solid fallback and label overlay tint. */
  color: string
  /** Brand name, shown above the category once we have it. */
  brand?: string
  /** e.g. '/cases/spices.jpg' (see public/cases/README.md). */
  image?: string
  /** Soften lower-quality images until the high-res versions arrive. */
  blur?: boolean
}

/** Live case studies page on the deployed site (v3 branch of orbit-landing). */
export const CASE_STUDIES_URL = '/case-studies'

/** Images in public/cases/, looped across the cards until each card has its own. */
const CASE_IMAGES = ['/cases/bayangrom.jpg', '/cases/theindiantapas.png']

const BASE: CaseCard[] = [
  { slug: 'spices', name: 'Spices', lane: 'INDIA → US', color: '#b45309', blur: true },
  { slug: 'skincare', name: 'Skincare', lane: 'SOUTH KOREA → US', color: '#be185d', blur: true },
  { slug: 'tableware', name: 'Tableware', lane: 'BANGLADESH → US', color: '#0f766e', blur: true },
  { slug: 'robotics', name: 'Robotics', lane: 'CHINA → US', color: '#1e3a8a', blur: true },
  { slug: 'fashion', name: 'Fashion', lane: 'FRANCE → US', color: '#6b21a8', blur: true },
  { slug: 'batteries', name: 'Batteries', lane: 'CHINA → US', color: '#334155', blur: true },
]

export const CASES: CaseCard[] = BASE.map((c, i) => ({
  ...c,
  image: c.image ?? CASE_IMAGES[i % CASE_IMAGES.length],
}))
