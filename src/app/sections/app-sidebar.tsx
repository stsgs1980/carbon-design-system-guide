'use client'

import {
  AppShellNavbar,
  AppShellSection,
  Group,
  Text,
  TextInput,
  Button,
  Box,
  ActionIcon,
  Stack,
  ScrollArea,
  Divider,
  ThemeIcon,
  Tooltip,
  NavLink,
} from '@mantine/core'
import { Hexagon, Search, Database, Sun, Moon, ChevronRight, BoxIcon } from 'lucide-react'
import { iconMap } from '../shared/icon-map'
import type { Section } from '../shared/types'

interface AppSidebarProps {
  sections: Section[]
  activeSection: string
  searchQuery: string
  seeded: boolean
  seeding: boolean
  mounted: boolean
  colorScheme: 'light' | 'dark'
  onSearch: (value: string) => void
  onSectionClick: (slug: string) => void
  onSeed: () => void
  onToggleTheme: () => void
}

export function AppSidebar({
  sections,
  activeSection,
  searchQuery,
  seeded,
  seeding,
  mounted,
  colorScheme,
  onSearch,
  onSectionClick,
  onSeed,
  onToggleTheme,
}: AppSidebarProps) {
  return (
    <AppShellNavbar py="md" px="md">
      <AppShellSection grow component={ScrollArea}>
        <Stack gap="xs">
          <Group mb="md" gap="sm">
            <ThemeIcon size="lg" radius="sm" color="blue" variant="filled">
              <Hexagon size={20} />
            </ThemeIcon>
            <Box>
              <Text fw={600} size="sm">Carbon</Text>
              <Text size="xs" c="dimmed">Design System</Text>
            </Box>
          </Group>

          <Divider mb="sm" />

          <Text size="xs" fw={600} c="dimmed" tt="uppercase" mb="xs">Разделы</Text>
          {sections.map((section) => {
            const IconComponent = iconMap[section.icon] || <BoxIcon size={16} />
            return (
              <NavLink
                key={section.slug}
                label={section.title}
                leftSection={IconComponent}
                rightSection={activeSection === section.slug ? <ChevronRight size={14} /> : null}
                active={activeSection === section.slug}
                onClick={() => onSectionClick(section.slug)}
                variant="light"
                color="blue"
                radius="sm"
                style={{ fontWeight: activeSection === section.slug ? 600 : 400 }}
              />
            )
          })}
        </Stack>
      </AppShellSection>

      <AppShellSection>
        <Divider my="md" />
        <Stack gap="md">
          <TextInput
            placeholder="Поиск..."
            leftSection={<Search size={16} />}
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            radius="sm"
            size="sm"
            styles={{ input: { border: '1px solid var(--mantine-color-gray-30)' } }}
          />

          {!seeded && (
            <Button
              variant="outline"
              fullWidth
              size="sm"
              leftSection={<Database size={16} />}
              onClick={onSeed}
              loading={seeding}
              color="blue"
              radius="sm"
            >
              Импорт в БД
            </Button>
          )}

          <Group justify="space-between" align="center">
            <Text size="xs" c="dimmed">
              {seeded ? 'База данных' : 'Статичные данные'}
            </Text>
            <Tooltip label={mounted ? (colorScheme === 'dark' ? 'Светлая тема' : 'Тёмная тема') : 'Переключить тему'}>
              <ActionIcon variant="subtle" size="md" onClick={onToggleTheme} radius="sm" color="gray">
                {mounted && colorScheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </ActionIcon>
            </Tooltip>
          </Group>
        </Stack>
      </AppShellSection>
    </AppShellNavbar>
  )
}
