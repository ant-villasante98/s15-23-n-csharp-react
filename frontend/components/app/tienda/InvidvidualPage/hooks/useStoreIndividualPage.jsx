import { useEffect, useState } from "react";
import { getProduct } from "../services/product.service";

export const useStoreIndividualPage = ({ id }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const products = getProduct(id);

    if (!products) return;

    setProduct(products);
  }, [id]);

  return {
    product,
  };
};
