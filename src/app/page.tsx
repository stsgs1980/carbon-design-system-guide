'use client'

import { AppShell, AppShellHeader, AppShellMain, Container, Text, Group, Box } from '@mantine/core'
import { useMantineColorScheme } from '@mantine/core'
import { useDesignSystems, useSeedData, useHydrated } from './features'
import { AppSidebar, AppHeader, StatsGrid, SearchBanner, LoadingSkeleton, AppFooter, CarbonDetailCard } from './sections'

export default function Home() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const mounted = useHydrated()
  const {
    sections, loading, activeSection, searchQuery, filteredSections,
    totalItems, totalFeatures, activeSectionData,
    setSearchQuery, handleSectionClick, refetch,
  } = useDesignSystems()
  const { seeding, seeded, handleSeed } = useSeedData(refetch)

  if (loading) {
    return (
      <AppShell header={{ height: 48 }}>
        <AppShellHeader style={{ borderBottom: '1px solid var(--mantine-color-gray-30)' }}>
          <AppHeader colorScheme={colorScheme} mounted={mounted} onToggleTheme={toggleColorScheme} />
        </AppShellHeader>
        <AppShellMain>
          <LoadingSkeleton />
        </AppShellMain>
      </AppShell>
    )
  }

  return (
    <AppShell header={{ height: 48 }} navbar={{ width: 256, breakpoint: 'lg', collapsed: { mobile: true } }} padding="md">
      <AppShellHeader style={{ borderBottom: '1px solid var(--mantine-color-gray-30)' }}>
        <AppHeader colorScheme={colorScheme} mounted={mounted} onToggleTheme={toggleColorScheme} />
      </AppShellHeader>

      <AppSidebar
        sections={sections}
        activeSection={activeSection}
        searchQuery={searchQuery}
        seeded={seeded}
        seeding={seeding}
        mounted={mounted}
        colorScheme={colorScheme}
        onSearch={setSearchQuery}
        onSectionClick={handleSectionClick}
        onSeed={handleSeed}
        onToggleTheme={toggleColorScheme}
      />

      <AppShellMain>
        <Container size="xl" py="lg">
          <Group gap="xs" mb="lg">
            <Text size="sm" c="dimmed">Справочник</Text>
            <Text size="sm" c="dimmed">/</Text>
            <Text size="sm" c="blue.6" fw={500}>{activeSectionData?.title || 'Обзор'}</Text>
          </Group>

          <StatsGrid sectionsCount={sections.length} totalItems={totalItems} totalFeatures={totalFeatures} seeded={seeded} />

          {searchQuery && (
            <SearchBanner
              searchQuery={searchQuery}
              resultCount={filteredSections.reduce((acc, s) => acc + s.items.length, 0)}
            />
          )}

          <Box style={{ maxWidth: '100%' }}>
            {activeSectionData && (
              <Box id={activeSectionData.slug}>
                <CarbonDetailCard section={activeSectionData} />
              </Box>
            )}
          </Box>
        </Container>
      </AppShellMain>

      <AppFooter sectionsCount={sections.length} totalItems={totalItems} />
    </AppShell>
  )
}
