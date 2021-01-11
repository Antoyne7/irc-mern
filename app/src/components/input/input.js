import React from "react";

import "./input.style.scss"

const Input = ({value, placeholder = "", name}) => {

    return (
        <>
            <input
                className="Input"
                type="text"
                defaultValue={value}
                placeholder={placeholder}
                name={name}
            />
        </>
    )
}

export default Input
