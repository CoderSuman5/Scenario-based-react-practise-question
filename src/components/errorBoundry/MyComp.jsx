import React from 'react'

const MyComp = () => {
    throw new Error("oops, somthing went wrong")

  return (
    <div>MyComp
        <h1>This component won't be rendered</h1>
    </div>
  )
}

export default MyComp