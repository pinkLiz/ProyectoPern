import type { Product } from '../types/types';

const productos: Product[] = [
  { id: 1, name: 'Laptop HP', price: 1200, availibility: true },
  { id: 2, name: 'Monitor LG', price: 300, availibility: false },
  { id: 3, name: 'Mouse Logitech', price: 25, availibility: true },
];

function Productos() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4 bg-white">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-blue-800 text-2xl">Nombre</th>
            <th className="px-6 py-3 text-blue-800 text-2xl">Precio</th>
            <th className="px-6 py-3 text-blue-800 text-2xl">Disponibilidad</th>
            <th className="px-6 py-3 text-blue-800 text-2xl">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr className="bg-white border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">
                {producto.name}
              </th>
              <td className="px-6 py-4">${producto.price}</td>
              <td className="px-6 py-4">
                {producto.availibility ? (
                  <span className="text-green-600 font-medium">Si</span>
                ) : (
                  <span className="text-red-600 font-medium">No</span>
                )}
              </td>
              <td className="px-6 py-4 flex items-center space-x-3">
                <a href="#" className="font-medium text-green-600 hover:underline">Ver</a>
                <a href="#" className="font-medium text-orange-600 hover:underline">Editar</a>
                <a href="#" className="font-medium text-red-600 hover:underline">Eliminar</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productos;
