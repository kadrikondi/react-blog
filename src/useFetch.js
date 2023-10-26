import { useEffect, useState } from "react";
// writing a custome hook
const useFetch =(url)=>{

    const [data, setData]= useState(null)
    const[isLoading , setIsLoading]= useState(true)
    const[error, setError]= useState(null)

    useEffect(()=>{
        const abortCount = new AbortController()
        setTimeout(() => {
      fetch(url, {signal:abortCount.signal})
      .then(res=> {
    
       if(!res.ok){
        let message =`error has occure ${res.status}`
        throw Error(message)
        
       }
       return res.json()
      })
      .then(data =>{
        setData(data)
        setIsLoading(false)
        setError(null)
    
      })
      .catch(err=>{
        if(err.name ==="AbortError"){
            console.log(err)
            console.log('fettt')
        }else{
        console.log(err.message)
        setError(err.message)
        setIsLoading(false)
    }
      })
    }, 1000)
    return()=> abortCount.abort()
      },[url])

      return{data, isLoading, error}
}
export default useFetch