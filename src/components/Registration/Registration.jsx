import React from 'react';
import s from './Registration.module.css';
import '../../css/main.css';
import { useState } from 'react';
import { useHttp } from '../../hooks/http.hook2';

const Registration = () => {
    const {loading, request} = useHttp()
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        login: '',
        telephoneNumber: '',
        email: '',
        password: '',
        dateOfBirth: ''
    })


    const registerHandler = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmitExecutor = async (e) => {
        try {
            e.preventDefault();
            const data = await request ('http://79.174.13.220:8080/users/sign-up-specialist', 'POST', { ...values }) //данные которые передаются с сервера
        }
        catch (e) {

        }
    }
    const handleSubmitCustomer= async (e) => {
        try {
            e.preventDefault();
            const data = await request ('http://79.174.13.220:8080/users/sign-up-client', 'POST', { ...values }) //данные которые передаются с сервера
        }
        catch (e) {

        }
    }

    return (
        <>
            <section className={s.registration}>
                <div className={s.registration__container}>
                    <h2 className={s.registration__title}>Быстрая регистрация</h2>
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
            </section>
            <section className={s.mail}>
                <div className={s.mail__container}>
                    <h2 className={s.mail__title}>Регистрация через почту</h2>
                    <form className={s.mail__form}>
                        <input className={s.mail__input} type="text" id="login" name="login" value={values.login} onChange={registerHandler} placeholder="Логин" />
                        <input className={s.mail__input} type="text" id="firstname" name="firstname" value={values.firstname} onChange={registerHandler} placeholder="Имя" />
                        <input className={s.mail__input} type="text" id="lastname" name="lastname" value={values.lastname} onChange={registerHandler} placeholder="Фамилия" />
                        <input className={s.mail__input} type="email" id="email" name="email" value={values.email} onChange={registerHandler} placeholder="e-mail" />
                        <input className={s.mail__input} type="text" id="telephoneNumber" name="telephoneNumber" value={values.telephoneNumber} onChange={registerHandler} placeholder="Телефон" />
                        <input className={s.mail__input} type="text" id="dateOfBirth" name="dateOfBirth" value={values.dateOfBirth} onChange={registerHandler} placeholder="Дата Рождения" />
                        {/* <input className={s.mail__input} type="text" id="country" name="country" value={values.country} onChange={registerHandler} placeholder="Страна:" />
                        <input className={s.mail__input} type="text" id="city" name="city" value={values.city} onChange={registerHandler} placeholder="Город:" /> */}
                        <input className={s.mail__input} type="password" id="password" name="password" value={values.password} onChange={registerHandler} placeholder="Пароль:" />
                        {/* <input className={s.mail__input} type="password" id="password2" name="password2" value={values.password2} onChange={registerHandler} placeholder="Повторить пароль:" /> */}
                        <div>
                            <input className={s.mail__check} type="checkbox" />
                            <label>Получать уведомления о заказах на электронную почту</label>
                        </div>
                        <button className={s.mail__button} type="submit" onClick={handleSubmitExecutor}>Зарегистрироваться как Исполнитель</button>
                        <button className={s.mail__button2} type="submit" onClick={handleSubmitCustomer}>Зарегистрироваться как Заказчик</button>
                    </form>
                    <p className={s.mail__info}>Нажимая кнопку «Зарегистрироваться», я соглашаюсь с правилами сайта<br /> и даю согласие на обработку персональных данных</p>
                </div>
            </section>
        </>
    );
}

export default Registration;

