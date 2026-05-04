# Worklog — Справочник дизайн-систем

> История изменений проекта в стиле Carbon Design System

---

## v2.1.0 (2025-03-01)

### Добавлено
- Создан `worklog.md` для отслеживания истории изменений
- Создан `CHANGELOG.md` для версионирования
- Обновлён `Design_System.md` с принципами Carbon Design System

### Изменено
- Удалён дублирующий блок "Все разделы" из центральной области
- Навигация теперь доступна только через левую панель

### Исправлено
- Заменены несуществующие иконки lucide-react (`Carbon`, `Design`) на `Hexagon`, `Blocks`

---

## v2.0.0 (2025-02-28)

### Главные изменения
- **Миграция на Carbon Design System style**

### Добавлено
- Шрифт **IBM Plex Sans** и **IBM Plex Mono** (с поддержкой кириллицы)
- Цветовая палитра Carbon (Blue, Gray, Green, Red, Yellow)
- Компоненты в стиле Carbon (минимальный radius, острые углы)
- Carbon-style навигация с NavLink
- Carbon tiles для отображения контента

### Удалено
- Библиотека shadcn/ui (заменена на Mantine)
- Шрифт Geist (заменён на IBM Plex)
- Фиолетовая цветовая схема (заменена на IBM Blue)

### Технические изменения
- Обновлён `globals.css` с переменными Carbon
- Обновлён `layout.tsx` с темой Carbon
- Полностью переработан `page.tsx`

---

## v1.0.0 (2025-02-28)

### Добавлено
- Инициализация Next.js 16 проекта
- Настройка Prisma с SQLite базой данных
- Создание API endpoints `/api/design-systems`
- Модели данных: Category, Item, Feature, User, Bookmark
- 12 категорий дизайн-систем с 76+ элементами
- Полная русская локализация
- Темная/светлая тема
- Поиск по контенту
- Функция импорта данных в БД

### Документация
- Создан `design_system.md` с полным описанием

---

## Архитектура проекта

```
src/
├── app/
│   ├── page.tsx          # Главная страница (Carbon style)
│   ├── layout.tsx        # Layout с MantineProvider
│   ├── globals.css       # Carbon theme variables
│   └── api/
│       └── design-systems/
│           └── route.ts  # API endpoints
├── components/
│   └── ui/               # Mantine components
└── lib/
    └── db.ts             # Prisma client

prisma/
└── schema.prisma         # Database schema

db/
└── custom.db             # SQLite database
```

---

## Принципы Carbon Design System

### 1. Ясность (Clarity)
- Убираем визуальный шум
- Фокус на контенте
- Понятная навигация

### 2. Эффективность (Efficiency)
- Быстрые переходы (70ms)
- Минимальные действия
- Оптимизированный workflow

### 3. Согласованность (Consistency)
- Единый стиль компонентов
- Повторяющиеся паттерны
- Предсказуемый UX

### 4. Доступность (Accessibility)
- WCAG AA соответствие
- Поддержка клавиатуры
- Контрастные цвета

---

## Технологический стек

| Категория | Технология |
|-----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI Library | Mantine UI v8 |
| Database | Prisma + SQLite |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Font | IBM Plex Sans / Mono |

---

## Следующие шаги

- [ ] Добавить тесты
- [ ] Настроить CI/CD
- [ ] Добавить аналитику
- [ ] Расширить контент
- [ ] Добавить интерактивные примеры
