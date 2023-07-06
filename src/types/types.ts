import { MouseEventHandler } from "react"

export type NamesProps = {
    id: number,
    name: string,
}

export type CardProps = {
    name: string,
    onDelete: (id: number) => void,
    id: number,
}