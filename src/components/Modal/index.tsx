import { ModalProps } from "../../types"

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
                        placeholder="link da imagen"
                        {...register('avatar')}
                    
                    />
                    {errors.avatar?.message ? <p>{errors.avatar.message}</p> : ''}
                </label>

                <label htmlFor="name">
                    Nome da image
                    <input
                        type="text"
                        placeholder="nome da coleção"
                        id="name"
                        {...register('name')}
                    />
                    {errors.name?.message ? <p>{errors.name.message}</p> : ''}

                </label>
                <button
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
}