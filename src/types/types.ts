
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