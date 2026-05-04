'use client'

import { useState, useEffect } from 'react'
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  AppShellSection,
  Group,
  Title,
  Text,
  Button,
  TextInput,
  Card,
  Badge,
  Container,
  Box,
  ActionIcon,
  Stack,
  ScrollArea,
  Divider,
  Skeleton,
  SimpleGrid,
  Paper,
  useMantineColorScheme,
  NavLink,
  Tooltip,
  Grid,
  ThemeIcon,
  Anchor,
} from '@mantine/core'
import { 
  Palette, 
  Type, 
  Sparkles, 
  Smartphone, 
  Layers, 
  AlertTriangle, 
  FolderTree, 
  FolderKanban,
  Layout,
  Target,
  Settings,
  Box as BoxIcon,
  BookOpen,
  ExternalLink,
  Search,
  Database,
  Moon,
  Sun,
  ChevronRight,
  Hexagon,
  Blocks,
} from 'lucide-react'

interface DesignSystemItem {
  name: string
  description: string
  url?: string
  features?: string[]
}

interface Section {
  slug: string
  title: string
  icon: string
  description: string
  items: DesignSystemItem[]
}

const iconMap: Record<string, React.ReactNode> = {
  'Layout': <Layout size={16} />,
  'Target': <Target size={16} />,
  'Settings': <Settings size={16} />,
  'Box': <BoxIcon size={16} />,
  'Palette': <Palette size={16} />,
  'Type': <Type size={16} />,
  'Sparkles': <Sparkles size={16} />,
  'Smartphone': <Smartphone size={16} />,
  'Layers': <Layers size={16} />,
  'AlertTriangle': <AlertTriangle size={16} />,
  'FolderTree': <FolderTree size={16} />,
  'FolderKanban': <FolderKanban size={16} />
}

function CarbonTile({ section, isActive }: { section: Section; isActive: boolean }) {
  const IconComponent = iconMap[section.icon] || <BoxIcon size={16} />
  
  return (
    <Card 
      padding="lg" 
      radius="sm"
      style={{ 
        background: 'var(--mantine-color-body)',
        border: isActive ? '2px solid var(--mantine-color-blue-6)' : '1px solid var(--mantine-color-gray-30)',
        transition: 'all 70ms ease',
        height: '100%',
      }}
    >
      <Group gap="sm" mb="md">
        <ThemeIcon 
          size="lg" 
          radius="sm" 
          variant="outline"
          color="blue"
          style={{ border: '1px solid var(--mantine-color-blue-6)' }}
        >
          {IconComponent}
        </ThemeIcon>
        <Box flex={1}>
          <Text fw={600} size="lg" component="h3">{section.title}</Text>
          <Text size="sm" c="dimmed">{section.description}</Text>
        </Box>
      </Group>
      
      <Stack gap="xs">
        {section.items.slice(0, 4).map((item, index) => (
          <Paper 
            key={index} 
            p="sm" 
            radius="sm"
            style={{ 
              background: 'var(--mantine-color-gray-0)',
              border: '1px solid var(--mantine-color-gray-20)',
              cursor: 'pointer',
              transition: 'all 70ms ease',
            }}
            className="carbon-tile-item"
          >
            <Group justify="space-between" wrap="nowrap">
              <Box>
                <Text size="sm" fw={500}>{item.name}</Text>
                <Text size="xs" c="dimmed" lineClamp={1}>{item.description}</Text>
              </Box>
              <ChevronRight size={16} style={{ minWidth: 16, color: 'var(--mantine-color-gray-50)' }} />
            </Group>
          </Paper>
        ))}
        {section.items.length > 4 && (
          <Text size="xs" c="dimmed" ta="center">
            +{section.items.length - 4} ещё
          </Text>
        )}
      </Stack>
    </Card>
  )
}

