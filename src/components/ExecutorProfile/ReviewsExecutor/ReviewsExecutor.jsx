import React from 'react';
import s from './ReviewsExecutor.module.css';
import '../../../css/main.css';
import '../../../css/normalize.css';

const ReviewsExecutor = () => {
    return(
        <>
            <section className={s.orders}>
                <div className={s.orders__container}>
                    <h2 className={s.orders__title}>Мои отзывы</h2>
                    <form className={s.orders__form}>
                        <div className={s.orders__flex}>
                            <input className={s.orders__input} type="text" placeholder="Поиск заказа"/>
                            <button className={s.orders__button} type="submit">Найти</button>
                        </div>
                        <input className={s.orders__check} type="checkbox"/>
                        <label for="">Поиск по имени заказчика</label>
                    </form>
                    <ul className={s.orders__menu}>
                        <li className={s.orders__item}>
                            <a className={s.orders__link} href="#">Все отзывы</a>
                        </li>
                        <li className={s.orders__item}>
                            <a className={s.orders__link} href="#">Положительные</a>
                        </li>
                        <li className={s.orders__item}>
                            <a className={s.orders__link} href="#">Нейтральные</a>
                        </li>
                        <li className={s.orders__item}>
                            <a className={s.orders__link} href="#">Отрицательные</a>
                        </li>
                    </ul>
                </div>
	        </section>
            <section className={s.execution}>
                <div className={s.execution__container}>
                    <div className={s.execution__box}>
                        <div className={s.execution__info}>
                            <div className={s.execution__list}>
                                <p className={s.execution__services}>Услуга: перевод</p>
                                <p className={s.execution__services}>Срок исполнения: до 30.09.2020</p>
                                <p className={s.execution__services}>Стоимость: 500 руб</p>
                            </div>
                            <p className={s.execution__name}>Название: <span>Перевод текста с английского</span></p>
                            <div className={s.execution__description}>Кратное описание задания Lorem ipsum do lor sit amet, consectetur</div>
                            <p className={s.execution__user}>Исполнитель: <a href="#" className={s.execution__link}>Иванов Иван</a> <img src="https://s8.hostingkartinok.com/uploads/images/2020/11/6ef562d4767cba575a5ac931c26e6bdb.png" alt=""/></p>
                        </div>
                        <div className={s.execution__info}>
                            <img className={s.execution__img} src="https://s8.hostingkartinok.com/uploads/images/2020/11/85d2f6c7f04a5663569a778f9a000f43.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ReviewsExecutor;