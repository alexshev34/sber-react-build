import React from 'react';
import s from './AllOrder.module.css';
import '../../../css/main.css';
import '../../../css/normalize.css';
import f from '../../../css/base.module.css';

const AllOrder = () =>{

return(
    <>
        <section className={s.orders}>
            <div className={s.orders__container}>
                <h1 className={s.orders__title}>Все заказы</h1>
                <form  className={s.orders__form}>
                
                <input className={s.orders__input} type="date" placeholder="Срок до:" data-toggle="tooltip" title="" data-original-title="Срок до:"/>
                                    
                <input className={s.orders__input} type="text" placeholder="Стоимость от:" data-toggle="tooltip" title="" data-original-title="Только цифры"/>
                
                <input className={s.orders__input} type="text" placeholder="Стоимость до:" data-toggle="tooltip" title="" data-original-title="Только цифры"/>
                
                    <select name="" id="" className={s.orders__region}>
                        <option value="" required>Регион</option>
                    </select>
                    <select name="" id="" className={s.orders__city}>
                        <option value="" required>Мой город</option>
                    </select>
                    <select name="" id="" className={s.orders__service}>
                        <option value="" required>Услуга</option>
                    </select>
                    
                    
                    <input className={f.submit} type="submit" value="Найти"/>
                    <br/>
                    <div className={s.orders__label}>
                    </div>
                </form>
            </div>
        </section>
		<section className={s.execution}>
            <div className={s.execution__container}>
                <div className={s.execution__box, f.row, s.platnoe}>
                    <div className={s.execution__info}>
                        <div className={s.execution__list}>
                            <p className={s.execution__services}>Услуга: перевод</p>
                            <p className={s.execution__services}>Срок исполнения: до 30.09.2020</p>
                            <p className={s.execution__services}>Стоимость: 500 руб</p>
                        </div>
                        <a href="#"><p className={s.execution__name}>Название: <span>Перевод текста с английского</span></p></a>
                        <div className={s.execution__description}>Кратное описание задания Lorem ipsum do lor sit amet, consectetur</div>
                        <p className={s.execution__user}>Заказчик: <a href="#" className={s.execution__link}>Иванов Иван<img src="https://s8.hostingkartinok.com/uploads/images/2020/10/6f27fba06dbafd7d5fede2c46baee053.png" alt=""/></a></p>
                    </div>
                    <div className={s.execution__info}>
                        <a href="order_messages.html"><img className={s.execution__img} src="https://s8.hostingkartinok.com/uploads/images/2020/10/ef4054321bfdd001205449b7657e1148.png" alt=""/></a>
                        <button className={s.execution__button, s.execution__button-1}>Отозвать заявку</button> 
                        <button className={s.execution__button, s.execution__button-1} data-toggle="modal" data-target="#exampleModalCenter">Участвовать в конкурсе</button>
                        <p className={s.execution__services} style={{textAlign:"center"}}>Количество заявок: 10</p>
                    </div>
                </div>
                <div className={s.execution__box, s.row}>
                    <div className={s.execution__info}>
                        <div className={s.execution__list}>
                            <p className={s.execution__services}>Услуга: перевод</p>
                            <p className={s.execution__services}>Срок исполнения: до 30.09.2020</p>
                            <p className={s.execution__services}>Стоимость: 500 руб</p>
                        </div>
                    <a href="#">	<p className={s.execution__name}>Название: <span>Перевод текста с английского</span></p></a>
                        <div className={s.execution__description}>Кратное описание задания Lorem ipsum do lor sit amet, consectetur</div>
                        <p className={s.execution__user}>Заказчик: <a href="#" className={s.execution__link}>Иванов Иван<img src="https://s8.hostingkartinok.com/uploads/images/2020/10/6f27fba06dbafd7d5fede2c46baee053.png" alt=""/></a></p>
                    </div>
                    <div className={s.execution__info}>
        
                        <a href="order_messages.html"><img className={s.execution__img} src="https://s8.hostingkartinok.com/uploads/images/2020/10/ef4054321bfdd001205449b7657e1148.png" alt=""/></a>
                        
                        <button className={s.execution__button, s.execution__button-1} >Отозвать заявку</button>
                        <button className={s.execution__button, s.execution__button-1} data-toggle="modal" data-target="#exampleModalCenter">Участвовать в конкурсе</button>
                        <p className={s.execution__services} style={{textAlign:"center"}}>Количество заявок: 7</p>
                    </div>
                </div>
            </div>
	    </section>
        {/* <section class="orders">
		<div class="orders__container">
			<h1 class="orders__title">Все заказы</h1>
			<form action="#" class="orders__form">
			
			<input class="orders__input" type="date" placeholder="Срок до:" data-toggle="tooltip" title="" data-original-title="Срок до:"/>
								
			<input class="orders__input" type="text" placeholder="Стоимость от:" data-toggle="tooltip" title="" data-original-title="Только цифры"/>
			
			<input class="orders__input" type="text" placeholder="Стоимость до:" data-toggle="tooltip" title="" data-original-title="Только цифры"/>
			
			
			
			
				<select name="" id="" class="orders__region">
					<option value="" required>Регион</option>
				</select>
				<select name="" id="" class="orders__city">
					<option value="" required>Мой город</option>
				</select>
				<select name="" id="" class="orders__service">
					<option value="" required>Услуга</option>
				</select>
				
				
				<input class="submit" type="submit" value="Найти"/>
				<br/>
				<div class="orders__label">
				<input class="orders__checkbox orders__checkbox-1" type="checkbox"/>
				<label >Показать только мои специальности</label>
				</div>
				
			
			</form>
		</div>
	</section>
	
	
	
		<section class="execution">
		<div class="execution__container">
		
		
			<div class="execution__box row platnoe" >
				<div class="execution__info">
					<div class="execution__list">
						<p class="execution__services">Услуга: перевод</p>
						<p class="execution__services">Срок исполнения: до 30.09.2020</p>
						<p class="execution__services">Стоимость: 500 руб</p>
					</div>
					<a href="#"><p class="execution__name">Название: <span>Перевод текста с английского</span></p></a>
					<div class="execution__description">Кратное описание задания Lorem ipsum do lor sit amet, consectetur</div>
					<p class="execution__user">Заказчик: <a href="#" class="execution__link">Иванов Иван<img src="https://s8.hostingkartinok.com/uploads/images/2020/10/6f27fba06dbafd7d5fede2c46baee053.png" alt=""/></a></p>
				</div>
				<div class="execution__info">
					<a href="order_messages.html"><img class="execution__img" src="https://s8.hostingkartinok.com/uploads/images/2020/10/ef4054321bfdd001205449b7657e1148.png" alt=""/></a>
					
					
					<button class="execution__button execution__button-1" >Отозвать заявку</button>
					<button class="execution__button execution__button-1" data-toggle="modal" data-target="#exampleModalCenter">Участвовать в конкурсе</button>
					<p class="execution__services" style={{textAlign:"center"}}>Количество заявок: 10</p>
				</div>
			</div>
			
			
			<div class="execution__box row">
				<div class="execution__info">
					<div class="execution__list">
						<p class="execution__services">Услуга: перевод</p>
						<p class="execution__services">Срок исполнения: до 30.09.2020</p>
						<p class="execution__services">Стоимость: 500 руб</p>
					</div>
				<a href="#">	<p class="execution__name">Название: <span>Перевод текста с английского</span></p></a>
					<div class="execution__description">Кратное описание задания Lorem ipsum do lor sit amet, consectetur</div>
					<p class="execution__user">Заказчик: <a href="#" class="execution__link">Иванов Иван<img src="https://s8.hostingkartinok.com/uploads/images/2020/10/6f27fba06dbafd7d5fede2c46baee053.png" alt=""/></a></p>
				</div>
				<div class="execution__info">
				
			
					<a href="order_messages.html"><img class="execution__img" src="https://s8.hostingkartinok.com/uploads/images/2020/10/ef4054321bfdd001205449b7657e1148.png" alt=""/></a>
					
					
					<button class="execution__button execution__button-1" >Отозвать заявку</button> 
					<button class="execution__button execution__button-1" data-toggle="modal" data-target="#exampleModalCenter">Участвовать в конкурсе</button>
					<p class="execution__services" style={{textAlign:"center"}}>Количество заявок: 7</p>
				</div>
			</div>
		</div>
	</section> */}
    </>
);

}

export default AllOrder;