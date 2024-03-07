export async function getProductData() {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching products:", error);
      return [];
    });
}
export async function getSingleProductData(id) {
  return fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching Sinlge products:", error);
      return [];
    });
}
