import { ModalProps } from "../../types"



export function Modal({ isVisible, item, setIsVisible, handleitem, handleAddItem }: ModalProps) {

    if (isVisible) {
        return (
            <>
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
            </>
        )
    }
    return (
        <>
            <button
                onClick={() => setIsVisible(true)}
            >
                addc
            </button>
        </>
    )
}