import { ModalProps } from "../../types"
import { useValue } from "../../hooks"

import S from './index.module.css'


export function Modal({
    isVisible,
    onSetIsVisible,
    errors,
    formSubmit,
    handleSubmit,
    register
}: ModalProps
) {

    // const {
    //     register,
    //     formSubmit,
    //     errors,
    //     handleSubmit
    // } = useValue()

    if (isVisible) {
        return (
            <form onSubmit={handleSubmit(formSubmit)}
                className={S.conteiner}
            >

                <label htmlFor="avatar" >
                    Link da imagen
                    <input
                        type="text"
                        id="avatar"

                        // name="avatar"
                        placeholder="link da imagen"
                        {...register('avatar')}
                    // onChange={onHandleitem}
                    // value={item.avatar}
                    />
                </label>

                <label htmlFor="name">
                    Nome da image
                    <input
                        type="text"
                        placeholder="nome da coleção"
                        id="name"
                        // name="name"
                        // onChange={onHandleitem}
                        // value={item.name}
                        {...register('name')}
                    />
                </label>
                <button
                    // onClick={() => {
                    //     onSetIsVisible(false)
                    //     item.avatar.length > 10 && item.name.length >= 4 ? onHandleAddItem() : alert('preenxar os campos corretamente')
                    // }}
                    type="submit"
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
            </form>
        )
    }
    // return (
    //     <div>
    //         <button
    //             onClick={() => onSetIsVisible(true)}
    //         >
    //             addc
    //         </button>
    //     </div>
    // )
}