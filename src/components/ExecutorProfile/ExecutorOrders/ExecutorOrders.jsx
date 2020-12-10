import React from 'react';
import s from './ExecutorOrders.module.css';
import '../../../css/main.css';
import '../../../css/normalize.css';

class ExecutorOrders extends React.Component{
// const ExecutorOrders = () => {
    //    let col;
    //     let res4;
    // const [ col, setCol ] = useState(0);
    // const [ res4, setRes4 ] = useState({
    // });

    // useEffect(() => {

    // async function test(){
    //     let response3 =  await fetch('http://79.174.13.220:8080/users/get-current-user', {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': localStorage.getItem('tokens')
    //     }
    // })
    //     let res = await response3.json()

    //     let resJson = await res['userDataId']
    //     let userId = await fetch('http://79.174.13.220:8080/api/userDatas/' + resJson + '/client' ,  {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': localStorage.getItem('tokens')
    //         }
    // })
    //     let res3 = await userId.json()

    //     let result = res3["_links"]["self"]["href"]; // получить ссылку
    //     let unique = result.split('/');
    //     let id = unique[unique.length-1];

    //     let response4 = await fetch('http://79.174.13.220:8080/api/orderEntities/search/findByOwnerId?id=' + id, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': localStorage.getItem('tokens')
    //         }
    //     })

    


    //  let res4 = await response4.json() //получение JSON
    //  let cod = res4["_embedded"]["orderEntities"].length; // получение количества id  
    //  let array = res4["_embedded"]["orderEntities"][1]["title"]
    // let array = res4["_embedded"];
    // alert(res4["_embedded"]["orderEntities"][1]["title"]); 

    // setRes4(await response4.json());
    // alert(res4["_embedded"]["orderEntities"][0]["title"]);

    // setCol(res4["_embedded"]["orderEntities"].length);
    // setRes4(array);
    // setCol(cod);

    // }
    // test()
    // });

    constructor(props){
        super(props);
        this.state = {
            col: 0,
            data1: {},
            isFetching: true,
            error: null
        }
    }
    componentDidMount(){
        let response3 = fetch('http://79.174.13.220:8080/users/get-current-user', {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('tokens')
            }
        })
            .then(res => res.json())
            .then(resJson => resJson['userDataId'])
            .then(userId => {
                let response2 = fetch('http://79.174.13.220:8080/api/userDatas/' + userId + '/client', {
                    method: 'GET',
                    headers: {
                        'Authorization': localStorage.getItem('tokens')
                    }
                })
                    .then(res2 => res2.json())
                    .then(result =>{
                        let test1 = result["_links"]["self"]["href"];
                        let unique = test1.split('/');
                        let id = unique[unique.length-1];
                        let response4 = fetch('http://79.174.13.220:8080/api/orderEntities/search/findByOwnerId?id=' + id, {
                            method: 'GET',
                            headers: {
                                'Authorization': localStorage.getItem('tokens')
                        }
                    })
                        .then(res4 => res4.json())
                        .then(res4Json => this.setState({col: 1, data1: res4Json, isFetching: false}))
                        
                    })
                        
                });
            }
                
                
                   
            
        
render(){
    const {col, data1, isFetching, error} = this.state;
    if (isFetching) return <div>...Loading</div>;

    return (
        <>
            <section className={s.orders}>
                <div className={s.orders__container}>
                    <h2 className={s.orders__title}>Мои заказы</h2>
                    <form action="#" className={s.orders__form}>
                        <div className={s.orders__flex}>
                            <input className={s.orders__input} type="text" placeholder="Поиск заказа" />
                            <button className={s.orders__button} type="submit">Найти</button>
                        </div>
                    </form>
                    <ul className={s.orders__menu}>
                        <li className={s.orders__item}>
                            <a className={s.orders__link} href="#">В конкурсе</a>
                        </li>
                        <li className={s.orders__item}>
                            <a className={s.orders__link} href="#">На исполнении</a>
                        </li>
                        <li className={s.orders__item}>
                            <a className={s.orders__link} href="#">закрытые успешно</a>
                        </li>
                        <li className={s.orders__item}>
                            <a className={s.orders__link} href="#">закрытые с опозданием</a>
                        </li>
                        <li className={s.orders__item}>
                            <a className={s.orders__link} href="#">закрытые не выполненные</a>
                        </li>
                        <li className={s.orders__item}>
                            <a className={s.orders__link} href="#">в арбитраже</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={s.execution}>
                {col ? data1["_embedded"]["orderEntities"].map(item => (
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
                                <p className={s.execution__user}>Исполнитель:  <a href="#" className="execution__link">не назначен</a> <img src="https://s8.********************/uploads/images/2020/11/6ef562d4767cba575a5ac931c26e6bdb.png" alt="" /></p>
                            </div>
                            <div className={s.execution__info}>
                                <img className={s.execution__img} src="https://s8.********************/uploads/images/2020/11/830b09a113baebf4d6272d86719a2bde.png" alt="" />
                                <button className={s.execution__button}>закрыть заказ</button>
                            </div>
                        </div>
                    </div>
                ))
                    : <p className={s.execution__order}>У Вас ещё пока нет заказов</p>
                }
            </section>
        </>
    );
}
}


export default ExecutorOrders;