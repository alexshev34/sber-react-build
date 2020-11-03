import React, { Component } from "react";
import './Login.css';
import '../../css/main.css';
import useRoutes from "../../routes";
import { useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";



const Login = () => {
const auth = useContext(AuthContext)
const {loading, request} = useHttp()
const [form, setForm] = useState({
  email: '',
  password: ''
})

const changeHandler = event => {
  setForm({...form, [event.target.name]: event.target.value})
}
//осуществление запроса на сервер

// const registerHandler = async () => {
//   try{
//     const data = await request ('/api/auth/register', 'POST', {...form}) //данные которые передаются с сервера
//   }
//  catch (e) {

//  }
// }
const loginHandler = async () => {
  try{
    const data = await request ('/api/auth/register', 'POST', {...form}) //данные которые передаются с сервера
    auth.login(data.token, data.userId)
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
              id="email"
              type="email"
              name="email"
              placeholder="e-mail"
              onChange={changeHandler}
              disabled={loading}/>
            <input className="login__input"
              id="password"
              type="password"
              name="password"
              placeholder="Пароль:"
              onChange={changeHandler}
              disabled={loading}/>
            <div>
              <input type="checkbox" />
              <label className="login__label">Запомнить меня</label>
            </div>
            <button className="login__button login__btn-1"
              type="submit" disabled={loading} onClick={loginHandler}
            >Войти как заказчик</button>
            <button onCLick={useRoutes(true)} className="login__button login__btn-2">Войти как исполнитель</button>
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