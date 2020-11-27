import React from 'react';
import s from './SettingsExecutorProfile.module.css';
import '../../../css/main.css';
import '../../../css/normalizee.css';

const SettingsExecutorProfile = () => {
    return(
        <>
            <section className={s.profile}>
                <div className={s.profile__container}>
                    <p className={s.profile__title}>Общие настройки профиля</p>
                    <p className={s.profile__text}>Для того чтобы отображаться в списке как исполнитель и выполнять заказы, заполните форму перейдя по ссылке внизу страницы "Добавить меня как исполнителя"</p>
                    <form action="#" className={s.profile__form}>
                        <div className={s['profile__box-photo']}>
                            <img src="https://s8.hostingkartinok.com/uploads/images/2020/11/85affced5d4d610ba866c114fe756637.png" alt=""/>
                            <input className={s.profile__input} type="file" id="profile"/>
                            <label className={s.profile__label} for="profile">Изменить фото</label>
                        </div>
                        <div className={s.info}>
                            <h2 className={s.info__title}>Основная информация</h2>
                            <div className={s.info__form}>
                                <input className={s.info__input} type="text" placeholder="Имя:"/>
                                <input className={s.info__input} type="text" placeholder="Отчество:"/>
                                <input className={s.info__input} type="text" placeholder="Фамилия:"/>
                                <input className={s.info__input} type="date" placeholder="Дата Рождения:"/>
                                <input className={s.info__input} type="text" placeholder="e-mail:"/>
                                <input className={s.info__input} type="text" placeholder="Телефон:"/>
                                <input className={s.info__input} type="text" placeholder="Страна:"/>
                                <input className={s.info__input} type="text" placeholder="Город:"/>
                                <div>
                                    <input className={s.info__check} type="checkbox"/>
                                    <label>Получать уведомления о заказах на электронную почту</label>
                                </div>
                            </div>
                        </div>
                        <div className={s.registration}>
                            <h2 className={s.registration__title}>Привязка социальных сетей:</h2>
                            <ul className={s.registration__list}>
                                <li className={s.registration__item}>
                                    <a className={s.registration__link} href="#">ВКонтакте</a>
                                </li>
                                <li className={s.registration__item}>
                                    <a className={s.registration__link} href="#">Facebook</a>
                                </li>
                                <li className={s.registration__item}>
                                    <a className={s.registration__link, s.registration__od} href="#">Одноклассники</a>
                                </li>
                                <li className={s.registration__item}>
                                    <a className={s.registration__link} href="#">Google</a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.payment}>
                            <p className={s.payment__title}>Платежная информация:</p>
                            <input className={s.payment__file} type="file" id="payment"/>
                            <label className={s.payment__label} for="payment">Привязать карту</label>
                        </div>
                        <button className={s.profile__button}>Сохранить изменения</button>
                    </form>
                </div>
	        </section>
            <section className={s.edit}>
                <button className={s.edit__button}>Добавить меня как исполнитель</button>
                <button className={s.edit__remove}>Удалить мой профиль</button>
            </section>
        </>
    );
}

export default SettingsExecutorProfile;