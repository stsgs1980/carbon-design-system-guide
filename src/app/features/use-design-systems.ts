import { useState, useEffect, useMemo } from 'react'
import type { Section } from '../shared/types'

export function useDesignSystems() {
  const [sections, setSections] = useState<Section[]>([])
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const response = await fetch('/api/design-systems')
      const data = await response.json()
      setSections(data.categories)
      if (data.categories.length > 0) {
        setActiveSection(data.categories[0].slug)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredSections = useMemo(() => {
    if (!searchQuery) return sections
    return sections
      .map(section => ({
        ...section,
        items: section.items.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.features?.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
        ),
      }))
      .filter(section => section.items.length > 0)
  }, [sections, searchQuery])

  const totalItems = useMemo(
    () => sections.reduce((acc, s) => acc + s.items.length, 0),
    [sections]
  )

  const totalFeatures = useMemo(
    () => sections.reduce((acc, s) =>
      acc + s.items.reduce((itemAcc, item) => itemAcc + (item.features?.length || 0), 0), 0),
    [sections]
  )

  const activeSectionData = sections.find(s => s.slug === activeSection)

  const handleSectionClick = (slug: string) => {
    setActiveSection(slug)
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth' })
  }

  return {
    sections,
    loading,
    activeSection,
    searchQuery,
    filteredSections,
    totalItems,
    totalFeatures,
    activeSectionData,
    setSearchQuery,
    handleSectionClick,
    refetch: fetchData,
  }
}
