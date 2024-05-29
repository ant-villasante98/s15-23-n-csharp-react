"use client";
import { useStoreProducts } from "./useStoreProducts";

export const StoreProducts = ({ searchParams }) => {
  const { products } = useStoreProducts({ searchParams });

  return (
    <section className=" flex flex-wrap gap-4 items-center justify-center mt-36 overflow-hidden">
      {products.map((product) => (
        <a
          href={`/tienda/${product.id}`}
          key={product.id}
          className="flex flex-col justify-center items-center w-[12rem] h-[20rem] sm:w-[18rem] sm:h-[26rem] gap-6 group"
        >
          <div className="flex justify-center items-center overflow-hidden w-[8rem] h-[8rem] sm:w-[15rem] sm:h-[15rem] rounded-md shadow-lg">
            <img
              alt={product.name}
              src={product.image}
              className=" w-[15rem] h-[15rem] object-cover object-center group-hover:scale-125 transition-transform duration-1000 ease-in-out"
            />
          </div>
          <div className="flex flex-col justify-between h-[6rem]">
            <p className="text-2xl text-primario font-bold">{product.name}</p>
            <p className="text-secundario text-2xl">$ {product.price}</p>
          </div>
        </a>
      ))}
    </section>
  );
};
