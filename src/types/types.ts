import { Dispatch, SetStateAction } from "react"
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"

export type NamesProps = {
    id: number,
    name: string,
}

export type CardProps = {
    names: string,
    onDelete: (id: number) => void,
    id: number,
}

export type ObjetosProps = {
    id: number,
    name: string,
    avatar: string,
}

export type ModalProps = {
    isVisible: boolean,
    register: UseFormRegister<{
        name: string;
        avatar: string;
    }>,
    handleSubmit: UseFormHandleSubmit<{
        name: string;
        avatar: string;
    }, undefined>,
    formSubmit: (data: {
        name: string;
        avatar: string;
    }) => void,
    errors: FieldErrors<{
        name: string;
        avatar: string;
    }>
    onSetIsVisible: Dispatch<SetStateAction<boolean>>,
}