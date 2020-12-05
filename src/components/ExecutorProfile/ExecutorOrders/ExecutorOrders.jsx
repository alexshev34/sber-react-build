import React, { useEffect } from 'react';
import s from './ExecutorOrders.module.css';
import '../../../css/main.css';
import '../../../css/normalize.css';

const ExecutorOrders = () => {
    let col;
    let res4;
    useEffect(() => {
        
    async function test(){
        let response3 =  await fetch('http://79.174.13.220:8080/users/get-current-user', {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('tokens')
        }
    })
        let res = await response3.json()

        let resJson = await res['userDataId']
        let userId = await fetch('http://79.174.13.220:8080/api/userDatas/' + resJson + '/client' ,  {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('tokens')
            }
    })
        let res3 = await userId.json()
        
        let result = res3["_links"]["self"]["href"]; // получить ссылку
        let unique = result.split('/');
        let id = unique[unique.length-1];

        let response4 = await fetch('http://79.174.13.220:8080/api/orderEntities/search/findByOwnerId?id=' + id, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('tokens')
            }
        })
        res4 = await response4.json() //получение JSON
        // alert(res4["_embedded"]["orderEntities"][1]["title"]);
        col = res4["_embedded"]["orderEntities"].length; // получение количества id
        
        
    }
    test()
    });
        
        // const { data, isFetching, error } = this.state;
        // if (isFetching) return <div>...Loading</div>;

        // const animals = [
        //     {id: 1, animal: "Dog"},
        //     {id: 2, animal: "Bird"},
        //     {id: 3, animal: "Cat"},
        //     {id: 4, animal: "Mouse"},
        //     {id: 5, animal: "Horse"},
        // ]

        const embedded = [ {
              "title" : "Сделать сайт",
              "description" : "Верстка макета",
              "cost" : 999.0,
              "dueDate" : "2020-12-08T06:27:34.868-05:00",
              "completeDate" : null,
              "isPaid" : false,
              "bids" : [ ],
              "chosenBid" : null,
              "_links" : {
                "self" : {
                  "href" : "http://79.174.13.220:8080/api/orderEntities/ab50620a-06da-4720-99db-56621f419305"
                },
                "orderEntity" : {
                  "href" : "http://79.174.13.220:8080/api/orderEntities/ab50620a-06da-4720-99db-56621f419305"
                },
                "category" : {
                  "href" : "http://79.174.13.220:8080/api/orderEntities/ab50620a-06da-4720-99db-56621f419305/category"
                },
                "owner" : {
                  "href" : "http://79.174.13.220:8080/api/orderEntities/ab50620a-06da-4720-99db-56621f419305/owner"
                }
              }
            }, {
              "title" : "Починить ноутбук",
              "description" : "Диагностика ноутбука ",
              "cost" : 1200.0,
              "dueDate" : "2020-12-07T01:36:20.922-05:00",
              "completeDate" : null,
              "isPaid" : false,
              "bids" : [ ],
              "chosenBid" : null,
              "_links" : {
                "self" : {
                  "href" : "http://79.174.13.220:8080/api/orderEntities/6f6a89c5-c9ad-46e3-a016-a2a23123772e"
                },
                "orderEntity" : {
                  "href" : "http://79.174.13.220:8080/api/orderEntities/6f6a89c5-c9ad-46e3-a016-a2a23123772e"
                },
                "category" : {
                  "href" : "http://79.174.13.220:8080/api/orderEntities/6f6a89c5-c9ad-46e3-a016-a2a23123772e/category"
                },
                "owner" : {
                  "href" : "http://79.174.13.220:8080/api/orderEntities/6f6a89c5-c9ad-46e3-a016-a2a23123772e/owner"
                }
              }
            } ]

    return(
        <>
            <section className={s.orders}>
                <div className={s.orders__container}>
                    <h2 className={s.orders__title}>Мои заказы</h2>
                    <form action="#" className={s.orders__form}>
                        <div className={s.orders__flex}>
                            <input className={s.orders__input} type="text" placeholder="Поиск заказа"/>
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
                {col ? embedded.map(item => (
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
                            <p className={s.execution__user}>Исполнитель: <a href="#" className="execution__link">Иванов Иван</a> <img src="https://s8.hostingkartinok.com/uploads/images/2020/11/6ef562d4767cba575a5ac931c26e6bdb.png" alt=""/></p>
                        </div>
                        <div className={s.execution__info}>
                            <img className={s.execution__img} src="https://s8.hostingkartinok.com/uploads/images/2020/11/830b09a113baebf4d6272d86719a2bde.png" alt=""/>
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


export default ExecutorOrders;