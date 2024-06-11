"use client";
import { ProductCard } from "./ProductCard";
import { useStoreProducts } from "./hooks/useStoreProducts";

export const StoreProducts = ({ searchParams }) => {
  const { products } = useStoreProducts({ searchParams });

  return (
    <section className=" flex flex-wrap gap-4 items-center justify-center mt-36 overflow-hidden">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
};
