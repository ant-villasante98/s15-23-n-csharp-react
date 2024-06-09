"use client";
import { Button } from "@nextui-org/button";
import { ImgThief } from "./ImgThief";
import { useStore } from "@nanostores/react";
import { $Color } from "@/stores/colors";
import { useStoreIndividualPage } from "./hooks/useStoreIndividualPage";
import { useEffect, useState } from "react";
import { $Products } from "@/stores/products";
import { ProductCard } from "../ProductCard";

export const StoreIndividualPage = ({ id }) => {
  const color = useStore($Color);
  const { product } = useStoreIndividualPage({ id });
  const [recommendedProducts, setRecommendedProducts] = useState(null);
  const products = useStore($Products);

  useEffect(() => {
    if (product && products) {
      const randomProducts = products
        .filter((p) => p.id !== product.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      setRecommendedProducts(randomProducts);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="fixed top-0 left-0 flex items-center justify-center bg-primario h-full w-full z-[60]">
        <div className="spinner bg-white"></div>
      </div>
    );
  }
  return (
    <div>
      <section className="w-full" style={{ background: color }}>
        <div className="md:p-[7rem] p-2 pt-[5rem] flex flex-col lg:flex-row gap-5">
          <div className="overflow-hidden max-h-[23rem] max-w-[23rem] rounded-lg shadow-md">
            <ImgThief
              src={product.image}
              alt="imagen"
              zoom={true}
              className={
                "object-cover h-[23rem] w-[23rem] object-center hover:scale-105 transition-transform duration-500 ease-in-out"
              }
            />
          </div>
          <div>
            <h1 className="text-5xl text-slate-700 font-bold mt-4">
              {product.name}
            </h1>
            <p className="text-slate-800 text-2xl mt-4">$ {product.price}</p>
            <p className="text-slate-900 text-base mt-4">
              {product.description}
            </p>
            <Button className="mt-4" color="primary">
              Agregar al carrito
            </Button>
          </div>
        </div>
      </section>
      <section>
        <h2 className="mt-20 text-3xl text-slate-700 font-bold ml-4">
          También te puede interesar
        </h2>
        <section className=" mt-4 flex flex-wrap gap-4 items-center justify-center overflow-hidden">
          {recommendedProducts &&
            recommendedProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </section>
      </section>
    </div>
  );
};
