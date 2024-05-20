"use client";
import { $Products } from "@/stores/products";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

export const StoreProducts = ({ category }) => {
  const allProducts = useStore($Products);
  const [products, setProducts] = useState(allProducts);
  useEffect(() => {
    if (category !== "all") {
      setProducts(
        allProducts.filter((product) => product.category === category)
      );
    }
  }, [category]);
  return (
    <section className=" flex flex-wrap items-center justify-center mt-36 overflow-hidden">
      {products.map((product) => (
        <a
          href={`/tienda/${product.id}`}
          key={product.id}
          className="flex flex-col justify-center w-[20rem] h-[26rem] p-2 gap-6 group"
        >
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              className=" w-[15rem] h-[15rem] object-cover rounded-md shadow-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col justify-between h-[6rem]">
            <p className="text-2xl text-[#5f4b85] font-bold">{product.name}</p>
            <p className="text-[#FF5C8F] text-2xl">$ {product.price}</p>
          </div>
        </a>
      ))}
    </section>
  );
};
