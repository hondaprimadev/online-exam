'use client'

import { useState } from 'react'
import { IconAlertTriangle } from '@tabler/icons-react'
import { toast } from '@/hooks/use-toast'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ConfirmDialog } from '@/components/confirm-dialog'
import { IQuestionForm } from '../data/type'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  question?: IQuestionForm
}

export function QuestionDeleteDialog({ open, onOpenChange, question }: Props) {
  const [value, setValue] = useState('')

  const handleDelete = () => {
    if (value.trim() !== question?.id) return

    onOpenChange(false)
    toast({
      title: 'The following user has been deleted:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>
            {JSON.stringify(question, null, 2)}
          </code>
        </pre>
      ),
    })
  }

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      handleConfirm={handleDelete}
      disabled={value.trim() !== question?.id}
      title={
        <span className='text-destructive'>
          <IconAlertTriangle
            className='mr-1 inline-block stroke-destructive'
            size={18}
          />{' '}
          Hapus Soal
        </span>
      }
      desc={
        <div className='space-y-4'>
          <p className='mb-2'>
            Kamu yakin akan hapus soal ini{' '}
            <span className='font-bold'>{question?.name.toUpperCase()} ?</span>
            <br />
            Data akan terhapus secara permanen dan tidak bisa dikembalikan.
          </p>

          <Label className='my-2'>
            ID:
            <span className='font-bold'>{question?.id}</span>
            <Input
              className='mt-2'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder='Masukan ID untuk konfirmasi hapus.'
            />
          </Label>

          <Alert variant='destructive'>
            <AlertTitle>Warning!</AlertTitle>
            <AlertDescription>
              Hati-hati, proses ini tidak bisa di ulang kembali.
            </AlertDescription>
          </Alert>
        </div>
      }
      confirmText='Delete'
      destructive
    />
  )
}
