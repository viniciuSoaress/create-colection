import { ChangeEvent, Dispatch, SetStateAction } from "react"

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
    item: ObjetosProps,
    onSetIsVisible: Dispatch<SetStateAction<boolean>>,
    onHandleitem: (e: ChangeEvent<HTMLInputElement>) => void,
    onHandleAddItem: () => void,


}