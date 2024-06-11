import { useEffect, useState } from "react";
import { addToCart, getProduct } from "../services/product.service";
import { useStore } from "@nanostores/react";
import { $Color } from "@/stores/colors";
import { $Products } from "@/stores/products";
import toast from "react-hot-toast";
import { getLocalStorage } from "../../utils/handleLocalStorage";

export const useStoreIndividualPage = ({ id }) => {
  const [product, setProduct] = useState(null);
  const color = useStore($Color);
  const [recommendedProducts, setRecommendedProducts] = useState(null);
  const products = useStore($Products);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [updateCart, setUpdateCart] = useState(false);

  useEffect(() => {
    const products = getProduct(id);

    if (!products) return;

    setProduct(products);
  }, [id]);
  useEffect(() => {
    const getCart = getLocalStorage("cart");
    if (getCart) {
      setCart(getCart);
    }
  }, [updateCart]);
  useEffect(() => {
    const productQuantity = cart.find((p) => p.productId === parseInt(id));
    if (productQuantity) {
      setQuantity(productQuantity.count);
    }
  }, [cart]);

  useEffect(() => {
    if (product && products) {
      const randomProducts = products
        .filter((p) => p.id !== product.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      setRecommendedProducts(randomProducts);
    }
  }, [product]);

  const handleAddToCart = async () => {
    await addToCart({
      productId: product.id,
      count: 1,
      productName: product.name,
      image: product.image,
      price: product.price,
    });
    setUpdateCart(!updateCart);
    toast.success("Producto agregado al carrito");
  };
  return {
    product,
    color,
    recommendedProducts,
    handleAddToCart,
    quantity,
  };
};
