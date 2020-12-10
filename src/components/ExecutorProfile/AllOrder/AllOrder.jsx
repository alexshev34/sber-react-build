import React from 'react';
import s from './AllOrder.module.css';
import '../../../css/main.css';
import '../../../css/normalize.css';
import Orders from './Orders/Orders';
// import f from '../../../css/base.module.css';

class AllOrder extends React.Component{
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
        // return <div>Testing</div>
    }
	render(){
		const {col, data2, isFetching, error } = this.state;
		if (isFetching) return <div>...Loading</div>;
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
                    
                    
                    <input className={s.submit} type="submit" value="Найти"/>
                    <br/>
                    <div className={s.orders__label}>
                    </div>
                </form>
            </div>
        </section>
		<Orders/>
            {/* <Modal  /> */}
    </>
);

}
}

export default AllOrder;