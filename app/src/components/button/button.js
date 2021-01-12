import React from "react";

import "./button.style.scss"


const Button = ({children, onClick = null, borderOnly = false}) => {

    const handleClick = (evt) => {
        if (onClick){
            onClick(evt)
        }
    };

    return (
        <button
            onClick={(evt) => handleClick(evt)}
            className={`Button ${borderOnly ? "border-only" : ""}`}
        >
            {children}
        </button>
    )
}

export default Button
