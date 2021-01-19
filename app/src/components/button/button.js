import React from "react";

import "./button.style.scss"

const BUTTON_THEMES = [
    "primary",
    "secondary",
    "danger"
]


const Button = ({children, onClick = null, borderOnly = false, theme = "primary"}) => {

    const handleClick = (evt) => {
        if (onClick) {
            onClick(evt)
        }
    };

    return (
        <button
            onClick={(evt) => handleClick(evt)}
            className={`Button ${borderOnly ? "border-only" : ""} ${theme}`}
        >
            {children}
        </button>
    )
}

export default Button
