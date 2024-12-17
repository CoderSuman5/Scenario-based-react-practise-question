import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const fetchData = async () => {
            try {
                // setLoading(true)
                let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setData(response.data)
                console.log(response.data);
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
        {/* {data.map((index) => {
             <div key={index.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
                 <h2>title is {index.title}</h2>
                  <h3>discription: {index.body}</h3>
             </div>
        })} */}

       <h1>Fetched Data</h1>
      {data.map(item => (
        <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
       
    </div>
  )
}

export default FetchData