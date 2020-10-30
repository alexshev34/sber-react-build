import React from 'react';
import s from './HistoryMoney.module.css';
import '../../../css/main.css';
import '../../../css/normalizee.css';


const HistoryMoney = () => {
    return(
        <section className={s.money}>
            <div className={s.money__container}>
                <div className={s.money__wrapper}>
                    <div className={s.money__balance}>
                        <a href="#" className={s.balance__link}>пополнить баланс</a>
                    </div>
                    <div className={s.money__withdraw}>
                        <a href="#" className={s.withdraw__link}>вывести деньги</a>
                    </div>
                </div>
                <div className={s.money__title}>История операций</div>
                <form action="#" className={s.money__form}>
                    <select className={s.money__select} name="" id="" placeholder="Все операции:">
                        <option value="Все операции"></option>
                    </select>
                    <input className={s.money__date} type="date"/>
                    <button className={s.money__button} type="submit">Показать</button>
                </form>
            </div>
	    </section>
    )
}

export default HistoryMoney;