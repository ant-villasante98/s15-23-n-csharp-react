const { $Products } = require("@/stores/products");

export const getProduct = (id) => {
  /* return fetch(`/api/products/${id}`).then((res) => res.json()); */
  let product;

  $Products.subscribe((products) => {
    product = [...products].find((product) => product.id === parseInt(id));
  });
  return product;
};

export const addToCart = async (productId, quantity) => {
  try {
    await axios.post(
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
    );
  } catch (error) {
    console.error("Error al actualizar el carrito en el backend", error);
  }
};
