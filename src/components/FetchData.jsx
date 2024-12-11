import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const fetchData = async () => {
            try {
                let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setData(response.data)
            } catch (error) {
                setError('failed to fetch the data, try again')
            } finally {
               setLoading(false)
            }
        }

        fetchData()
    },[])

    if(loading) return <p>data loading...</p>
    if(error) return <p>{error}</p>
   
  return (
    <div>FetchData
        {data.map((index) => {
             <div key={index.id}>
                 <h2>title is {index.title}</h2>
                  <h3>discription: {index.body}</h3>
             </div>
        })}
       
    </div>
  )
}

export default FetchData