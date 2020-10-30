import React from 'react';
import s from './SpecialistPortfolio.module.css';
import '../../../css/main.css';
import '../../../css/normalizee.css';
import { NavLink } from 'react-router-dom';

const SpecialistPortfolio = () => {
    return(
        <section className={s.portfolio}>
            <div className={s.portfolio__container}>
                <h2 className={s.portfolio__title}>Мое портфолио</h2>
                <div className={s.portfolio__link}>
                    <NavLink to="/portfolio-add" className={s.portfolio__button}>Добавить работу</NavLink>
                </div>
                <div className={s.portfolio__wrapper}>
                    <div className={s.portfolio__box}>
                        <div className={s.portfolio__column}>
                            <img className={s.portfolio__img} src="https://s8.hostingkartinok.com/uploads/images/2020/10/80e7448632f6586e7b4c6bbdc975eab4.png" alt="" width="375" height="233"/>
                            <div className={s.portfolio__text}>
                                <div className={s.portfolio__block}>
                                    <p className={s.portfolio__info}>доставка до двери</p>
                                    <p className={s.portfolio__description}>Описание сути выполненных работ Lorem ipsum dolor sit amet</p>
                                </div>
                                    <button className={s.portfolio__edit, s.portfolio__edit-1}>редактировать</button>
                                    <button className={s.portfolio__edit}>удалить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	    </section>
    );
}

export default SpecialistPortfolio;