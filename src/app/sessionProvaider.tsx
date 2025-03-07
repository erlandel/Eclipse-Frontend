"use client"
import { SessionProvider } from "next-auth/react"

export const sessionProvaider = ({children}: {children: React.ReactNode}) => {
  return (
   <SessionProvider>{children}</SessionProvider>
  )
}
