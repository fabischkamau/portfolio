import type React from 'react'

export default function Layover({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full p-2 text-gray-50 mt-[var(--nav-height)] md:mt-[var(--nav-height-md)] h-full">
      {children}
    </div>
  )
}
