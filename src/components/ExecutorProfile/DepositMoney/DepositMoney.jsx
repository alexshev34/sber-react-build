import React from 'react';
import s from './DepositMoney.module.css';
import '../../../css/main.css';
import '../../../css/normalize.css';

const DepositMoney = () => {
    return(
        <section className={s.money}>
            <div className={s.money__container}>
                <form className={s.money__form}>
                    <h2 className={s.money__title}>Пополнить баланс</h2>
                    <input className={s.money__sum} type="text" placeholder="Введите сумму:"/>
                    <p className={s.money__way}>Выберите способ пополнения</p>
                    <input className={s.money__radio} type="radio" name=""/>
                    <label className={s.money__label}>Банковская карта</label><br/>
                    <div className={s.money__card}>
                        <p className={s['money__card-column']}>Visa, MasterCard, МИР</p>
                        <p className={s['money__card-comission']}>Комиссия: 2.5%</p>
                    </div>
                    <input className={s.money__radio} type="radio" name=""/>
                    <label className={s.money__label}>Электронные деньги</label><br/>
                    <div className={s.money__card}>
                        <p className={s['money__card-column']}>Яндекс Деньги</p>
                        <p className={s['money__card-comission']}>Комиссия: 2.5%</p>
                    </div>
                    <button className={s.money__submit} type="submit">Пополнить счет</button>
                </form>
            </div>
	    </section>
    );
}

export default DepositMoney;