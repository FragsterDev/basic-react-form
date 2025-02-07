import React from 'react'
import InputCard from './InputCard'

// function Submit(){

// }

function Frame() {
  return (
    <div className='w-96 h-72 bg-amber-200 flex flex-col justify-evenly'>
        <InputCard field='first name'/>
        <InputCard field='last name'/>
        <InputCard field='email'/>
    </div>
  )
}

export default Frame