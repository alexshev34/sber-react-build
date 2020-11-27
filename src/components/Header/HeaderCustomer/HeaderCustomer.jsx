import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './HeaderCustomer.module.css';


class HeaderCustomer extends Component {

 
    constructor(props) {
        super(props);
    
        this.state = {
          isOpened: false
        };
      }

      toggleState(){
        this.setState({isOpened: !this.state.isOpened});
      }

    render(){
      let dropdownText;
      if (this.state.isOpened) {
        dropdownText = <ul className={s.header__dropdown}>
        <li className={s.header__item}><NavLink to="/profile">Мой профиль</NavLink></li>
        <li className={s.header__item}><NavLink to="/my-history">История операций</NavLink></li>
        <li className={s.header__item}><NavLink to="/settings">Настройки аккаунта</NavLink></li>
        <li className={s.header__item}><NavLink to="/my-reviews">Мои отзывы</NavLink></li>
        <li className={s.header__item}><NavLink to="/payout-money">Вывод средств</NavLink></li>
        <li className={s.header__item}><NavLink to="/arbitration">Заявка в арбитраж</NavLink></li>
        <li className={s.header__item}><NavLink to="/all-order">Все заказы</NavLink></li>
        </ul>;
      }
    return(
        <header className={s.header}>
            <div className={s.header__container}>
                <div className={s.header__wrapper}>
                    <div className={s.logo}><NavLink to="/profile">YOUR<br/> <span>Services</span></NavLink></div>
                    <nav className={s['site-navigation']}>
                        <ul className={s['site-navigation__list']}>
                            <li className={s['site-navigation__item']}>
                                <NavLink to="/message"  className={s['site-navigation__link']}>Сообщения</NavLink>
                            </li>
                            <li className={s['site-navigation__item']}>
                                <NavLink to="/my-orders" className={s['site-navigation__link']}>Мои заказы</NavLink>
                            </li>
                            <li className={s['site-navigation__item']}>
                                <a className={s['site-navigation__link']}>Разместить объявление</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={s['header-authorization']}>
                        <NavLink to="/logout" className={s.logout}>Выход</NavLink>
                        <button className={s['specialist-info']} onClick={this.toggleState.bind(this)}>Исполнитель
                        </button>
                        {dropdownText}  
                    </div>
                </div>
            </div>
        </header>
    );
    }
}

export default HeaderCustomer;