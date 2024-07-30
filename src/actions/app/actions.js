"use server";
import { cookies } from "next/headers";

const userAuthToken = cookies().get("token");
const token = userAuthToken?.value;

const ProductCreateUrl =
  process.env.BACKEND_URL + "/rest/services/createAtparProductByEvents";
const productUrl = process.env.BACKEND_URL + "/rest/services/newPerformFind";

const ProductUploadUrl =
  process.env.BACKEND_URL + "/rest/services/createProductContentSimple";

export async function createProduct(formData) {
  console.log(formData);
  const response = await fetch(ProductCreateUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const result = await response.json();
  return result;
}

export const getProduct = async () => {
  const params = {
    inParams: JSON.stringify({
      inputFields: {},
      entityName: "Product",
      orderBy: "productId",
      viewIndex: 0,
      noConditionFind: "Y",
    }),
  };
  const queryString = new URLSearchParams(params).toString();

  const fullUrl = `${productUrl}?${queryString}`;
  const response = await fetch(fullUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const UploadProduct = async (formData) => {
  console.log(formData);

  const response = await fetch(ProductUploadUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
};
