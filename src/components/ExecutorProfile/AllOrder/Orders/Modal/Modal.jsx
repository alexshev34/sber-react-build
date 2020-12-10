import React from 'react';
import s from './Modal.module.css'

const Modal = () => {
    return (
        <div className={s.modal}>
            <div className={s.modal__content}>
                <p>Test</p>
            </div>
        </div>
    )
}

export default Modal;