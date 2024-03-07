import React from "react";
import Link from "next/link";
import { getProductData } from "../../Services/generalService";

export default async function ProductList() {
  const productsList = await getProductData();
  return (
    <div>
      {productsList &&
      productsList.products &&
      productsList.products.length > 0 ? (
        productsList.products.map((product) => (
          <div key={product.id}>
            <Link href={`/product/${product.id}`}>{product.title}</Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
