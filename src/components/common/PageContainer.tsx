import type { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

export const PageContainer = ({ children, className = '' }: PageContainerProps) => {
  return (
    <div className={`flex flex-col md:flex-row gap-6 px-8 py-6 w-full justify-center mx-auto max-w-[85rem] ${className}`}>
      {children}
    </div>
  )
}
