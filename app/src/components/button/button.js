import React from "react";

import "./button.style.scss"

const Button = ({children}) => {
    return (
        <button className="Button">
            {children}
        </button>
    )
}

export default Button
