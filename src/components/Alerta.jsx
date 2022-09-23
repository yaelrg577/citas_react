import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className='bg-red-600 text-white font-black text-xl rounded-md text-center w-full p-2 mb-4 uppercase'>
        <p>{children}</p>
    </div>
  )
}

export default Alerta