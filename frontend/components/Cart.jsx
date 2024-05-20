import { useState, useEffect } from "react";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});
  const [cartIsEmpty, setCartIsEmpty] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json"); 
        const data = await response.json();
        setProducts(data);
      
        const initialQuantities = {};
        data.forEach(product => {
          initialQuantities[product.id] = 0;
        });
        setProductQuantities(initialQuantities);
      } catch (error) {
        console.error("Error al cargar los productos", error);
      }
    };

    fetchProducts();
  }, []);

  const handleIncrementQuantity = (productId) => {
    setProductQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1
    }));
  };

  const handleDecrementQuantity = (productId) => {
    setProductQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] > 0 ? prevQuantities[productId] - 1 : 0
    }));
  };

  const handleRemoveProduct = (productId) => {
    const updatedQuantities = { ...productQuantities };
    delete updatedQuantities[productId];
    setProductQuantities(updatedQuantities);
  
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleClearCart = () => {
    setProductQuantities({});
    setProducts([]);
    setCartIsEmpty(true);
  };

  const totalCartPrice = Object.keys(productQuantities).reduce((total, productId) => {
    const product = products.find(product => product.id === parseInt(productId));
    return total + (product.price * productQuantities[productId]);
  }, 0);

  if (!products || products.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No hay productos en el carrito
      </div>
    );
  }

  return (
    <>
      <div className="max-w-lg mx-auto bg-purple-400 pl-5 pb-10 rounded-md ">
        <h3 className="text-xl font-semibold mb-4 pt-5 align-middle text-center">
          Shopping Cart:{" "}
        </h3>
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className="border-b border-gray-200 py-2 flex justify-between items-center pb-12"
            >
              <div className=" flex gap-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    {product.description}
                  </p>
                  <p className="text-lg font-semibold">${product.price}</p>
                  <p className="text-lg font-semibold">
                    Total: ${product.price * productQuantities[product.id]}
                  </p>
                </div>
              </div>
              <div className="pr-10 flex gap-5">
                {/* Botón - visible solo si la cantidad es mayor a 1 */}
                {productQuantities[product.id] > 1 && (
                  <button className="w-10 h-10 font-medium rounded-md bg-purple-700 text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-purple-700 " onClick={() => handleDecrementQuantity(product.id)}>
                    -
                  </button>
                )}
                <span className="text-lg font-semibold">{productQuantities[product.id]}</span>
                <button className="w-10 h-10 font-medium rounded-md bg-purple-700 text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-purple-700 " onClick={() => handleIncrementQuantity(product.id)}>
                  +
                </button>
                
                <button className="w-10 h-10 font-medium rounded-md bg-red-700 text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-red-700 " onClick={() => handleRemoveProduct(product.id)}>
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="total">
          <p className="text-lg font-semibold">Total del Carrito: ${totalCartPrice}</p>
        </div>
        <div className="flex justify-around items-center content-center pt-14">
          <button className=" w-40 h-14 text-lg font-medium rounded-md bg-red-700 text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-red-700  hover:scale-120-smooth" onClick={handleClearCart}>
            Vaciar Carrito
          </button>
          <button className=" w-40 h-14 text-lg font-medium rounded-md bg-purple-700 text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-purple-700 hover:scale-120-smooth">
            Comprar
          </button>
        </div>
      </div>
    </>

  );
};

export default Cart;