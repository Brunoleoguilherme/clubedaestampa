import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-extrabold uppercase tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-night-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'border-2 border-night-900 bg-accent text-white hover:-translate-y-0.5 hover:bg-brand-600',
        pink: 'border-2 border-night-900 bg-pink-500 text-white hover:-translate-y-0.5 hover:bg-pink-600',
        blue: 'border-2 border-night-900 bg-blue-500 text-white hover:-translate-y-0.5 hover:bg-blue-600',
        yellow: 'border-2 border-night-900 bg-yellow-400 text-night-900 hover:-translate-y-0.5 hover:bg-yellow-500',
        outline: 'border-2 border-night-900 bg-white text-night-900 hover:bg-night-50',
        ghost: 'text-night-900 hover:bg-night-50',
        onDark: 'border-2 border-white/25 bg-white/10 text-white hover:bg-white/20',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-11 px-5',
        lg: 'h-12 px-8 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  ),
)
Button.displayName = 'Button'

export { buttonVariants }
