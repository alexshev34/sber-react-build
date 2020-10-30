import React from 'react';
import s from './PortfolioEdit.module.css';
import '../../../../css/main.css'
import '../../../../css/normalizee.css';


const PortfolioEdit = () => {
    return(
        <section className={s.portfolio}>
            <h2 className={s.portfolio__title}>Загрузка работы в портфолио</h2>
            <form action="#" className={s.portfolio__form}>
                <input className={s.portfolio__name} type="text" placeholder="Название работы:"/>
                <textarea className={s.portfolio__description} name="" id="" placeholder="Описание работы:"></textarea>
                <input className={s.portfolio__file} type="file" name="" id="file"/>
                <label className={s.portfolio__label} for="file">Добавить файл</label>
                <button className={s.portfolio__button} type="submit">Создать новый заказ</button>
            </form>
	    </section>
    );
}

export default PortfolioEdit;
