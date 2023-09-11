import { z } from 'zod'
import { ChangeEvent, useState } from "react";


import { NamesProps, ObjetosProps } from "../types";

const schema = z.string().min(4)


export function useName() {

    const [names, setNames] = useState<NamesProps[]>([]);

    const [name, setName] = useState('');

    const [id, setId] = useState(0);

    function handleName(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }

    function handleAddColection() {
        setId(id => id + 1)
        const result = schema.safeParse(name)

        if(result.success){
            setNames([
                ...names,
                { name: name, id: id + 1 }
            ])
        } else{
            alert('coleção tem que ter 4 ou mais caracteres')
        }
        setName('');
    }

    function handleDeleteColection(id: number) {
        setNames(names.filter(name => {
            return name.id !== id
        }))
    }

    return {
        names,
        handleName,
        handleAddColection,
        name,
        handleDeleteColection,
        setName,
        id,
        setId
    }

}


export function useValue() {

    const [isVisible, setIsVisible] = useState(false);

    const { id, setId } = useName();

    const [item, setItem] = useState<ObjetosProps>({} as ObjetosProps)

    const [objetos, setObjetos] = useState<ObjetosProps[]>([]);

    function handleitem(e: ChangeEvent<HTMLInputElement>) {
        setItem({
            ...item,
            [e.target.name]: e.target.value,
        })
    }

    function handleAddItem() {
        setId(id => id + 1);
        setObjetos([
            ...objetos,
            { name: item.name, avatar: item.avatar, id: id + 1 }
        ]);
        setItem({
            ...item,
            avatar: '',
            name: '',
        })
    }

    function handleDeleteItem(id: number) {
        setObjetos(objetos.filter(obj => {
            return obj.id !== id
        }))
    }


    return {
        isVisible,
        setIsVisible,
        handleitem,
        handleAddItem,
        objetos,
        item,
        handleDeleteItem,
    }
}