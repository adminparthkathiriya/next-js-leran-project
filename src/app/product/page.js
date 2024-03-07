import React from "react";
import Link from "next/link";
import { getProductData } from "../../Services/generalService";
export async function generateStaticParams() {
  const productsList = await getProductData();
  return productsList.products.map((product) => ({
    params: { id: product.id.toString() },
  }));
}
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
export async function getStaticPaths() {
  const paths = await generateStaticParams();
  return {
    paths,
    fallback: false, // or 'blocking' if you want to generate pages on-demand
  };
}

export async function getStaticProps() {
  const productsList = await getProductData();
  return {
    props: {
      productsList,
    },
    revalidate: 86400, // Re-generate every 24 hours
  };
}
