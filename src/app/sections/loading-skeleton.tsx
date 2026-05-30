'use client'

import { Container, Stack, Skeleton, SimpleGrid } from '@mantine/core'

export function LoadingSkeleton() {
  return (
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
  )
}
