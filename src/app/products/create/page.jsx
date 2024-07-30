import React, { Suspense } from "react";
import FileUp from "../components/FileUp";
import ProductForm from "../components/ProductForm";
import { createProduct } from "@/actions/app/actions";
import { getProductCategory, getProductType } from "@/actions/app/products";
import Loading from "@/components/shared/Loading";
import { SelectDemo } from "../components/SelectValue";

const TrialPage = () => {
  return (
    <div>
      <Page />
    </div>
  );
};

const Page = async () => {
  const res1 = await getProductType();
  const res2 = await getProductCategory();
  const { data } = res1;
  const { data: data2 } = res2;
  const { resultList: result1 } = data;
  const { resultList: result2 } = data2;

  const productstype = result1;
  const productscategory = result2;

  // JSON.parse(JSON.stringify(sampleData))\

  const productstypeId = productstype.map((product) => product.productTypeId);

  const producttypes = JSON.parse(JSON.stringify(productstypeId));
  console.log(producttypes);
  const productscategoryId = productscategory.map(
    (product) => product.productCategoryId
  );

  return (
    <Suspense fallback={<Loading />}>
      <ProductForm
        createProduct={createProduct}
        productscategoryId={productscategoryId}
        productstypeId={productstypeId}
      />
      {/* <ProductsCreate
          productscategoryId={productscategoryId}
          productstypeId={productstypeId}
        /> */}
      {/* <SignIn /> */}
    </Suspense>
  );
};

export default TrialPage;
