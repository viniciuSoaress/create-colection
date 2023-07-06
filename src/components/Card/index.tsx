import { CardProps } from "../../types";

import S from './index.module.css'


export function Card({ name, onDelete, id }: CardProps) {

    return (
        <section className={S.card}>

            <header className={S.header}>

                <strong>{name}</strong>

                <button
                    onClick={() => onDelete(id)}
                > 
                    X
                </button>
            </header>

            <main className={S.main}>
                <img src="https://picsum.photos/200" alt="image" />
                <img src="https://picsum.photos/200" alt="image" />
            </main>

        </section>
    )
}