import React, { useEffect, useState } from 'react'

const ConditionalRendering = () => {
     let [loggedIn, setLoggedIn] = useState(true)

     let handleClick = () => {
        setLoggedIn(!loggedIn)
     }
    
  return (
    <div>ConditionalRendering
        <h1>{loggedIn ? "pls log in first" : "welcome user"}</h1>
          <button onClick={handleClick}>{loggedIn ? 'log in' : 'log out'}</button>
    </div>
  )
}

export default ConditionalRendering  