"use client";
import React from "react";
import { useParams } from "next/navigation";
import { getSingleProductData } from "../../../Services/generalService";
export default async function SingleProductList() {
  const { id } = useParams();
  const productData = await getSingleProductData(id);
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
