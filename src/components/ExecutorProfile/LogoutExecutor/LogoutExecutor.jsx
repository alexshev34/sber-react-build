import React from 'react';
import s from './LogoutExecutor.module.css';

const LogoutExecutor = () => {

	const logouthandler = () =>{
		localStorage.clear();
		document.location.href="http://localhost:3000/";
	}
    return(
    <section className={s.form}>
		<form action="#" className={s.form__authorization}>
			<button className={s.form__login}>Войти как исполнитель</button>
			<button className={s.form__logout} onClick={logouthandler}>Выход</button>
		</form>
	</section>
    );
}

export default LogoutExecutor;