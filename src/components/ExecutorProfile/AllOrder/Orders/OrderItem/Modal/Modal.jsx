import React from 'react';
import s from './Modal.module.css'

const Modal = () => {
    return (
        <div className={s.modal}>
            <div className={s.modal__content}>
                <p className={s.modal__title}>Заявка на участие в конкурсе</p>
                <form>
                    <textarea type="text" placeholder="Сообщение для заказчика"/>
                    <input type="text" placeholder="Предложить цену"/>
                    <button className={s.modal__button} type="submit">Отправить заявку</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;