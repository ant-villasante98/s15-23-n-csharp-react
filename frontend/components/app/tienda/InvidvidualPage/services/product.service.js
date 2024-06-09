const { $Products } = require("@/stores/products");

export const getProduct = (id) => {
  /* return fetch(`/api/products/${id}`).then((res) => res.json()); */
  let product;

  $Products.subscribe((products) => {
    product = [...products].find((product) => product.id === parseInt(id));
  });
  return product;
};
