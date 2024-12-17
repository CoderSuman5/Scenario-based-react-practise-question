import React, { useState } from 'react'

const FormHandling = () => {
    const [formData, setFormData] = useState({name: '', email: ''})
    const [error, setError] = useState({})
    const [submitedData, setSubmitedData] = useState(null)

    let handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
        setError({...error, [name]: ''})
    }

    const validate = () =>{
       const newErrors = {}
       if(!formData.name.trim()) newErrors.name = "Name is required"
       if(!formData.email.trim()) newErrors.name = 'Email is required'
       return newErrors 
    }

    const handleSubmit = (e) => {
         e.preventDefault()
         const validationErrors = validate()
         if(Object.keys(validationErrors).length > 0){
              setError(validationErrors)
              return
         }

         setSubmitedData(formData)
         setFormData({name: '', email: ''})
        setFormData({name})

    }
  return (
    <div style={{maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial, sans-serif'}}>
     <form onClick={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '10px' }}>
       <div>
        <label htmlFor="name">Name</label>
        <input 
        type="text"
        placeholder='Name'
        value={formData.name}
        onChange={handleChange}
        name='name'
        id='name'
         />
     </div>

      <br />

     <div>
         <label htmlFor="email">Email</label>
         <input
         type='email'
         placeholder='Email'
         value={formData.email}
         onChange={handleChange}
         name='email'
         id='email'
         />
    </div>
    <button 
    type='submit'
    style={{
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >Submit</button>

    </form>

    {submitedData && (
        <div style={{marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h3>Submitted Data</h3>
            <h5>Name: {submitedData.name}</h5>
            <h5>Email: {submitedData.email}</h5>
        </div>
    )}
    </div>
    
  )
}

export default FormHandling