import type { ReactNode } from 'react'

interface StatCardProps {
  icon: ReactNode
  value: string | number
  label: string
  variant?: 'horizontal' | 'vertical'
  bgColor?: string
  iconColor?: string
  className?: string
}

export const StatCard = ({
  icon,
  value,
  label,
  variant = 'vertical',
  bgColor = 'bg-blue-50',
  iconColor = 'text-blue-600',
  className = ''
}: StatCardProps) => {
  if (variant === 'horizontal') {
    return (
      <div className={`p-4 border border-gray-200 rounded-sm ${className}`}>
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-14 h-14 ${bgColor} rounded-full flex items-center justify-center`}>
            <div className={iconColor}>
              {icon}
            </div>
          </div>
          <div>
            <p className="text-2xl text-gray-800">{value}</p>
            <p className="text-gray-400 font-thin text-lg">{label}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`text-center p-4 ${bgColor} rounded-lg ${className}`}>
      <div className={`w-8 h-8 ${iconColor} mx-auto mb-2`}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  )
}
