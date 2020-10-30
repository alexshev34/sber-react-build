import React from 'react';
import s from './PayoutMoney.module.css';
import '../../../css/main.css';
import '../../../css/normalizee.css';

const PayoutMoney = () => {
    return(
        <section className={s.withdrawal}>
            <h2 className={s.withdrawal__title}>Вывести средства</h2>
            <div className={s.withdrawal__container}>
                <form action="#" className={s.withdrawal__form}>
                    <input className={s.withdrawal__sum} type="text" placeholder="Введите сумму:"/>
                    <p className={s.withdrawal__variant}>Выберите способ вывода денежных средств</p>
                    <input className={s.withdrawal__radio} type="radio" name=""/>
                    <label className={s.withdrawal__label}>Банковская карта</label><br/>
                    <div className={s.withdrawal__card}>
                        <p className={s['withdrawal__card-column']}>Visa, MasterCard, МИР</p>
                        <p className={s['withdrawal__card-comission']}>Комиссия: 2.5%</p>
                    </div>
                    <input className={s.withdrawal__radio} type="radio" name=""/>
                    <label className={s.withdrawal__label}>Электронные деньги</label><br/>
                    <div className={s.withdrawal__card}>
                        <p className={s['withdrawal__card-column']}>Яндекс Деньги</p>
                        <p className={s['withdrawal__card-comission']}>Комиссия: 2.5%</p>
                    </div>
                    <button className={s.withdrawal__submit} type="submit">Вывести средства</button>
                </form>
            </div>
	</section>
    )
}

export default PayoutMoney;