"use client";
import { $Category, $Products } from "@/stores/products";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const StoreProducts = ({ searchParams }) => {
  const category = searchParams.categoria?.toLowerCase();
  const allProducts = useStore($Products);
  const categorySelected = useStore($Category);
  const categorias = [
    ...new Set(allProducts.map((product) => product.category.toLowerCase())),
  ];
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (category) {
      if (!categorias.includes(category)) {
        toast.error(`No se encontraron productos en la categoría ${category}`);
        return setProducts(allProducts);
      }
      setProducts(
        allProducts.filter(
          (product) => product.category?.toLowerCase() === category
        )
      );
    } else {
      setProducts(allProducts);
    }
  }, []);

  useEffect(() => {
    if (categorySelected !== "All" && categorySelected !== "todo") {
      setProducts(
        allProducts.filter(
          (product) => product.category?.toLowerCase() === categorySelected
        )
      );
    } else if (categorySelected === "todo") {
      setProducts(allProducts);
    }
  }, [categorySelected]);

  return (
    <section className=" flex flex-wrap gap-4 items-center justify-center mt-36 overflow-hidden">
      {products.map((product) => (
        <a
          href={`/tienda/${product.id}`}
          key={product.id}
          className="flex flex-col justify-center items-center w-[18rem] h-[26rem] gap-6 group"
        >
          <div className="flex justify-center items-center overflow-hidden w-[15rem] h-[15rem] rounded-md shadow-lg">
            <img
              alt={product.name}
              src={product.image}
              className=" w-[15rem] h-[15rem] object-cover object-center group-hover:scale-125 transition-transform duration-1000 ease-in-out"
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
