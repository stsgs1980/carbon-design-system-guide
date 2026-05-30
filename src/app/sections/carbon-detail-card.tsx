'use client'

import { Card, Group, Text, ThemeIcon, Title, Stack, Box, Badge, Divider, Anchor } from '@mantine/core'
import { ExternalLink, BoxIcon } from 'lucide-react'
import { iconMap } from '../shared/icon-map'
import type { Section } from '../shared/types'

export function CarbonDetailCard({ section }: { section: Section }) {
  const IconComponent = iconMap[section.icon] || <BoxIcon size={16} />

  return (
    <Card padding="xl" radius="sm" style={{ background: 'var(--mantine-color-body)', border: '1px solid var(--mantine-color-gray-30)' }}>
      <Group mb="xl">
        <ThemeIcon size="xl" radius="sm" variant="outline" color="blue" style={{ border: '1px solid var(--mantine-color-blue-6)' }}>
          {IconComponent}
        </ThemeIcon>
        <Box>
          <Title order={3} fw={600}>{section.title}</Title>
          <Text size="sm" c="dimmed">{section.description}</Text>
        </Box>
      </Group>

      <Stack gap="md">
        {section.items.map((item, index) => (
          <Box key={index}>
            {index > 0 && <Divider my="md" />}
            <Group justify="space-between" align="flex-start">
              <Box flex={1}>
                <Text fw={500} mb="xs">{item.name}</Text>
                <Text size="sm" c="dimmed" mb="sm">{item.description}</Text>
                {item.features && (
                  <Group gap="xs">
                    {item.features.map((feature, i) => (
                      <Badge key={i} variant="outline" color="gray" size="sm" style={{ borderRadius: 2 }}>
                        {feature}
                      </Badge>
                    ))}
                  </Group>
                )}
              </Box>
              {item.url && (
                <Anchor href={item.url} target="_blank" rel="noopener noreferrer" size="sm" c="blue.6">
                  <Group gap={4}>
                    <span>Документация</span>
                    <ExternalLink size={14} />
                  </Group>
                </Anchor>
              )}
            </Group>
          </Box>
        ))}
      </Stack>
    </Card>
  )
}
