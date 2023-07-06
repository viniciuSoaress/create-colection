import { ChangeEvent, useState } from "react";


import { NamesProps } from "../types";


export function useName(){

    const [names, setNames] = useState<NamesProps[]>([]);

    const [name, setName] = useState('');

    const [id, setId] = useState(0);

    function handleName(e: ChangeEvent<HTMLInputElement>){
        setName(e.target.value)
    }
    
    function handleAddColection(){
        setId(id => id + 1)
        setNames([
            ...names,
            {name: name, id: id + 1}
        ])
        setName('');
    }

    function handleDeleteColection(id: number){
        setNames(names.filter( name => {
           return name.id !== id
        }))
    }

    return {
        names,
        handleName,
        handleAddColection,
        name,
        handleDeleteColection,
    }
    
}