function CarbonDetailCard({ section }: { section: Section }) {
  const IconComponent = iconMap[section.icon] || <BoxIcon size={16} />
  
  return (
    <Card 
      padding="xl" 
      radius="sm"
      style={{ 
        background: 'var(--mantine-color-body)',
        border: '1px solid var(--mantine-color-gray-30)',
      }}
    >
      <Group mb="xl">
        <ThemeIcon 
          size="xl" 
          radius="sm" 
          variant="outline"
          color="blue"
          style={{ border: '1px solid var(--mantine-color-blue-6)' }}
        >
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
                      <Badge 
                        key={i} 
                        variant="outline" 
                        color="gray"
                        size="sm"
                        style={{ borderRadius: 2 }}
                      >
                        {feature}
                      </Badge>
                    ))}
                  </Group>
                )}
              </Box>
              {item.url && (
                <Anchor 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  size="sm"
                  c="blue.6"
                >
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

export default function Home() {
  const [sections, setSections] = useState<Section[]>([])
  const [loading, setLoading] = useState(true)
  const [seeding, setSeeding] = useState(false)
  const [seeded, setSeeded] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState('')
  const [mounted, setMounted] = useState(false)
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const response = await fetch('/api/design-systems')
      const data = await response.json()
      setSections(data.categories)
      setSeeded(data.seeded)
      if (data.categories.length > 0) {
        setActiveSection(data.categories[0].slug)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleSeed() {
    setSeeding(true)
    try {
      const response = await fetch('/api/design-systems', { method: 'POST' })
      const data = await response.json()
      console.log('Seed result:', data)
      await fetchData()
    } catch (error) {
      console.error('Error seeding data:', error)
    } finally {
      setSeeding(false)
    }
  }

  const filteredSections = searchQuery 
    ? sections.map(section => ({
        ...section,
        items: section.items.filter(item => 
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.features?.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      })).filter(section => section.items.length > 0)
    : sections

  const totalItems = sections.reduce((acc, s) => acc + s.items.length, 0)
  const totalFeatures = sections.reduce((acc, s) => 
    acc + s.items.reduce((itemAcc, item) => itemAcc + (item.features?.length || 0), 0), 0
  )

  const handleSectionClick = (slug: string) => {
    setActiveSection(slug)
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth' })
  }

  const activeSectionData = sections.find(s => s.slug === activeSection)

  const navbarContent = (
    <AppShellNavbar py="md" px="md">
      <AppShellSection grow component={ScrollArea}>
        <Stack gap="xs">
          {/* Carbon Logo */}
          <Group mb="md" gap="sm">
            <ThemeIcon 
              size="lg" 
              radius="sm" 
              color="blue"
              variant="filled"
            >
              <Hexagon size={20} />
            </ThemeIcon>
            <Box>
              <Text fw={600} size="sm">Carbon</Text>
              <Text size="xs" c="dimmed">Design System</Text>
            </Box>
          </Group>

          <Divider mb="sm" />

          <Text size="xs" fw={600} c="dimmed" tt="uppercase" mb="xs">
            Разделы
          </Text>
          {sections.map((section) => {
            const IconComponent = iconMap[section.icon] || <BoxIcon size={16} />
            return (
              <NavLink
                key={section.slug}
                label={section.title}
                leftSection={IconComponent}
                rightSection={activeSection === section.slug ? <ChevronRight size={14} /> : null}
                active={activeSection === section.slug}
                onClick={() => handleSectionClick(section.slug)}
                variant="light"
                color="blue"
                radius="sm"
                style={{
                  fontWeight: activeSection === section.slug ? 600 : 400,
                }}
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
            onChange={(e) => setSearchQuery(e.target.value)}
            radius="sm"
            size="sm"
            styles={{
              input: {
                border: '1px solid var(--mantine-color-gray-30)',
              }
            }}
          />
          
          {!seeded && (
            <Button 
              variant="outline" 
              fullWidth
              size="sm"
              leftSection={<Database size={16} />}
              onClick={handleSeed}
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
              <ActionIcon 
                variant="subtle" 
                size="md" 
                onClick={() => toggleColorScheme()}
                radius="sm"
                color="gray"
              >
                {mounted && colorScheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </ActionIcon>
            </Tooltip>
          </Group>
        </Stack>
      </AppShellSection>
    </AppShellNavbar>
  )

  const headerContent = (
    <Group justify="space-between" h="100%" px="lg">
      <Group gap="md">
        <ThemeIcon 
          size="lg" 
          radius="sm" 
          color="blue"
          variant="filled"
        >
          <Blocks size={20} />
        </ThemeIcon>
        <Box>
          <Text fw={600} size="lg">Справочник дизайн-систем</Text>
          <Text size="xs" c="dimmed" className="hidden sm:block">
            На основе Carbon Design System
          </Text>
        </Box>
      </Group>
      
      <Group gap="sm">
        <Tooltip label={mounted ? (colorScheme === 'dark' ? 'Светлая тема' : 'Тёмная тема') : 'Переключить тему'}>
          <ActionIcon 
            variant="subtle" 
            size="lg" 
            onClick={() => toggleColorScheme()}
            radius="sm"
            color="gray"
            className="lg:hidden"
          >
            {mounted && colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </ActionIcon>
        </Tooltip>
      </Group>
    </Group>
  )

  if (loading) {
    return (
      <AppShell header={{ height: 48 }}>
        <AppShellHeader style={{ borderBottom: '1px solid var(--mantine-color-gray-30)' }}>{headerContent}</AppShellHeader>
        <AppShellMain>
          <Container size="xl" py="xl">
            <Stack gap="lg">
              <Skeleton height={32} radius="sm" />
              <SimpleGrid cols={4} spacing="md">
                <Skeleton height={80} radius="sm" />
                <Skeleton height={80} radius="sm" />
                <Skeleton height={80} radius="sm" />
                <Skeleton height={80} radius="sm" />
              </SimpleGrid>
              <SimpleGrid cols={3} spacing="md">
                <Skeleton height={300} radius="sm" />
                <Skeleton height={300} radius="sm" />
                <Skeleton height={300} radius="sm" />
              </SimpleGrid>
            </Stack>
          </Container>
        </AppShellMain>
      </AppShell>
    )
  }

  return (
    <AppShell 
      header={{ height: 48 }} 
      navbar={{ 
        width: 256, 
        breakpoint: 'lg',
        collapsed: { mobile: true }
      }} 
      padding="md"
    >
      <AppShellHeader style={{ borderBottom: '1px solid var(--mantine-color-gray-30)' }}>{headerContent}</AppShellHeader>
      {navbarContent}
      
      <AppShellMain>
        <Container size="xl" py="lg">
          {/* Breadcrumb */}
          <Group gap="xs" mb="lg">
            <Text size="sm" c="dimmed">Справочник</Text>
            <Text size="sm" c="dimmed">/</Text>
            <Text size="sm" c="blue.6" fw={500}>{activeSectionData?.title || 'Обзор'}</Text>
          </Group>

          {/* Stats Row - Carbon Style */}
          <Grid mb="xl" gutter="md">
            <Grid.Col span={{ base: 6, sm: 3 }}>
              <Paper 
                p="md" 
                radius="sm"
                style={{ 
                  background: 'var(--mantine-color-blue-0)',
                  border: '1px solid var(--mantine-color-blue-2)',
                }}
              >
                <Text size="xl" fw={600} c="blue.7">{sections.length}</Text>
                <Text size="sm" c="dimmed">Категорий</Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 6, sm: 3 }}>
              <Paper 
                p="md" 
                radius="sm"
                style={{ 
                  background: 'var(--mantine-color-gray-0)',
                  border: '1px solid var(--mantine-color-gray-2)',
                }}
              >
                <Text size="xl" fw={600}>{totalItems}</Text>
                <Text size="sm" c="dimmed">Тем</Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 6, sm: 3 }}>
              <Paper 
                p="md" 
                radius="sm"
                style={{ 
                  background: 'var(--mantine-color-gray-0)',
                  border: '1px solid var(--mantine-color-gray-2)',
                }}
              >
                <Text size="xl" fw={600}>{totalFeatures}+</Text>
                <Text size="sm" c="dimmed">Функций</Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 6, sm: 3 }}>
              <Paper 
                p="md" 
                radius="sm"
                style={{ 
                  background: 'var(--mantine-color-gray-0)',
                  border: '1px solid var(--mantine-color-gray-2)',
                }}
              >
                <Text size="xl" fw={600}>{seeded ? 'БД' : 'Стат.'}</Text>
                <Text size="sm" c="dimmed">{seeded ? 'База данных' : 'Статичные данные'}</Text>
              </Paper>
            </Grid.Col>
          </Grid>

          {/* Search Results */}
          {searchQuery && (
            <Paper 
              p="md" 
              radius="sm" 
              mb="md" 
              style={{ 
                background: 'var(--mantine-color-gray-0)',
                border: '1px solid var(--mantine-color-gray-20)',
              }}
            >
              <Text size="sm" c="dimmed">
                Найдено результатов: {filteredSections.reduce((acc, s) => acc + s.items.length, 0)} по запросу &quot;{searchQuery}&quot;
              </Text>
            </Paper>
          )}

          {/* Content */}
          <Box style={{ maxWidth: '100%' }}>
            {activeSectionData && (
              <Box id={activeSectionData.slug}>
                <CarbonDetailCard section={activeSectionData} />
              </Box>
            )}
          </Box>
        </Container>
      </AppShellMain>

      {/* Footer - Carbon Style */}
      <Box 
        component="footer" 
        style={{ 
          borderTop: '1px solid var(--mantine-color-gray-30)',
          marginTop: '3rem',
        }}
      >
        <Container size="xl" py="lg">
          <Group justify="space-between">
            <Group gap="sm">
              <ThemeIcon size="sm" color="blue" variant="filled" radius="sm">
                <Blocks size={14} />
              </ThemeIcon>
              <Text size="sm" c="dimmed">
                Carbon Design System • {sections.length} категорий • {totalItems} тем
              </Text>
            </Group>
            <Text size="sm" c="dimmed" className="hidden sm:block">
              На основе исследования DeepSeek AI
            </Text>
          </Group>
        </Container>
      </Box>
    </AppShell>
  )
}
