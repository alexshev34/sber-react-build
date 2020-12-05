import { useState, useCallback} from "react"

export const useHttp = () => {
    const [loading, setLoading] = useState(false) //процесс загрузки
    const [error, setError] = useState(false) //потенциальные ошибки если есть

    const request = useCallback( async (url, method = 'POST', body = null, headers = {}) => {
        setLoading(true)
        try{
            if(body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
          const response = await fetch(url, { method, body, headers: {'Authorization': localStorage.getItem('tokens'), 'Content-Type': 'application/json'}})
          
          const data = await response.json()
          if(!response.ok){
              throw new Error(data.message || 'Что-то пошло не так')

          }

          setLoading(false)
          return data  //прилетает с сервера

        } catch (e){
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])
    const clearError = () => setError(null)

    return {loading, request, error, clearError}
}