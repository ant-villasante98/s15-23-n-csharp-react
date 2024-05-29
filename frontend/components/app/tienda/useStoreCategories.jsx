import { $Products } from "@/stores/products";
import { useStore } from "@nanostores/react";

export const useStoreCategories = () => {
  const allProducts = useStore($Products);
  const categorias = [
    ...new Set(allProducts.map((product) => product.category)),
  ].map((category) => ({
    category,
    image: allProducts.find((product) => product.category === category).image,
  }));
  categorias.push({
    category: "Todo",
    image:
      "https://images.pexels.com/photos/4913389/pexels-photo-4913389.jpeg?auto=compress&cs=tinysrgb&w=600",
  });

  return {
    categorias,
  };
};
