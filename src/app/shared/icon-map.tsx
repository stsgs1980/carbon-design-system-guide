import {
  Layout,
  Target,
  Settings,
  Box,
  Palette,
  Type,
  Sparkles,
  Smartphone,
  Layers,
  AlertTriangle,
  FolderTree,
  FolderKanban,
  Box as BoxIcon,
} from 'lucide-react'
import type { ReactNode } from 'react'

export const iconMap: Record<string, ReactNode> = {
  Layout: <Layout size={16} />,
  Target: <Target size={16} />,
  Settings: <Settings size={16} />,
  Box: <BoxIcon size={16} />,
  Palette: <Palette size={16} />,
  Type: <Type size={16} />,
  Sparkles: <Sparkles size={16} />,
  Smartphone: <Smartphone size={16} />,
  Layers: <Layers size={16} />,
  AlertTriangle: <AlertTriangle size={16} />,
  FolderTree: <FolderTree size={16} />,
  FolderKanban: <FolderKanban size={16} />,
}

export { BoxIcon }
