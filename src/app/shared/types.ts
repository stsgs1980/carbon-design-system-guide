export interface DesignSystemItem {
  name: string
  description: string
  url?: string
  features?: string[]
}

export interface Section {
  slug: string
  title: string
  icon: string
  description: string
  items: DesignSystemItem[]
}
