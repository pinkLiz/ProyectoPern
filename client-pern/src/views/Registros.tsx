import React from 'react'
import { Link } from 'react-router-dom'

export default function Registros() {
  return (
    <>
      <h2>Todos los Registros</h2>
      <Link to="registro/nuevo" className='rounded-md bg-indigo-600 p-2 font-bold text-white shadow-sm hover:bg-indigo-500'>Agregar Registro</Link>
    </>
  )
}
