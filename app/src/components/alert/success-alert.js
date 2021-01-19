import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Modal from '../modal/modal'

import "./success-alert.style.scss"

const SuccessAlert = ({message, onClose}) => {
    return (
        <Modal>
            <button className="close-button" onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} color={"var(--primary)"} />
            </button>
            <div className="success-checkmark">
                <div className="wrapper">
                    <div className="check-icon">
                        <span className="icon-line line-tip" />
                        <span className="icon-line line-long" />
                        <div className="icon-circle"></div>
                        <div className="icon-fix"></div>
                    </div>
                </div>
            </div>
            <h3 className="msg">{message}</h3>
        </Modal>
    )
}

export default SuccessAlert
