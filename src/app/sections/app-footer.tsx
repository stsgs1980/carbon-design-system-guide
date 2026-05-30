'use client'

import { Box, Container, Group, Text, ThemeIcon } from '@mantine/core'
import { Blocks } from 'lucide-react'

interface AppFooterProps {
  sectionsCount: number
  totalItems: number
}

export function AppFooter({ sectionsCount, totalItems }: AppFooterProps) {
  return (
    <Box component="footer" style={{ borderTop: '1px solid var(--mantine-color-gray-30)', marginTop: '3rem' }}>
      <Container size="xl" py="lg">
        <Group justify="space-between">
          <Group gap="sm">
            <ThemeIcon size="sm" color="blue" variant="filled" radius="sm">
              <Blocks size={14} />
            </ThemeIcon>
            <Text size="sm" c="dimmed">
              Carbon Design System • {sectionsCount} категорий • {totalItems} тем
            </Text>
          </Group>
          <Text size="sm" c="dimmed" className="hidden sm:block">
            На основе исследования DeepSeek AI
          </Text>
        </Group>
      </Container>
    </Box>
  )
}
