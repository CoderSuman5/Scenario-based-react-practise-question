import React from 'react'
import useLocalStorage from './useLocalStorage'

const CustomHook = () => {
      const [name, setName] = useLocalStorage("userName", "")

      const handleChange = (e) => {
         setName(e.target.value)
      }

      const handleSubmit = (e) => {
          e.preventDefault()
          alert(`Name saved: ${name}`)
      }

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>CustomHook
      <form action="" onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='name'
        value={name}
        onChange={handleChange}
        style={{width: "100%", padding: "10px", borderRadius: "5px"}}
         />

         <button type='submit' style={{padding: "10px 20px", borderRadius: "5px"}}>save</button>
      </form>
      <p>Your name saved : {name || "no name"}</p>
    </div>
  )
}

export default CustomHook