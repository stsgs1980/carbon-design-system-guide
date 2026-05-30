import { useState } from 'react'

export function useSeedData(onSeeded?: () => void) {
  const [seeding, setSeeding] = useState(false)
  const [seeded, setSeeded] = useState(false)

  const handleSeed = async () => {
    setSeeding(true)
    try {
      const response = await fetch('/api/design-systems', { method: 'POST' })
      const data = await response.json()
      console.log('Seed result:', data)
      setSeeded(true)
      onSeeded?.()
    } catch (error) {
      console.error('Error seeding data:', error)
    } finally {
      setSeeding(false)
    }
  }

  return { seeding, seeded, handleSeed }
}
