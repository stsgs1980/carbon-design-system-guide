'use client'

import { Grid, Paper, Text } from '@mantine/core'

interface StatsGridProps {
  sectionsCount: number
  totalItems: number
  totalFeatures: string
  seeded: boolean
}

export function StatsGrid({ sectionsCount, totalItems, totalFeatures, seeded }: StatsGridProps) {
  return (
    <Grid mb="xl" gutter="md">
      <Grid.Col span={{ base: 6, sm: 3 }}>
        <Paper p="md" radius="sm" style={{ background: 'var(--mantine-color-blue-0)', border: '1px solid var(--mantine-color-blue-2)' }}>
          <Text size="xl" fw={600} c="blue.7">{sectionsCount}</Text>
          <Text size="sm" c="dimmed">Категорий</Text>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 6, sm: 3 }}>
        <Paper p="md" radius="sm" style={{ background: 'var(--mantine-color-gray-0)', border: '1px solid var(--mantine-color-gray-2)' }}>
          <Text size="xl" fw={600}>{totalItems}</Text>
          <Text size="sm" c="dimmed">Тем</Text>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 6, sm: 3 }}>
        <Paper p="md" radius="sm" style={{ background: 'var(--mantine-color-gray-0)', border: '1px solid var(--mantine-color-gray-2)' }}>
          <Text size="xl" fw={600}>{totalFeatures}+</Text>
          <Text size="sm" c="dimmed">Функций</Text>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 6, sm: 3 }}>
        <Paper p="md" radius="sm" style={{ background: 'var(--mantine-color-gray-0)', border: '1px solid var(--mantine-color-gray-2)' }}>
          <Text size="xl" fw={600}>{seeded ? 'БД' : 'Стат.'}</Text>
          <Text size="sm" c="dimmed">{seeded ? 'База данных' : 'Статичные данные'}</Text>
        </Paper>
      </Grid.Col>
    </Grid>
  )
}
