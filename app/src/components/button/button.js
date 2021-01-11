import React from "react";

import "./button.style.scss"

const Button = ({children, onClick = null}) => {
    return (
        <button
            onClick={(evt) => onClick(evt)}
            className="Button"
        >
            {children}
        </button>
    )
}

export default Button
