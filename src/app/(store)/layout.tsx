import { ReactNode } from 'react'

type StoreLayoutProps = { children: ReactNode }

export default function StoreLayout({ children }: StoreLayoutProps) {
  return <div>{children}</div>
}
