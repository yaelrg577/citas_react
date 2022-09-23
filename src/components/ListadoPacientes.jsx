import {useEffect} from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll  '>
        <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
        
        { pacientes.length ? ( // se utiliza el .length para comprobar si hay algo en el arreglo 
          <p className='text-lg text-center mt-5 mb-10'>Administra tus {''}
          <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
          </p>
        ):
        (
          <p className='text-lg text-center mt-5 mb-10'>Comienza Agregando pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>
        )
        
        }



        {pacientes.map((paciente) => 
          <Paciente 
            key={paciente.id}
            paciente = {paciente}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
          />
        )}

        
    </div>
  )
}

export default ListadoPacientes