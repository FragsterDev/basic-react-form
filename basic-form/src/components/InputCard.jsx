import React from 'react'

function InputCard(props) {

    const { field } = props

  return (
        <input className="bg-white focus:border-0 focus:outline-0" type="text" placeholder={'Enter your '+field}/>
  )
}

export default InputCard