import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";


import { NamesProps } from "../types";


const schemaO = z.object({
  name: z.string().min(4, { message: 'nome muito curto' })
})

type NameP = z.infer<typeof schemaO>


export function useName() {

  const [names, setNames] = useState<NamesProps[]>([]);

  const [id, setId] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<NameP>({
    mode: 'all',
    resolver: zodResolver(schemaO)
  })

  function formSubmit(data: NameP) {
    setId(id => id + 1)

    setNames([
      ...names,
      { name: data.name, id: id + 1 }
    ])

    reset()
  }



  function handleDeleteColection(id: number) {
    setNames(names.filter(name => {
      return name.id !== id
    }))
  }

  return {
    names,
    handleDeleteColection,
    id,
    setId,
    formSubmit,
    register,
    errors,
    handleSubmit
  }

}