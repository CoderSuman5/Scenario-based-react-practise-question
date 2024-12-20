import React from 'react'

const Child1 = ({number , onUpdateNum}) => {
  
    const handleIncrese = () => {
        onUpdateNum(number + 1)
    }
     
    const handleDecrese = () => {
        onUpdateNum(number - 1)
        if(number === 0){
            onUpdateNum(0)
        }
    }

 
  return (
    <div>Child1
        <button onClick={handleIncrese}>Increase</button>
        <button onClick={handleDecrese}>Decrese</button>
    </div>
  )
}

export default Child1