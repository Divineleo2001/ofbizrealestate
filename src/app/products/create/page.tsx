import { getProductCategory, getProductType } from "@/actions/app/products";
import Loading from "@/components/shared/Loading";
import { ProductCategory, ProductType } from "@/types";
import React, { Suspense } from "react";
import ProductsCreate from "../components/ProductsCreate";
import SignIn from "@/app/auth/components/SignIn";

const CreateProductPage = () => {
  return (
    <div>
      {/* <FormOne /> */}
      <Page />
    </div>
  );
};

export default CreateProductPage;

const Page = async () => {
  const res1: any = await getProductType();
  const res2: any = await getProductCategory();
  const { data } = res1;
  const { data: data2 } = res2;
  const { resultList: result1 } = data;
  const { resultList: result2 } = data2;

  const productstype = result1 as ProductType[];
  const productscategory = result2 as ProductCategory[];

  const productstypeId = productstype.map((product) => product.productTypeId);
  const productscategoryId = productscategory.map(
    (product) => product.productCategoryId
  );

  return (
    <Suspense fallback={<Loading />}>
      <h1 className="text-2xl">This is the list of productTypes</h1>
      <ProductsCreate
      productscategoryId={productscategoryId}
      productstypeId={productstypeId}
      />
      {/* <SignIn /> */}
    </Suspense>
  );
};
