import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";
import { ObjetosProps } from '../types';
import { useName } from '.';



const schema = z.object({
    name: z.string().min(4, { message: 'error name' }),
    avatar: z.string().min(10, { message: 'error avatar' })
})

type Objeto = z.infer<typeof schema>

export function useValue() {

    const [isVisible, setIsVisible] = useState(false);

    const { id, setId } = useName();


    const [objetos, setObjetos] = useState<ObjetosProps[]>([]);

    const {
        formState: { errors },
        handleSubmit,
        register,
        reset,
    } = useForm<Objeto>({
        mode: 'onBlur',
        resolver: zodResolver(schema)
    })

    function formSubmit(data: Objeto) {

        setId(id => id + 1);

        setObjetos([
            ...objetos,
            { avatar: data.avatar, name: data.name, id: id + 1 }
        ])

        reset()
    }


    function handleDeleteItem(id: number) {
        setObjetos(objetos.filter(obj => {
            return obj.id !== id
        }))
    }






    return {
        isVisible,
        setIsVisible,
        objetos,
        handleDeleteItem,
        formSubmit,
        handleSubmit,
        register,
        errors
    }
}