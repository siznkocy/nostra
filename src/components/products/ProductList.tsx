import { Product } from "@/types";
import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <section className="flex gap-2">
      {/* {JSON.stringify(products)} */}
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </section>
  );
}
