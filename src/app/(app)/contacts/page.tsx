import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { RegisterDialog } from '@/app/(handy-ui)/register-dialog'
import { getOrders } from '@/data'
import type { Metadata } from 'next'
//import { contacts } from '@/app/actions/contacts'

export const metadata: Metadata = {
  title: 'Contacts',
}

export default async function Orders() {
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/contacts`)
  const contacts = await data.json()
  //let orders = await getOrders()
  //let all_contacts = await contacts()

  console.log(contacts)

  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>Contacts</Heading>
        <RegisterDialog buttonLabel="Add contact" />
      </div>
      <Table className="mt-8 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Order number</TableHeader>
            <TableHeader>Creation date</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader className="text-right">Messages</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts ? (
            <>
              {contacts.contacts?.map((contact : any) => (
                <TableRow key={contact.id} href={contact.id} title={`Order #${contact.id}`}>
                  <TableCell className="truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">{contact.id}</TableCell>
                  <TableCell className="truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">{contact.createdAt+""}</TableCell>
                  <TableCell className="truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">{contact.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar square initials={contact.name.split("")[0]} className="size-8 bg-zinc-900 text-white dark:bg-white dark:text-black" />
                      <span className="truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">{contact.email}</span>
                    </div>
                  </TableCell>
                  <TableCell className="truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400 text-center">500</TableCell>
                </TableRow>
              ))}
            </>
          ) : (
            <></>
          )}
        </TableBody>
      </Table>
    </>
  )
}
