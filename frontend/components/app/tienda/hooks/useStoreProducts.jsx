import { $Category, $Products } from "@/stores/products";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useStoreProducts = ({ searchParams }) => {
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

  return {
    products,
  };
};
