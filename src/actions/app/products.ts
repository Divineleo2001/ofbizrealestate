"use server";
import { cookies } from "next/headers";
import axios from "axios";
import { revalidatePath } from "next/cache";
const ProductCreateUrl =
  process.env.BACKEND_URL + "/rest/services/createAtparProductByEvents";
const productUrl = process.env.BACKEND_URL + "/rest/services/newPerformFind";

const ApproveProductUrl =
  process.env.BACKEND_URL + "/rest/services/approveProductEcommerce";
export const getProducts = async () => {
  // const userAuthToken =
  const params = {
    inParams: JSON.stringify({
      inputFields: {},
      entityName: "atparProduct",
      orderBy: "productId",
      viewIndex: 0,
      noConditionFind: "Y",
    }),
  };

  const queryString = new URLSearchParams(params).toString();
  const fullUrl = `${productUrl}?${queryString}`;
  const userAuthToken = cookies().get("token");
  const token = userAuthToken?.value;
  const response = await fetch(fullUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getProductType = async () => {
  const params = {
    inParams: JSON.stringify({
      inputFields: {},
      entityName: "ProductType",
      viewIndex: 0,
      noConditionFind: "Y",
    }),
  };

  const queryString = new URLSearchParams(params).toString();

  const fullUrl = `${productUrl}?${queryString}`;
  console.log(fullUrl);
  const userAuthToken = cookies().get("token");
  const token = userAuthToken?.value;
  const response = await fetch(fullUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getProductCategory = async () => {
  const params = {
    inParams: JSON.stringify({
      inputFields: {},
      entityName: "ProductCategory",
      viewIndex: 0,
      noConditionFind: "Y",
    }),
  };
  const queryString = new URLSearchParams(params).toString();

  const fullUrl = `${productUrl}?${queryString}`;
  const userAuthToken = cookies().get("token");

  const token = userAuthToken?.value;

  const response = await fetch(fullUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const createProduct = async (data: any) => {
  const userAuthToken = cookies().get("token");
  const token = userAuthToken?.value;
  const response = await fetch(ProductCreateUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });

  return response.json();
};

const revalidateProductsPagePath = () => revalidatePath("/products");
export const ApproveProductActions = async (data: any) => {
  const userAuthToken = cookies().get("token");
  const token = userAuthToken?.value;

  try {
    const response = await fetch(ApproveProductUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    const res = await response.json();
    if (res.statusCode === 200) {
      revalidateProductsPagePath();
      return res;
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};
