import type { ReactNode, ReactElement } from 'react'

export type ToastProps = {
  variant?: 'default' | 'destructive'
  className?: string
  children?: ReactNode
}

export type ToastActionElement = ReactElement
