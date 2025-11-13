import type { ReactNode } from 'react'

interface GridContainerProps {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: 4 | 6
  className?: string
}

export const GridContainer = ({
  children,
  cols = 3,
  gap = 6,
  className = ''
}: GridContainerProps) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }

  return (
    <div className={`grid ${gridCols[cols]} gap-${gap} ${className}`}>
      {children}
    </div>
  )
}
