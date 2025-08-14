import React from 'react'
import { Link } from 'react-router-dom'


export default function NuevoRegistro() {
  return (
    <div>
      <h2>Nuevos Registros</h2>
      <Link to="/" className='rounded-md bg-indigo-600 p-2 font-bold text-white shadow-sm hover:bg-indigo-500'>Registro</Link>
    </div>
  )
}
