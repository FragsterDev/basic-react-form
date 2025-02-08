import React from 'react'

function InputCard(props) {

    const { field } = props

  return (
        <input className="
        focus:border-0 focus:outline-0
          w-[350px] rounded-sm h-12
          px-5
          bg-blue-100
        " 
        type="text" 
        placeholder={field}
        />
  )
}

export default InputCard