import React, { useState } from 'react'
import InputCard from './InputCard'

function Submit({submitfunction}){

  return (
    <button onClick={submitfunction}>
      <div className='w-[350px] h-12 flex justify-center items-center bg-green-500 hover:cursor-pointer
      hover:bg-green-400'>
        <p className='text-white'>Submit</p>
      </div>
    </button>
  )
}

function Frame() {

  const errorMessages = {
    emptyError: 'This field cannot be empty',
    emailError: 'Please enter a valid email'
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const [errors, setErrors] = useState({})

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    setErrors({
      ...errors,
      [e.target.name]: ''
    })
    // console.log(formData)
  }
  
  const validateForm = () => {
    let newErrors = {}
  
    if(!formData.firstName.trim()){
      newErrors.firstName = errorMessages.emptyError
    }
    if(!formData.lastName.trim()){
      newErrors.lastName = errorMessages.emptyError
    }
    if(!formData.email.trim()){
      newErrors.email = errorMessages.emptyError
    }
    else if(!/\S+@\S+\.\S+/.test(formData.email)){
      newErrors.email = errorMessages.emailError
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
  }

  const SubmitForm = () => {
    if(validateForm()){
      alert('Form Submitted Successfully')
    }
    else {
      alert('Please fix the errors before submitting')
    }
  }


  return (
    <div className='w-[400px] h-[300px] bg-white flex flex-col justify-evenly items-center shadow-xl shadow-black'>
        <InputCard field='First Name' name="firstName" onInputChange={onInputChange} error={errors.firstName}/>
        <InputCard field='Last Name' name="lastName" onInputChange={onInputChange} error={errors.lastName}/>
        <InputCard field='Email' name="email" onInputChange={onInputChange} error={errors.email}/>
        <Submit submitfunction = {SubmitForm}/>
    </div>
  )
}

export default Frame