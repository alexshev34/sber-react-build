import React, { useState } from 'react';
import s from './AddOrder.module.css';
import '../../../css/main.css';
import '../../../css/normalize.css';
import { useHttp } from '../../../hooks/http.hook2';


const AddOrder = () => {
    const {loading, request} = useHttp()
    const [values, setValues] = useState({
        selectOrder: '',
        nameOrder: '',
        descriptionOrder: '',
        costOrder: '',
        colDay: ''
    })

    const orderHandler = e => {
        setValues({ ...values, [e.target.name]: e.target.value})
    }

    const handleOrderExecutor = async () => {
        try{

        }
        catch (e) {}
    }
    return(
        <section className={s.form}>
            <div className={s.container}>
                <p className={s.form__title}>Создать новый заказ</p>
                <div className={s.container__form}>
                    <form className={s.feedback}>
                        <select value={values.selectOrder} onChange={orderHandler} className={s.form__select}>
                            <option disabled>Выбор услуги</option>
                            <option value="Аренда">Аренда</option>
                            <option value="Ремонт и строительство">Ремонт и строительство</option>
                            <option value="Ремонт и установка техники">Ремонт и установка техники</option>
                            <option value="Ремонт авто">Ремонт авто</option>
                            <option value="Репетиторы и обучение">Репетиторы и обучение</option>
                            <option value="Красота">Красота</option>
                            <option value="Перевозки и курьеры">Перевозки и курьеры</option>
                            <option value="Хозяйство и уборка">Хозяйство и уборка</option>
                            <option value="Компьютеры и IT">Компьютеры и IT</option>
                            <option value="Дизайнеры">Дизайнеры</option>
                            <option value="Юристы">Юристы</option>
                            <option value="Тренеры">Тренеры</option>
                        </select>
                        <input className={s.form__order} type="text" name="order" value={values.nameOrder} onChange={orderHandler} placeholder="Название заказа:"/>
                        <textarea className={s.form__info} name="description" value={values.descriptionOrder} onChange={orderHandler} placeholder="Описание заказа:"></textarea>
                        <input className={s.form__cost} type="text" name="cost" value={values.costOrder} onChange={orderHandler} placeholder="Стоимость заказа*"/>
                        <input className={s.form__day} type="text" name="day" value={values.colDay} onChange={orderHandler} placeholder="Количество дней на исполнение:"/>
                        <button className={s.form__submit} type="submit" onClick={handleOrderExecutor}>Создать новый заказ</button>
                    </form>
                </div>
            </div>
	    </section>
    );
}

export default AddOrder;