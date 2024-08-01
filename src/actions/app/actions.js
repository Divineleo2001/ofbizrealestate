"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const ProductCreateUrl =
  process.env.BACKEND_URL + "/rest/services/createAtparProductByEvents";
const productUrl = process.env.BACKEND_URL + "/rest/services/newPerformFind";

const ProductUploadUrl =
  process.env.BACKEND_URL + "/rest/services/createProductContentSimple";


const revalidateProductsPage = () => revalidatePath("/products");
export async function createProduct(formData) {
  const userAuthToken = cookies().get("token");
  const token = userAuthToken?.value;
  const response = await fetch(ProductCreateUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  revalidateProductsPage();


  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const result = await response.json();
  return result;
}

export const getProduct = async () => {
  const userAuthToken = cookies().get("token");
  const token = userAuthToken?.value;
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
  const userAuthToken = cookies().get("token");
  const token = userAuthToken?.value;
  const response = await fetch(ProductUploadUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  return response.json();
};
