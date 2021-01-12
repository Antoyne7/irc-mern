import React from "react";

import "./button.style.scss"

const BUTTON_THEMES = [
    "primary",
    "secondary"
]

const Button = ({children, onClick = null, theme = "primary"}) => {
    return (
        <button
            onClick={(evt) => onClick(evt)}
            className={"Button " + theme}
        >
            {children}
        </button>
    )
}

export default Button
