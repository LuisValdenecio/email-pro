import { getEvents } from '@/data'
import { ApplicationLayout } from './application-layout'
import { SessionProvider } from "next-auth/react"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let events = await getEvents()

  return <SessionProvider>
    <ApplicationLayout events={events}>{children}</ApplicationLayout>
  </SessionProvider>
  
}
