import React from 'react'

function InputCard(props) {

    const { field, name, onInputChange, error } = props

  return (
        <div>

          <input className="
          focus:border-0 focus:outline-0
            w-[350px] rounded-sm h-12
            px-5
            bg-blue-100
          " 
          type="text"
          name={name}
          onChange={onInputChange} 
          placeholder={field}
          />
          {error && <p>{error}</p>}
        </div>
        
  )
}

export default InputCard