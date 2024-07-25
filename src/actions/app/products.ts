"use server";
import { cookies } from "next/headers";
import axios from "axios";

const productUrl = process.env.BACKEND_URL + "/rest/services/newPerformFind";
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
        })
    }
  const quesryString = new URLSearchParams(params).toString();

  const fullUrl = `${productUrl}?${quesryString}`;
  const userAuthToken = cookies().get("token"); 

  const token = userAuthToken?.value;

  const response = await fetch(fullUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return response.json()
};
