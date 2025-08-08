import type { Product } from "../types/types";

type Props = {
    producto: Product;
}

function Producto( {producto} : Props){
    return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow p-6 mt-10">
      <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Detalle del Producto</h2>

      <div className="space-y-4 text-gray-700 text-sm">
        <div className="flex justify-between">
          <span className="font-semibold">ID:</span>
          <span>{producto.id}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Nombre:</span>
          <span>{producto.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Precio:</span>
          <span>${producto.price}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Disponibilidad:</span>
          <span className={producto.availibility ? 'text-green-600' : 'text-red-600'}>
            {producto.availibility ? 'Si' : 'No'}
          </span>
        </div>
      </div>
    </div>
    );
}

export default Producto;