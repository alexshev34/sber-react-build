import React from 'react'
import s from './Orders.module.css'
import OrderItem from './OrderItem/OrderItem';


class Orders extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            col: 0,
            data2: {},
            isFetching: true,
            error: null,
        }
    }
    componentDidMount(){
		fetch('http://79.174.13.220:8080/api/orderEntities')
			.then(res => res.json())
			.then(res2Json => this.setState({col:1, data2: res2Json, isFetching: false}))
    }
    render(){
		const {col, data2, isFetching, error } = this.state;
		if (isFetching) return <div>...Loading</div>;
    return(
        <section className={s.execution}>
                {col ? data2["_embedded"]["orderEntities"].map((item, index) => (
                    <OrderItem item={item}/>
                ))
                    : <p className={s.execution__order}>У Вас ещё пока нет заказов</p>
                }
            </section>
    )
}
}
export default Orders;