import React from 'react';
import s from './Arbitration.module.css';
import '../../../css/main.css';
import '../../../css/normalizee.css';

const Arbitration = () => {
    return(
        <section className={s.application}>
            <h2 className={s.application__title}>Заявка в Арбитраж</h2>
            <div className={s.application__container}>
                <form action="#" className={s.application__form}>
                    <select className={s.application__select}>
                        <option disabled>Выбор заказа</option>
                    </select>
                    <textarea className={s.application__description} placeholder="Описание проблемы"></textarea>
                    <input className={s.application__button} type="submit" name="" value="Создать новый заказ"/>
                </form>
            </div>
	    </section>
    );
}

export default Arbitration;