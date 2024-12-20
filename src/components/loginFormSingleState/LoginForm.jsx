import React, { useState } from 'react'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
      const {name,value} = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);

    }


  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
        <h1>Login form</h1>
        <form onSubmit={handleSubmit}>

          <div style={{marginBottom: '15px'}}>
          <label htmlFor="">username</label>
        <input 
        type="text"
        placeholder='username'
        name='username'
        value={formData.username}
        onChange={handleChange}
        style={{width: "100%", padding: "10px", borderRadius: "5px"}}
         />
        </div>  
        

        <div style={{marginBottom: '15px'}}>
        <label htmlFor="">password</label>
         <input 
         type="text" 
         placeholder='password'
         name='password'
         value={formData.password}
         onChange={handleChange}
         style={{width: "100%", padding: "10px", borderRadius: "5px"}}
         />
        </div>
        <button type='submit' style={{padding: '10px 20px', borderRadius: '5px'}}>
            Login
        </button>
         </form>
    </div>
  )
}

export default LoginForm