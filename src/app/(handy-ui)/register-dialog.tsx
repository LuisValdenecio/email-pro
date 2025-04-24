"use client"

import { Button } from '@/components/button'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'
import { useState } from 'react'

interface RegisterDialogProps {
  buttonLabel: string
}

export function RegisterDialog({ buttonLabel }: RegisterDialogProps) {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        {buttonLabel}
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Add new contact</DialogTitle>
        <DialogDescription>
          Add a new contact to your address book. You'll be able to send emails to this contact directly from the dashboard.
        </DialogDescription>
        <DialogBody>
          <Field>
            <Label>Amount</Label>
            <Input name="amount" placeholder="$0.00" />
          </Field>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Refund</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}