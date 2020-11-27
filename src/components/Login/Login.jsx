import React from "react";
import './Login.css';
import '../../css/main.css';
import { useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useHttp2 } from "../../hooks/http.hookExecutor";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";




const Login = () => {
  const auth = useContext(AuthContext)
  const { loading, request} = useHttp()
  const { loading2, request2} = useHttp2()
  const [form, setForm] = useState({
    login: '',
    password: ''
  })

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const loginHandlerCustomer = async () => {

    try {
      const data = await request('http://79.174.13.220:8080/login', 'POST', { ...form }) //данные которые передаются с сервера
    }
    catch (e) {

    }
  }

  const loginHandlerExecutor = async () => {

    try {
      const data = await request2('http://79.174.13.220:8080/login', 'POST', { ...form }) //данные которые передаются с сервера
    }
    catch (e) {

    }

  }


  return (
    <>
      <section className="authorization">
        <div className="authorization__container">
          <h2 className="authorization__title">Быстрый вход</h2>
          <ul className="authorization__list">
            <li className="authorization__item">
              <a className="authorization__link" href="#">ВКонтакте</a>
            </li>
            <li className="authorization__item">
              <a className="authorization__link" href="#">Facebook</a>
            </li>
            <li className="authorization__item">
              <a className="authorization__link authorization__od" href="#">Одноклассники</a>
            </li>
            <li className="authorization__item">
              <a className="authorization__link" href="#">Google</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="login">
        <div className="login__container">
          <p className="login__title">Войти:</p>
          <form className="login__form">
            <input className="login__input"
              id="login"
              type="text"
              name="login"
              placeholder="e-mail"
              onChange={changeHandler}
              disabled={loading} />
            <input className="login__input"
              id="password"
              type="password"
              name="password"
              placeholder="Пароль:"
              onChange={changeHandler}
              disabled={loading} />
            <div>
              <input type="checkbox" />
              <label className="login__label">Запомнить меня</label>
            </div>
            <button className="login__button login__btn-1"
              type="submit" disabled={loading} onClick={loginHandlerCustomer}
            >Войти как исполнитель</button>
            <button className="login__button login__btn-2"
              type="submit" disabled={loading2} onClick={loginHandlerExecutor}
            >Войти как заказчик</button>
          </form>
          <ul className="login__list">
            <li className="login__item">
              <a className="login__link" href="#">Восстановить пароль</a>
            </li>
            <li className="login__item">
              <a className="login__link" href="#">Регистрация</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Login;