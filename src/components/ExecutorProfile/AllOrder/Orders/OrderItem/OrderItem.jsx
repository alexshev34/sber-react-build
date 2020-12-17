import React from 'react';
import Modal from './Modal/Modal';
import s from './OrderItem.module.css';

class OrderItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }
    handleModal = () => {
        this.setState({showModal: !this.state.showModal})
    }
    render() {
        return (
            <div key={this.props.item.id} className={s.execution__container}>
                <div className={s.execution__box}>
                    <div className={s.execution__info}>
                        <div className={s.execution__list}>
                            <p className={s.execution__services}>Услуга:</p>
                            <p className={s.execution__services}>Срок исполнения: до 30.09.2020</p>
                            <p className={s.execution__services}>Стоимость: {this.props.item.cost} Р</p>
                        </div>
                        <p className={s.execution__name}>Название: <span>{this.props.item.title}</span></p>
                        <div className={s.execution__description}>{this.props.item.description}</div>
                        <p className={s.execution__user}>Заказчик:  <a href="#" className="execution__link"></a> <img src="https://s8.********************/uploads/images/2020/11/6ef562d4767cba575a5ac931c26e6bdb.png" alt="" /></p>
                    </div>
                    <div className={s.execution__info}>
                        <button id={this.index} onClick={this.handleModal} className={s.execution__button}>откликнуться</button>
                        {this.state.showModal && <Modal handleModal={this.handleModal} />}
                        <p className={s.execution__participants}>0 участников</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderItem;