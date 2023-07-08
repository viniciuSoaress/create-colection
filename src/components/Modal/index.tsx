import { ModalProps } from "../../types"

import S from './index.module.css'


export function Modal({ isVisible, item, setIsVisible, handleitem, handleAddItem }: ModalProps) {

    if (isVisible) {
        return (
            <div className={S.conteiner}>

                <label htmlFor="avatar" >
                    Link da imagen
                    <input
                        type="text"
                        id="avatar"

                        name="avatar"
                        placeholder="link da imagen"
                        onChange={handleitem}
                        value={item.avatar}
                    />
                </label>

                <label htmlFor="name">
                    Nome da image
                    <input
                        type="text"
                        placeholder="nome da coleção"
                        id="name"
                        name="name"
                        onChange={handleitem}
                        value={item.name}
                    />
                </label>
                <button
                    onClick={() => {
                        setIsVisible(false)
                        handleAddItem()
                    }}
                >
                    save
                </button>
                <button
                    onClick={() => {
                        setIsVisible(false)
                    }}
                >
                    canselar
                </button>
            </div>
        )
    }
    return (
        <div>
            <button
                onClick={() => setIsVisible(true)}
            >
                addc
            </button>
        </div>
    )
}