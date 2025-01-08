'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'
import { IQuestionForm } from '../data/type'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  question?: IQuestionForm
}

const formSchema = z.object({
  name: z.string().min(1, { message: 'Nama harus di isi.' }),
  desc: z.string().min(1, { message: 'Deskripsi lengkap harus di isi.' }),
  // isEdit: z.boolean(),
})

const QuestionActionDialog = ({ open, question, onOpenChange }: Props) => {
  const isEdit = !!question
  const form = useForm<IQuestionForm>({
    resolver: zodResolver(formSchema),
    defaultValues: isEdit
      ? { name: question.name, desc: question.desc }
      : { name: '', desc: '' },
  })
  const onSubmit = () => {}

  return (
    <Dialog
      open={open}
      onOpenChange={(state) => {
        form.reset()
        onOpenChange(state)
      }}
    >
      <DialogContent className='sm:max-w-lg gap-2'>
        <DialogHeader className='text-left'>
          <DialogTitle>
            {isEdit ? 'Update soal' : 'Tambah soal baru'}
          </DialogTitle>
          <DialogDescription>
            Harap pastikan data sudah benar.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className='w-full pr-4 -mr-4 py-1'>
          <Form {...form}>
            <form
              id='question-form'
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-4 p-0.5'
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2'>Nama Soal</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Soal Bhs Indonesia'
                        className='col-span-4'
                        autoComplete='off'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='col-span-4 col-start-3' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='desc'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-6 items-center gap-y-1 space-y-0'>
                    <FormLabel className='col-span-2'>Deskripsi</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Soal untuk ulangan bahasa indonesia kelas XII TBSM'
                        className='col-span-4'
                        autoComplete='off'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='col-span-4 col-start-3' />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </ScrollArea>
        <DialogFooter className='gap-2 mr-4 sm:gap-0'>
          <Button variant='outline' type='submit' form='question-form'>
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default QuestionActionDialog
