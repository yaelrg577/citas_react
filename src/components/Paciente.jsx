import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar este paciente?')
    if(respuesta){
      eliminarPaciente(paciente.id)
    }
  }

  return (

        <div className='m-3 bg-white shadow-md rounded-md py-10 px-5'>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: {''} <span className='font-normal normal-case'>{paciente.nombre}</span></p> 

            <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre Propietario: {''} <span className='font-normal normal-case'>{paciente.propietario}</span></p> 

            <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: {''} <span className='font-normal normal-case'>{paciente.email}</span></p> 

            <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha Alta: {''} <span className='font-normal normal-case'>{paciente.fecha}</span></p> 

            <p className='font-bold mb-3 text-gray-700 uppercase'>
            Sintomas: {''} <span className='font-normal normal-case'>{paciente.descripcion}</span></p> 

          <div className='mt-10 flex justify-between'>
            <button
             type="button"
             className='text-white bg-indigo-600 font-bold text-center py-2 rounded-md uppercase px-10
             hover:bg-indigo-700 '
             onClick={ () => setPaciente(paciente)}
             >editar</button>

            <button
             type="button"
             className='text-white bg-red-600 font-bold text-center py-2 rounded-md uppercase px-10
             hover:bg-red-700'
             onClick={handleEliminar}
             >eliminar</button>
          </div>

            
        </div>
  )
}

export default Paciente