import { useValue } from "../../hooks";

import { CardProps } from "../../types";

import S from './index.module.css'


export function Card({ names, onDelete, id }: CardProps) {

    const { isVisible, setIsVisible, handleitem, objetos, item, handleAddItem, handleDeleteItem } = useValue();

    let modal: React.ReactNode;

    if (isVisible) {
        modal = (
            <div>
                <input
                    type="text"
                    name="avatar"
                    placeholder="link da imagen"
                    onChange={handleitem}
                    value={item.avatar}
                />
                <input
                    type="text"
                    placeholder="nome da coleção"
                    name="name"
                    onChange={handleitem}
                    value={item.name}
                />
                <button
                    onClick={() =>{ 
                        setIsVisible(false)
                        handleAddItem()
                    }}
                >
                    save
                </button>
            </div>
        )
    } else {
        modal = (
            <div>
                <button
                    onClick={() => setIsVisible(true)}
                >
                    add
                </button>
            </div>
        )
    }


    return (
        <section className={S.card}>

            <header className={S.header}>

                <strong>{names}</strong>

                {modal}
            </header>

            <main className={S.main}>

                {objetos?.map(e => (
                    <div className={S.mainConteiner} key={e.id}>
                        <img src={e.avatar} alt={e.name}/>
                        {' - '}
                        {e.name}
                        <button
                            onClick={() => handleDeleteItem(e.id)}
                        >
                            del
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