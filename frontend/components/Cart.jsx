"use client"
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
      <div className=" sm:w-full  mx-auto  bg-gray-50  pb-10 rounded-md ">
        <h3 className="  flex-1 justify-center content-center h-20  bg-gray-100 text-pink-400  text-center  text-xl font-semibold  border-b-2 border-slate-100 shadow-sm mb-3">
          Cart:{" "}
        </h3>
        <ul className="p">
          {products.map((product) => (
            <li
              key={product.id}
              className="sm:h-24  pt-2  border-b border-gray-200  flex justify-between  md:justify-between lg:justify-around  "
            >
              <div className="flex gap-8 md:w-80 xl: w-96">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-base pb-1 font-semibold  text-pink-400  ">{product.name}</h4>
                 
                  <p className="text-sm font-semibold pt-2 pb-1  text-pink-300  ">${product.price}</p>
                  <p className="text-xs pt-2 font-semibold text-pink-500 ">
                    Total: ${product.price * productQuantities[product.id]}
                  </p>
                </div>
              </div>
              <div className="sm:pr-10 flex gap-5 items-center md:w-80 md:justify-between md:pr-10 xl:w-96">
                {/* Botón - visible solo si la cantidad es mayor a 1 */}
                
               
                <button className=" w-6 h-6 font-medium rounded-md  text-pink-400  bg-pink-200 transition-all duration-500 ease-in-out hover:text-pink-700 hover:bg-pink-300 md:w-10 md:h-10 " onClick={() => handleIncrementQuantity(product.id)}>
                  +
                </button>

                <span className="text-md font-medium text-gray-400 md:text-lg">{productQuantities[product.id]}</span>

                {productQuantities[product.id] > 1 && (
                  <button className="sm:w-6 h-6 font-medium rounded-md  text-pink-400  bg-pink-200 transition-all duration-500 ease-in-out hover:text-pink-700 hover:bg-pink-300 md:w-10 md:h-10" onClick={() => handleDecrementQuantity(product.id)}>
                    -
                  </button>
                )}
                
                <button className="w-6 h-6 font-medium rounded-md bg-pink-600 text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-pink-600 hover:border hover:border-pink-600 md:w-10 md:h-10 " onClick={() => handleRemoveProduct(product.id)}>
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="total flex justify-between pl-3 pr-3 items-center h-20   pb-2 border-b-2 shadow-sm border-gray-100 lg:h-60 lg:justify-evenly">
          <p className="text-lg  text-pink-600 font-semibold md:text-2xl">Total del Carrito: ${totalCartPrice}</p>
          <button className="w-22 h-10 text-xs font-medium rounded-md bg-red-700 text-white transition-all duration-500 ease-in-out hover:bg-transparent hover:border border-red-700 hover:text-black  hover:scale-120-smooth md:w-28 md:h-30" onClick={handleClearCart}>
            Vaciar Carrito
          </button>
        </div>
        
        <div className="flex justify-around items-center content-center pt-5  ">
          
          <button className=" w-40 h-14 text-lg font-medium rounded-md  bg-pink-500 text-white transition-all duration-500 ease-in-out  hover:text-pink-500 hover:border hover:border-pink-500  hover:bg-pink-200  hover:scale-120-smooth">
            Comprar
          </button>
        </div>
      </div>
    </>

  );
};

export default Cart;