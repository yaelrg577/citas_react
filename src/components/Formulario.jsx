import {useState, useEffect} from 'react'
import Alerta from './Alerta'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [error, setError] = useState(false)


  const generarId = () => {

    const fecha = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2)
     return fecha + random
  }

   useEffect(() =>{

    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setDescripcion(paciente.descripcion)
    } 

  },[paciente])


  const handleSubmit = (e) => {
    e.preventDefault()

    if([nombre, propietario, email, fecha, descripcion].includes('')){
      setError(true)
      return
    }
      setError(false)

    const objetoPaciente = {
      nombre, 
      propietario, 
      email,
      fecha,
      descripcion
    }

    if(paciente.id){
      //editando el registro
      objetoPaciente.id = paciente.id
      const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id 
        ? objetoPaciente /*aqui esta retornando lo que esta en el useeffect osea 
        lo que esta el formulario cuando le damos en editar*/ 
        : pacienteState) // aqui no esta editando retornaria el objeto tal cual esta en el state 
      setPacientes(pacienteActualizado)
      setPaciente({})

    }else{
      // nuevo registro 
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    //aqui se esta reiniciaando el form cuando creamos un paciente o cuando guardamos cambios despues de editar 
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setDescripcion('')


  }
  setTimeout(() => {
    setError(false)
  }, 5000);

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg text-center mt-5 mb-10'>Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form
        onSubmit={handleSubmit}
        className='bg-white mt-10 shadow-md rounded-lg py-10 px-5'> {/* para separar de un bg por dentro se usa pading */}
          
           
        {error &&  <Alerta>Todos los campos son obligatorios</Alerta>}
          
          <div className='mb-5'> 
            <label 
            className='block uppercase text-slate-700 font-bold'
            htmlFor='nombre'
            >
            nombre de la mascota</label>
            <input
            id='nombre'
            type='text'
            placeholder='Nombre de la Mascota'
            className='w-full rounded border text-sm p-1 mt-1 placeholder-gray-600'
            value={nombre}
            onChange = {e => setNombre(e.target.value)}
            />
          </div>

          <div className='mt-5'>
            <label 
            className='block uppercase text-gray-700 font-bold'
            htmlFor='propietario'
            >
            Nombre Propietario</label>
            <input
            id='propietario'
            type='text'
            placeholder='Nombre del Propietario'
            className='w-full rounded border text-sm p-1 mt-1 placeholder-gray-600'
            value={propietario}
            onChange = {e => setPropietario(e.target.value)}
            />
          </div>

          <div className='mt-5'>
            <label 
            className='block uppercase text-gray-700 font-bold'
            htmlFor='email'
            >
            Email</label>
            <input
            id='email'
            type='email'
            placeholder='Email Propietario'
            className='w-full rounded border text-sm p-1 mt-1 placeholder-gray-600'
            value={email}
            onChange = {e => setEmail(e.target.value)}
            />
          </div>

          <div className='mt-5'>
            <label 
            className='block uppercase text-gray-700 font-bold'
            htmlFor='alta'
            >
            Alta</label>
            <input
            id='alta'
            type='date'
            className='w-full rounded border text-sm p-1 mt-1 placeholder-gray-600'
            value={fecha}
            onChange = {e => setFecha(e.target.value)}
            />
          </div>

          <div className='mt-5'>
            <label 
            className='block uppercase text-gray-700 font-bold'
            htmlFor='sintomas'
            >
            sintomas</label>
            <textarea
            id='sintomas'
            type='text'
            placeholder='Describe los Sintomas'
            className='w-full rounded border text-sm p-1 mt-1 placeholder-gray-600'
            value={descripcion}
            onChange = {e => setDescripcion(e.target.value)}
            />
          </div>

          <input 
          type='submit'
          className='bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-800 
          transition-all w-full p-3 mt-5 uppercase cursor-pointer'
          value={ paciente.id ? 'Guardar Cambios' : 'Agregar Paciente'}
          />

        </form>
    </div>
  )
}

export default Formulario