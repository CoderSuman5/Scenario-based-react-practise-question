import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
    const [number, updateNumber] = useState(10)

    const updateNum = (setNum) => {
         updateNumber(setNum)
    }

  return (
    <div>Parent
        <Child1 number={number} onUpdateNum={updateNum}/>
        <Child2 number={number}/>
    </div>
  )
}

export default Parent