import React, { Suspense } from "react";
import ProductsList from "./components/ProductList";
import { getProducts } from "@/actions/app/products";
import { atparProductsType } from "@/types";
import Loading from "@/components/shared/Loading";

const ProductPage = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default ProductPage;

const Products = async () => {
  const product = await getProducts();
  const { data } = product;
  const { resultList } = data;
  const products = resultList as atparProductsType[];

  return (
    <Suspense fallback={<Loading />}>
      <ProductsList products={products} />
    </Suspense>
  );
};
