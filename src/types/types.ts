import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { FieldErrors, UseFormRegister } from "react-hook-form"

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
    handleSubmit: any,
    formSubmit: (data: {
        name: string;
        avatar: string;
    }) => void,
    errors: FieldErrors<{
        name: string;
        avatar: string;
    }>
    // item: ObjetosProps,
    onSetIsVisible: Dispatch<SetStateAction<boolean>>,
    // onHandleitem: (e: ChangeEvent<HTMLInputElement>) => void,
    // onHandleAddItem: () => void,



}