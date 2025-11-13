import type { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export const Avatar = ({
  src,
  alt,
  size = 'md',
  className = '',
  ...props
}: AvatarProps) => {
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-32 h-32',
    xl: 'w-full h-full'
  }

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gray-200 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-full"
        {...props}
      />
    </div>
  )
}
