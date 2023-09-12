import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";


import { NamesProps, ObjetosProps } from "../types";

// const schema = z.string().min(4)

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
        formState: { errors }
    } = useForm<NameP>({
        mode: 'all',
        resolver: zodResolver(schemaO)
    })

    function formSubmit(data: NameP) {
        // console.log(data)
        setId(id => id + 1)

        setNames([
            ...names,
            { name: data.name, id: id + 1 }
        ])


    }





    // const [name, setName] = useState('');


    // function handleName(e: ChangeEvent<HTMLInputElement>) {
    //     setName(e.target.value)
    // }

    // function handleAddColection() {
    //     setId(id => id + 1)
    //     const result = schema.safeParse(name)

    //     if (result.success) {
    //         setNames([
    //             ...names,
    //             { name: name, id: id + 1 }
    //         ])
    //     } else {
    //         alert('coleção tem que ter 4 ou mais caracteres')
    //     }
    //     setName('');
    // }

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


const schema = z.object({
    name: z.string().min(4, { message: 'error name' }),
    avatar: z.string().min(10, { message: 'error avatar' })
})

type Objeto = z.infer<typeof schema>

export function useValue() {

    const [isVisible, setIsVisible] = useState(false);

    const { id, setId } = useName();

    // const [item, setItem] = useState<ObjetosProps>({} as ObjetosProps)

    const [objetos, setObjetos] = useState<ObjetosProps[]>([]);

    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<Objeto>({
        mode: 'onBlur',
        resolver: zodResolver(schema)
    })

    function formSubmit(data: Objeto) {
        
        // setId(id => id + 1);

        // setObjetos([
        //     ...objetos,
        //     {avatar: avatar, name: name, id: id + 1}
        // ])

        // console.log(objetos)
        handleAddItem(data)
    }


    function handleDeleteItem(id: number) {
        setObjetos(objetos.filter(obj => {
            return obj.id !== id
        }))
    }



    // function handleitem(e: ChangeEvent<HTMLInputElement>) {
    //     setItem({
    //         ...item,
    //         [e.target.name]: e.target.value,
    //     })
    // }

    function handleAddItem(item: Objeto) {
        setId(id => id + 1);
        setObjetos([
            ...objetos,
            { name: item.name, avatar: item.avatar, id: id + 1 }
        ]);
        // setItem({
        //     ...item,
        //     avatar: '',
        //     name: '',
        // })
    }

    


    return {
        isVisible,
        setIsVisible,
        // handleitem,
        // handleAddItem,
        objetos,
        // item,
        handleDeleteItem,
        formSubmit,
        handleSubmit,
        register,
        errors
    }
}