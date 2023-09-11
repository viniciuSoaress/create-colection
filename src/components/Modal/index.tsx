import { ModalProps } from "../../types"

import S from './index.module.css'


export function Modal({ isVisible, item, onSetIsVisible, onHandleitem, onHandleAddItem }: ModalProps) {

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
                        onChange={onHandleitem}
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
                        onChange={onHandleitem}
                        value={item.name}
                    />
                </label>
                <button
                    onClick={() => {
                        onSetIsVisible(false)
                        item.avatar.length > 10 && item.name.length >= 4 ? onHandleAddItem() : alert('preenxar os campos corretamente')
                    }}
                >
                    save
                </button>
                <button
                    onClick={() => {
                        onSetIsVisible(false)
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
                onClick={() => onSetIsVisible(true)}
            >
                addc
            </button>
        </div>
    )
}