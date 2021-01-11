import React from "react"
import "./pictures.styles.scss"

const picture = (props) => {
    return (
        <div style={{width: props.size, height: props.size}} className="pfp">
            {/*<span className="placeholder">D</span>*/}
        </div>
    )
};
export default picture;