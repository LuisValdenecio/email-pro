'use server'

import prisma from "@/lib/prisma"

export async function contacts() {
    try {
        const contacts = await prisma.contact.findMany()
        console.log(contacts)
        return contacts
    } catch (error) {
        console.log(error)
    }
}