import * as React from 'react'
import { cn } from '@/lib/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'flex h-12 w-full rounded-lg border-2 border-night-200 bg-white px-3 text-base text-night-900 outline-none transition-colors placeholder:text-night-400 focus-visible:border-night-900 focus-visible:ring-2 focus-visible:ring-accent/25 disabled:opacity-50 sm:h-11 sm:text-sm',
      className,
    )}
    {...props}
  />
))
Input.displayName = 'Input'
