import './App.css'
import Formulario from './components/Formulario'
import Productos from './components/Productos'
import Producto from './components/Producto'

function App() {

  const ejemplo = {
    id: 1, 
    name: 'Laptop HP', 
    price: 1200, 
    availibility: true
  }

  return (
    <>
      <Formulario></Formulario>

      <Productos></Productos>
      
      <Producto producto={ejemplo}
      ></Producto>
    </>
  )
}

export default App
