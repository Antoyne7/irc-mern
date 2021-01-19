import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import "./modal.style.scss"

const Modal = ({ children }) => {
    const modalContainer = document.querySelector(".modal-container")
    const el = document.createElement("div")
    el.classList = `modal`

    useEffect(() => {
        modalContainer.appendChild(el)
        modalContainer.classList.add("active")

        return () => {
            modalContainer.removeChild(el)
            modalContainer.classList.remove("active")
        }
    })

    return ReactDOM.createPortal(
        children,
        el
    )
}

export default Modal
