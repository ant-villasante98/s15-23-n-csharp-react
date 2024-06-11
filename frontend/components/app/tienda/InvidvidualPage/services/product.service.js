import {
  getLocalStorage,
  setLocalStorage,
} from "../../utils/handleLocalStorage";

const { $Products } = require("@/stores/products");

export const getProduct = (id) => {
  /* return fetch(`/api/products/${id}`).then((res) => res.json()); */
  let product;

  $Products.subscribe((products) => {
    product = [...products].find((product) => product.id === parseInt(id));
  });
  return product;
};

export const addToCart = async (data) => {
  const { productId, count, productName, image, price } = data;
  try {
    /* await axios.post(
      `${url}/api/v1/shopping-carts/add-product`, //updateProduct

      {
        id: productId,
        count: quantity,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ); */
    const actualCart = getLocalStorage("cart") ? getLocalStorage("cart") : [];
    const product = actualCart.find((p) => p.productId === productId);
    if (product) {
      product.count += count;
    } else {
      actualCart.push({ productId, count, productName, image, price });
    }
    setLocalStorage("cart", actualCart);
    console.log("Carrito actualizado", getLocalStorage("cart"));
  } catch (error) {
    console.error("Error al actualizar el carrito en el backend", error);
  }
};
