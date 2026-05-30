import { db } from '@/lib/db'
import { NextResponse } from 'next/server'
import { designSystemsData } from './data'

export async function GET() {
  try {
    const categories = []

    if (categories.length === 0) {
      return NextResponse.json({
        categories: designSystemsData,
        seeded: false
      })
    }

    return NextResponse.json({
      categories: categories.map(cat => ({
        slug: cat.slug,
        title: cat.title,
        description: cat.description,
        icon: cat.icon,
        items: cat.items.map(item => ({
          name: item.name,
          description: item.description,
          url: item.url,
          features: item.features.map(f => f.name)
        }))
      })),
      seeded: true
    })
  } catch (error) {
    console.error('Error fetching design systems:', error)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}

export async function POST() {
  try {
    const existingCount = await db.category.count()
    if (existingCount > 0) {
      return NextResponse.json({
        message: 'Данные уже импортированы',
        count: existingCount
      })
    }

    for (const categoryData of designSystemsData) {
      const category = await db.category.create({
        data: {
          slug: categoryData.slug,
          title: categoryData.title,
          description: categoryData.description,
          icon: categoryData.icon,
          order: categoryData.order
        }
      })

      for (let i = 0; i < categoryData.items.length; i++) {
        const itemData = categoryData.items[i]
        const item = await db.item.create({
          data: {
            categoryId: category.id,
            name: itemData.name,
            description: itemData.description,
            url: itemData.url,
            order: i
          }
        })

        if (itemData.features) {
          for (let j = 0; j < itemData.features.length; j++) {
            await db.feature.create({
              data: {
                itemId: item.id,
                name: itemData.features[j],
                order: j
              }
            })
          }
        }
      }
    }

    return NextResponse.json({
      message: 'Данные успешно импортированы',
      categories: designSystemsData.length,
      items: designSystemsData.reduce((acc, cat) => acc + cat.items.length, 0)
    })
  } catch (error) {
    console.error('Error seeding data:', error)
    return NextResponse.json({ error: 'Failed to seed data' }, { status: 500 })
  }
}
