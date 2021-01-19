import React, { useEffect, useState } from 'react'

import "./theme-toggle-button.style.scss"

const ThemeToggleButton = () => {
    const whiteTheme = localStorage.getItem('white-theme')

    const [isWhiteTheme, setIsWhiteTheme] = useState((whiteTheme == 'true'))

    useEffect(() => {
        if (isWhiteTheme) {
            document.querySelector('.App').classList.add('white-theme')
        } else {
            document.querySelector('.App').classList.remove('white-theme')
        }
        localStorage.setItem("white-theme", isWhiteTheme)
    }, [isWhiteTheme])


    return (
        <div className="theme-toggle-button">
            <input
                onChange={() => setIsWhiteTheme(!isWhiteTheme)}
                checked={isWhiteTheme}
                type="checkbox"
                id="toggle"
            />
            <label for="toggle"></label>
        </div>
    )
}

export default ThemeToggleButton
