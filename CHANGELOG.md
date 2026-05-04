# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.1.0] - 2025-03-01

### Added
- `worklog.md` - Project history and work tracking
- `CHANGELOG.md` - Version tracking and release notes
- `Design_System.md` - Complete Carbon Design System documentation

### Changed
- Removed duplicate "Все разделы" sidebar from main content area
- Navigation now only in left panel (Carbon style)

### Fixed
- Replaced non-existent lucide icons (`Carbon`, `Design`) with valid ones (`Hexagon`, `Blocks`)

### Removed
- Unused imports: `Accordion`, `ChevronDown`, `Atom`

---

## [2.0.0] - 2025-02-28

### Breaking Changes
- Complete redesign in Carbon Design System style
- Replaced Geist font with IBM Plex Sans
- Changed primary color from Violet to IBM Blue

### Added
- **Fonts**: IBM Plex Sans and IBM Plex Mono with Cyrillic support
- **Color Palette**: Carbon Blue, Gray, Green, Red, Yellow scales
- **Components**: Carbon-style tiles, detail cards, navigation
- **Theme**: Light/dark mode with Carbon colors
- **Styles**: Minimal radius (2px), sharp corners, 70ms transitions

### Changed
- `layout.tsx`: New Mantine theme with Carbon colors
- `page.tsx`: Complete redesign with Carbon components
- `globals.css`: Carbon theme variables

### Removed
- shadcn/ui components (replaced with Mantine)
- Geist font (replaced with IBM Plex)
- Violet color scheme (replaced with IBM Blue)

### Technical
- Updated Mantine theme configuration
- Added Carbon spacing system
- Implemented Carbon component variants

---

## [1.0.0] - 2025-02-28

### Added
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Database**: Prisma ORM with SQLite
- **UI**: Initial shadcn/ui implementation
- **API**: REST endpoints `/api/design-systems`
- **Models**: Category, Item, Feature, User, Bookmark

### Content
- 12 design system categories
- 76+ items with descriptions
- 400+ features/tags
- Full Russian localization

### Features
- Light/dark theme toggle
- Search functionality
- Database import/seeding
- Responsive design

### Documentation
- `design_system.md`: Initial documentation (Russian)

---

## Version History

```
v2.1.0 ─── Documentation & cleanup
   │
v2.0.0 ─── Carbon Design System migration
   │
v1.0.0 ─── Initial release
```

---

## Upcoming (Roadmap)

### [2.2.0] - Planned
- [ ] Interactive component examples
- [ ] Code snippets for each pattern
- [ ] User bookmarks/favorites

### [3.0.0] - Future
- [ ] Authentication system
- [ ] User contributions
- [ ] API documentation
- [ ] Internationalization (i18n)

---

## Release Notes Format

Each release includes:
- **Added**: New features
- **Changed**: Changes to existing features
- **Deprecated**: Features to be removed
- **Removed**: Removed features
- **Fixed**: Bug fixes
- **Security**: Security updates
