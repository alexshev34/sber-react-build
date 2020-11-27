import { useState, useCallback } from "react"

export const useHttp2 = () => {
    const [loading2, setLoading] = useState(false) //процесс загрузки
    const [error, setError] = useState(false) //потенциальные ошибки если есть

    const request2 = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, { method, body, headers })

            if (response.ok) {
                let tokens = response.headers.get('Authorization');
                localStorage.setItem("tokens", tokens); //добавление токена  в localstorage


                async function testing1() {
                    let testing1 = await fetch('http://79.174.13.220:8080/users/get-current-user', {
                        method: 'GET',
                        headers: {
                            'Authorization': localStorage.getItem('tokens')
                        }
                    })
                        .then(res => res.json())
                        .then(resJson => resJson['userDataId'])
                        .then(userId => {
                            async function testing2() { 
                            let testing2 = await fetch('http://79.174.13.220:8080/api/userDatas/' + userId + '/client');
                            if(testing2.ok){
                                let client = response.headers.get('Authorization'); //получение токена
                                localStorage.setItem("client", client);
                                document.location.href = "http://localhost:3000/profile"; //редирект при успешном входе
                            }
                            else{
                                alert("Вы не заказчик");
                            }
                        }
                        testing2();
                        });
                }
                testing1();
            }
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }

            setLoading(false)
            return data  //прилетает с сервера

        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])
    const clearError = () => setError(null)

    return { loading2, request2, error, clearError }
}