import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-blue-400 text-white py-2 px-6 md:ml-8 hover:bg-blue-300 duration 500'>
      {props.children}
    </button>
  )
}

export default Button