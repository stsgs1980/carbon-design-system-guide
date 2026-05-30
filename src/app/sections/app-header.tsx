'use client'

import { Group, Text, ThemeIcon, ActionIcon, Tooltip, Box } from '@mantine/core'
import { Blocks, Sun, Moon } from 'lucide-react'

interface AppHeaderProps {
  colorScheme: 'light' | 'dark'
  mounted: boolean
  onToggleTheme: () => void
}

export function AppHeader({ colorScheme, mounted, onToggleTheme }: AppHeaderProps) {
  return (
    <Group justify="space-between" h="100%" px="lg">
      <Group gap="md">
        <ThemeIcon size="lg" radius="sm" color="blue" variant="filled">
          <Blocks size={20} />
        </ThemeIcon>
        <Box>
          <Text fw={600} size="lg">Справочник дизайн-систем</Text>
          <Text size="xs" c="dimmed" className="hidden sm:block">На основе Carbon Design System</Text>
        </Box>
      </Group>

      <Group gap="sm">
        <Tooltip label={mounted ? (colorScheme === 'dark' ? 'Светлая тема' : 'Тёмная тема') : 'Переключить тему'}>
          <ActionIcon variant="subtle" size="lg" onClick={onToggleTheme} radius="sm" color="gray" className="lg:hidden">
            {mounted && colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </ActionIcon>
        </Tooltip>
      </Group>
    </Group>
  )
}
