import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
}

export const Section = ({ children, className = '' }: SectionProps) => {
  return (
    <section className={`bg-white rounded-2xl p-4 ${className}`}>
      {children}
    </section>
  )
}
