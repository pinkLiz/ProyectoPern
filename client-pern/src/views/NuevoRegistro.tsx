import React from 'react'
import { Link, Form, ActionFunctionArgs, useActionData } from 'react-router-dom'

import ErroMessage from '../components/ErroMessage'


export async function action({request}:ActionFunctionArgs) {

  const data = Object.fromEntries(await request.formData());
  // console.log(data);
  
  // console.log("Llegueee");

  let error = '';

  if(Object.values(data).includes('')){
    error = 'Todos los campos son obligatorios :)';
  }
  if(error.length){
    console.log(error);
    return error;
  }
  
  
  return{}
  
  
}

export default function NuevoRegistro() {
  const error = useActionData() as String

  return (
    <div>
      <h2>Nuevos Registros</h2>
      {error && <ErroMessage>{error}</ErroMessage>}
      
      <h2 className='text-4xl font-black text-slate-500'></h2>

      <Link to="/" className='rounded-md bg-indigo-600 p-2 font-bold text-white shadow-sm hover:bg-indigo-500'>Agregar Registro</Link>


      <Form className='mt-10 space-y-4' method='post'>
        <div className='mb-4'>
          <label htmlFor="name" className='text-gray-800'>Nombre Registro</label>
          <input id='name' type="text" className='mt-2 block w-full p-3 bg-gray-50' placeholder='Nombre del registro' name='name' />
        </div>
        <div className='mb-4'>
          <label htmlFor="number" className='text-gray-800'>Numero Registro</label>
          <input id="number" type="number" className='mt-2 block w-full p-3 bg-gray-50' placeholder='Ejem. 100, 200, 300...' name="number" />
        </div>
        <input type="submit" className='mt-5 w-full bg-indigo-500 text-white font-bold text-lg cursor-pointer rounded' value="Generar registro"/>
      </Form>
    </div>
  )
}







