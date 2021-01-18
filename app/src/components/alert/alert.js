import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import "./alert.style.scss"

const Alert = ({ children, type }) => {
    const alertsContainer = document.querySelector(".alerts")
    const el = document.createElement("div")
    el.classList = `alert ${type}`

    useEffect(() => {
        alertsContainer.appendChild(el)

        return () => {
            alertsContainer.removeChild(el)
        }
    })

    const renderChildren = () => {
        return (
            <>
                <h6>{type === "error" ? "Erreur..." : "Super !"}</h6>
                <div>{children}</div>
            </>
        )
    }

    return ReactDOM.createPortal(
        children,
        el
    )
}

export default Alert
