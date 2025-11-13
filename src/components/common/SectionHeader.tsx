import type { ReactNode } from 'react'

interface SectionHeaderProps {
  title: string
  children?: ReactNode
  titleClassName?: string
}

export const SectionHeader = ({ title, children, titleClassName = 'text-3xl text-gray-800' }: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className={titleClassName}>{title}</h1>
      {children}
    </div>
  )
}
