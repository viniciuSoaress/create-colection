import { useValue } from "../../hooks";

import { CardProps } from "../../types";

import { Modal } from "..";

import S from './index.module.css'


export function Card({ names, onDelete, id }: CardProps) {

    const { isVisible, setIsVisible, handleitem, objetos, item, handleAddItem, handleDeleteItem } = useValue();



    return (
        <section className={S.card}>

                {
                    isVisible && ( <Modal
                        isVisible={isVisible}
                        item={item}
                        setIsVisible={setIsVisible}
                        handleitem={handleitem}
                        handleAddItem={handleAddItem}
                    /> )
                }
            <header className={S.header}>

                <strong>{names}</strong>


                <button onClick={() => setIsVisible(true)}>
                    New Item
                </button>


            </header>

            <main className={S.main}>

                {objetos?.map(e => (
                    <div className={S.mainConteiner} key={e.id}>
                        <img
                            src={e.avatar}
                            alt={e.name}
                        />
                        {' - '}
                        {e.name}
                        {' - '}
                        <button
                            onClick={() => handleDeleteItem(e.id)}
                        >
                            apagar
                        </button>
                    </div>
                ))}


            </main>

            <button className={S.delete} onClick={() =>
                onDelete(id)}>
                X
            </button>

        </section>
    )
}