import React, { useEffect, useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)

    let handleIncrease = () => {
        setCount(count + 1) 
        console.log(count);
    }

    let handleDecrease = () => {
        setCount(count - 1) 
        if(count === 0){
           setCount(0)
        }
        console.log(count);
    }

    let handleReset = () => {
        setCount(0)
        console.log(count);
    }
    
  return (
    <>Counter
         <h2>count is: {count}</h2>
         <button onClick={handleIncrease}>increase</button>
         <button onClick={handleDecrease}>decrease</button>
         <button onClick={handleReset}>reset</button>
    </>
  )
}

export default Counter