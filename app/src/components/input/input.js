import React from "react";

import "./input.style.scss"

const Input = ({value, placeholder = "", name, type = "text", onChange = null}) => {
    return (
        <input
            className="Input"
            type={type}
            defaultValue={value}
            placeholder={placeholder}
            name={name}
            onChange={(evt) => onChange(evt)}
        />
    )
}

export default Input
