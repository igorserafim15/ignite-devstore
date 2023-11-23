import clsx from 'clsx'
import { ComponentProps } from 'react'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={clsx('bg-zinc-50/10 animate-pulse rounded-none', className)}
      {...props}
    />
  )
}
