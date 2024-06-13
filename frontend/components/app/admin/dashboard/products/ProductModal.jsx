import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useStore } from '@nanostores/react';
import { $Products } from '../../../../../stores/products';

export default function ProductModal({ onClose }) {
  const [product, setProduct] = useState({
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: '',
    category: 'Pasteles',
    createdAt: new Date().toISOString().split('T')[0], 
    updatedAt: new Date().toISOString().split('T')[0]  
  });

  const products = useStore($Products);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      product.id = parseInt(product.id);
      product.price = parseInt(product.price);

      // Actualizar el estado de Nanostores
      $Products.set([...products, product]);

      toast.success('Producto agregado con éxito!');
      onClose();
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
            <label className="block text-gray-700">Descripción:</label>
            <input
              type="text"
              name="description"
              value={product.description}
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
