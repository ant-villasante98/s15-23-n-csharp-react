"use client";
import { useState, useEffect } from "react";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});
  const [cartIsEmpty, setCartIsEmpty] = useState(false);

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(/*CONECTAR AL BACKEND*/ );
        const data = response.data;
        setProducts(data);

        const initialQuantities = {};
        data.forEach((product) => {
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
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
  };

  const handleDecrementQuantity = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]:
        prevQuantities[productId] > 0 ? prevQuantities[productId] - 1 : 0,
    }));
  };

  const handleRemoveProduct = (productId) => {
    const updatedQuantities = { ...productQuantities };
    delete updatedQuantities[productId];
    setProductQuantities(updatedQuantities);

    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const handleClearCart = () => {
    setProductQuantities({});
    setProducts([]);
    setCartIsEmpty(true);
  };

  const totalCartPrice = Object.keys(productQuantities).reduce(
    (total, productId) => {
      const product = products.find(
        (product) => product.id === parseInt(productId)
      );
      return total + product.price * productQuantities[productId];
    },
    0
  );

  if (!products || products.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No hay productos en el carrito
      </div>
    );
  }

  return (
    <>
      <div className=" sm:w-full  mx-auto  bg-gray-50 rounded-md ">
        <h3 className="  flex-1 justify-center content-center h-20  bg-gray-100 text-pink-400  text-center  text-xl font-semibold  border-b-2 border-slate-100 shadow-sm mb-3">
          Cart:{" "}
        </h3>
      </div>

      <ul className="sm:grid sm:grid-cols-1 p-6 lg:m-10 ">
        {products.map((product) => (
          <li
            key={product.id}
            className="sm:h-64 content-between  border-b border-gray-200 sm:grid sm:grid-cols-4 sm:grid-rows-5 md:auto-rows-auto sm:gap-x-2 sm:justify-items-center sm:mb-8 md:justify-between lg:justify-around   md:grid-cols-5 md:grid-rows-3 md:h-auto md:pt-4 md:pb-4 md:gap-x-4 md:items-center md:content-centerlg:grid lg:grid-cols-5  lg:items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="sm:w-12 sm:h-12 sm:col-start-1 sm:row-start-3 md:col-start-1 md:row-start-3 lg:w-20   lg:h-20 lg:row-start-3"
            />
            <div className="sm:row-start-1 sm:col-start-1 ">
              <p className="text-md  font-bold text-pink-500 lg:text-lg ">Producto:</p>
            </div>
            <div className="name/price sm:col-start-1 sm:row-start-2 md:col-start-1 md:row-start-2">
              <h4 className="text-base text-start pb-1 font-bold  text-pink-400  lg:text-lg ">
                {product.name}
              </h4>
            </div>
            <div className="sm:row-start-2 sm:col-start-2  md:col-start-2 md:row-start-2">
              <p className="text-sm font-semibold pt-2 pb-1  text-pink-300  lg:text-lg   ">
                ${product.price}
              </p>
            </div>
           
            <div className="sm:col-start-2 sm:row-start-1 text-md font-bold text-pink-500 md:pt-0 md:row-start-1 md:col-start-2  lg:text-lg ">
              <p>Precio Unidad:</p>
            </div>
          

            <div className="total sm:col-start-1 sm:row-start-5 md:col-start-4 md:row-start-1 justify-center">
              <p className="text-md  font-bold text-pink-500 sm:text-left  lg:text-lg ">
                Subtotal:
              </p>
            </div>

            <div className="sm:col-start-2 sm:row-start-5  md:col-start-4 md:row-start-2">
              <p className="text-md font-bold text-pink-500  sm:text-center sm:justify-center  lg:text-lg ">
                ${product.price * productQuantities[product.id]}
              </p>
            </div>

            {/* <div className="buttons sm:col-start-3 sm:space-x-4 xl:w-96"> */}

            <button
              className=" items-center sm:flex sm:justify-center sm:content-center  w-6 h-6 font-medium rounded-md  text-pink-400  bg-pink-200 transition-all duration-500 ease-in-out hover:text-pink-700 hover:bg-pink-300 sm:row-start-2 sm:col-start-4 md:w-10 md:h-10 md:col-start-5 md:row-start-1"
              onClick={() => handleIncrementQuantity(product.id)}
            >
              +
            </button>

            <div className="sm:row-start-1 sm:col-start-3 md:col-start-3 md:row-start-1">
              <p className="text-md  font-bold text-pink-500 sm:text-center  lg:text-lg ">
                Unidades:
              </p>
            </div>

            <span className="text-md font-medium text-gray-400 md:text-lg sm:col-start-3 sm:row-start-2 sm:text-center md:col-start-3 md:row-start-2  lg:text-lg ">
              {productQuantities[product.id]}
            </span>
            {/* Botón - visible solo si la cantidad es mayor a 1 */}
            {productQuantities[product.id] > 1 && (
              <button
                className="sm:w-6 h-6 font-medium rounded-md  text-pink-400  bg-pink-200 transition-all duration-500 ease-in-out hover:text-pink-700 hover:bg-pink-300 sm:col-start-4 sm:row-start-3 md:w-10 md:h-10   md:col-start-5 md:row-start-2"
                onClick={() => handleDecrementQuantity(product.id)}
              >
                -
              </button>
            )}

            <button
              className="w-6 h-6 font-medium rounded-md bg-pink-600 text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-pink-600 hover:border hover:border-pink-600 md:w-10 md:h-10 sm:col-start-4 sm:row-start-5 md:col-start-5 md:row-start-3"
              onClick={() => handleRemoveProduct(product.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <div className="total flex justify-between pl-3 pr-3 items-center h-20   pb-2 border-b-2 shadow-sm border-gray-100 lg:h-60 lg:justify-evenly">
        <p className="text-lg  text-pink-600 font-semibold md:text-2xl">
          Total del Carrito: ${totalCartPrice}
        </p>
        <button
          className="w-22 h-10 text-xs font-medium rounded-md bg-red-700 text-white transition-all duration-500 ease-in-out hover:bg-transparent hover:border border-red-700 hover:text-black  hover:scale-120-smooth md:w-28 md:h-30"
          onClick={handleClearCart}
        >
          Vaciar Carrito
        </button>
      </div>

      <div className="flex justify-around items-center content-center pt-5  ">
        <button className=" w-40 h-14 text-lg font-medium rounded-md  bg-pink-500 text-white transition-all duration-500 ease-in-out  hover:text-pink-500 hover:border hover:border-pink-500  hover:bg-pink-200  hover:scale-120-smooth">
          Comprar
        </button>
      </div>
    </>
  );
};

export default Cart;
