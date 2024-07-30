import { getProduct } from "@/actions/app/actions";
import { getProducts } from "@/actions/app/products";
import React from "react";
import UploadForm from "../components/UploadForm";

const UploadPage = () => {
  return <Page />;
};

export default UploadPage;

const Page = async () => {
  
  const res = await getProduct();
  const { data } = res;
  const { resultList } = data;

  const products = resultList.map((item) => item.productId);

  return (
    <div>
      <UploadForm products={products} />
    </div>
  );
};
