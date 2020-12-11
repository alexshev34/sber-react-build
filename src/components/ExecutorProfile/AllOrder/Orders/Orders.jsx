import React from 'react'
import s from './Orders.module.css'
import Modal from './Modal/Modal';


class Orders extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            col: 0,
            data2: {},
            isFetching: true,
            error: null,
            showModal: false
        }
    }
    componentDidMount(){
		fetch('http://79.174.13.220:8080/api/orderEntities')
			.then(res => res.json())
			.then(res2Json => this.setState({col:1, data2: res2Json, isFetching: false}))
    }
    handleModal = () => {
        this.setState({showModal: !this.state.showModal})
    }
    render(){
		const {col, data2, isFetching, error } = this.state;
		if (isFetching) return <div>...Loading</div>;
    return(
        <section className={s.execution}>
                {col ? data2["_embedded"]["orderEntities"].map((item, index) => (
                    <div className={s.execution__container}>
                        <div key={item.id} className={s.execution__box}>
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
                                <button id={index} className={s.execution__button}>откликнуться</button>
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
}
export default Orders