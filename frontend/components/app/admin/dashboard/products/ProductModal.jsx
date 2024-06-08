import { data } from 'autoprefixer';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ProductModal({ onClose }) {
  const [product, setProduct] = useState({
    id: 0,
    count: 0,
    price: 0,
    name: '',
    image: '',
    category: 'Pasteles'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        product.count = parseInt(product.count);
        product.id = parseInt(product.id);
        product.price = parseInt(product.price);
        
        const response = await fetch('https://cakeback.somee.com/api/v1/shopping-carts/add-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        
        if (response.status === 200 || response.status === 204) {
            toast.success('Producto agregado con éxito!');
            onClose();
        } else {
            throw new Error('Error en la solicitud');
        }
    } catch (error) {
        toast.error('Error al agregar el producto');
        console.error('Error al agregar el producto:', error);
    }
};


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <div className="flex justify-end">
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>&times;</button>
        </div>
        <h2 className="text-xl font-bold mb-4">Agregar Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">ID:</label>
            <input
              type="number"
              name="id"
              value={product.id}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Cantidad:</label>
            <input
              type="number"
              name="count"
              value={product.count}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Precio:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre:</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Imagen URL:</label>
            <input
              type="url"
              name="image"
              value={product.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Categoría:</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            >
              <option value="Pasteles">Pasteles</option>
              <option value="Brownies">Brownies</option>
              <option value="Cupcakes">Cupcakes</option>
              <option value="Bocadillos">Bocadillos</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
