import axios from 'axios'
import React, { useEffect, useState } from 'react'
import authHeader from '../../services/auth-header'
import AuthService from '../../services/auth.service'
import param from '../../services/param'

import "./theme-toggle-button.style.scss"

const ThemeToggleButton = () => {
    const user = AuthService.getCurrentUser()

    const [isWhiteTheme, setIsWhiteTheme] = useState((user.whiteTheme == 'true'))

    useEffect(() => {
        if (isWhiteTheme) {
            document.querySelector('.App').classList.add('white-theme')
        } else {
            document.querySelector('.App').classList.remove('white-theme')
        }
        localStorage.setItem("white-theme", isWhiteTheme)
        axios.get(param.user.theme + isWhiteTheme, { headers: authHeader()})
    }, [isWhiteTheme])

    return (
        <div className="theme-toggle-button">
            <input
                onChange={() => setIsWhiteTheme(!isWhiteTheme)}
                checked={isWhiteTheme}
                type="checkbox"
                id="toggle"
            />
            <label htmlFor="toggle" />
        </div>
    )
}

export default ThemeToggleButton
