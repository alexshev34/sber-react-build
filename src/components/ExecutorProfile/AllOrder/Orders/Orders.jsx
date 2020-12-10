import React from 'react'
import s from './Orders.module.css'
import Modal from './Modal/Modal';


class Orders extends React.Component {
    return(
        <section className={s.execution}>
                {col ? data2["_embedded"]["orderEntities"].map((item, index) => (
                    <div className={s.execution__container}>
                        <div className={s.execution__box}>
                            <div className={s.execution__info}>
                                <div className={s.execution__list}>
                                    <p className={s.execution__services}>Услуга:</p>
                                    <p className={s.execution__services}>Срок исполнения: до 30.09.2020</p>
                                    <p className={s.execution__services}>Стоимость: {item.cost} Р</p>
                                </div>
                                <p className={s.execution__name}>Название: <span>{item.title}</span></p>
                                <div className={s.execution__description}>{item.description}</div>
                                <p className={s.execution__user}>Заказчик:  <a href="#" className="execution__link"></a> <img src="https://s8.********************/uploads/images/2020/11/6ef562d4767cba575a5ac931c26e6bdb.png" alt="" /></p>
                            </div>
                            <div className={s.execution__info}>
                                <img className={s.execution__img} src="https://s8.********************/uploads/images/2020/11/830b09a113baebf4d6272d86719a2bde.png" alt="" />
                                <button id={index} onClick={this.handleModal} className={s.execution__button}>откликнуться</button>
                                {this.state.showModal && <Modal handleModal={this.handleModal} /> }
								<p className={s.execution__participants}>0 участников</p>
                            </div>
                        </div>
                    </div>
                ))
                    : <p className={s.execution__order}>У Вас ещё пока нет заказов</p>
                }
            </section>
    )
}

export default Orders