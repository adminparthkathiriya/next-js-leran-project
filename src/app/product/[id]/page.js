import React from "react";
import {
  getSingleProductData,
  getProductData,
} from "../../../Services/generalService";
export const revalidate = 10;
export default async function SingleProductList({ params }) {
  const productData = await getSingleProductData(params.id);
  return (
    <div>
      {productData ? (
        <div key={productData.id}>
          <h2>Product: {productData.title}</h2>
          <p>{productData.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export async function generateStaticParams() {
  const productsList = await getProductData();
  return productsList.products.map((data) => ({
    id: data.id.toString(),
  }));
}
