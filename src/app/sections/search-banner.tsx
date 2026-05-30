'use client'

import { Paper, Text } from '@mantine/core'

interface SearchBannerProps {
  searchQuery: string
  resultCount: number
}

export function SearchBanner({ searchQuery, resultCount }: SearchBannerProps) {
  return (
    <Paper p="md" radius="sm" mb="md" style={{ background: 'var(--mantine-color-gray-0)', border: '1px solid var(--mantine-color-gray-20)' }}>
      <Text size="sm" c="dimmed">
        Найдено результатов: {resultCount} по запросу &quot;{searchQuery}&quot;
      </Text>
    </Paper>
  )
}
