import React from 'react';
import s from './SpecialistProfile.module.css';
import '../../css/main.css';
import '../../css/normalizee.css';
import { NavLink } from 'react-router-dom';

const SpecialistProfile = () => {
    return(
        <section className={s.executor}>
            <div className={s.executor__container}>
                <div className={s.executor__box}>
                    <div className={s.executor__img}>
                        <img src="https://s8.hostingkartinok.com/uploads/images/2020/10/33b1bcb4f934e8c25263ee7cf967695a.png" alt=""/>
                        <div className={s.executor__state}>онлайн</div>
                    </div>
                    <div className={s.executor__info}>
                        <p className={s.executor__user}>Имя Фамилия</p>
                        <p className={s.executor__status}>Статус: <span>Начинающий</span></p>
                        <p className={s.executor__rating}>Рейтинг: <span>75</span></p>
                        <p className={s.executor__city}>Город: <span>Екатеринбург</span></p>
                        <p className={s.executor__registration}>Зарегистрирован на сайте: <span>3 месяца</span></p>
                        <p className={s.executor__done}>Выполненных заказов: <span>5</span></p>
                        <p className={s.executor__rewiews}>Отзывы: <span>2</span>|<span>1</span>|<span>0</span></p>
                    </div>
                </div>
                <div className={s.history}>
                    <h2 className={s.history__title}>Информация обо мне</h2>
                        <div className={s.history__block}>
                            <p className={s.history__age}>Возраст: <span>25 лет</span> </p>
                            <p className={s.history__country}>Страна: <span>Россия</span> </p>
                            <p className={s.history__info}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, eos. Fugiat, aspernatur praesentium earum ducimus, exercitationem velit culpa doloremque fugit voluptate nesciunt consequuntur necessitatibus dicta similique rerum non modi laborum.
                            Similique veritatis deleniti atque molestias, impedit, facilis pariatur magnam veniam consequatur aperiam. Sit dolorum, aperiam nam dignissimos, saepe nemo quis earum officia odit ea numquam quia exercitationem sapiente. Alias, praesentium?</p>
                        </div>
                    <div className={s.history__wrapper}>
                        <div className={s.history__column}>
                            <p className={s['history__my-services']}>Мои услуги:</p>
                            <ul className={s.history__list}>
                                <li className={s.history__item}>Первая специальность из списка</li>
                                <li className={s.history__item}>Вторая специальность из списка</li>
                                <li className={s.history__item}>Третья специальность из списка</li>
                                <li className={s.history__item}>Четвертая специальность из списка</li>
                            </ul>
                        </div>
                        <div className={s.history__column}>
                            <p className={s.history__statistics}>Статистика выполнения заказанных работ:</p>
                            <p className={s.history__term}>В срок: <span>2</span> <span>(66%)</span></p>
                            <p className={s.history__late}>С опозданием: <span>1</span> <span>(33%)</span></p>
                            <p className={s['history__not-done']}>Не выполнено: <span>0</span> <span>(0%)</span></p>
                            <p className={s.history__arbitration}>В арбитраже: <span>0</span> <span>(0%)</span> </p>
                        </div>
                    </div>
                    <div className={s.history__education}>
                        <p className={s['history__my-education']}>Мое образование:</p>
                        <p className={s['history__my-info']}>Квалификация: бакалавр, специальность: прикладная информатика, уч. заведение: УрФУ</p>
                    </div>
                    <div className={s.history__btn, s.history__right}>
                        <NavLink to="/portfolio" className={s.history__portfolio}>Портфолио</NavLink>
                    </div>
                    <div className={s.history__btn}>
                        <a href="#" className={s.history__recommend}>Рекомендованные мной</a>
                    </div>
                    <div className={s.reviews}></div>
                </div>
            </div>
	    </section>
    )
}

export default SpecialistProfile;