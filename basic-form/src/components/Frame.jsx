import React from 'react'
import InputCard from './InputCard'

function Submit(){
  return (
    <button>
      <div className='w-[350px] h-12 flex justify-center items-center bg-green-500 hover:cursor-pointer
      hover:bg-green-400'>
        <p className='text-white'>Submit</p>
      </div>
    </button>
  )
}

function Frame() {
  return (
    <div className='w-[400px] h-[300px] bg-white flex flex-col justify-evenly items-center shadow-xl shadow-black'>
        <InputCard field='First Name'/>
        <InputCard field='Last Name'/>
        <InputCard field='Email'/>
        <Submit />
    </div>
  )
}

export default Frame