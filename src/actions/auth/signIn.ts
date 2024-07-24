"use server";
import { signInForm } from "@/types";


export const signInUser = async (data: signInForm) => {
  const authenticateUrl = process.env.BACKEND_URL + "/rest/auth/token";
  const encode = btoa(`${data.username}:${data.password}`);

  const response = await fetch(authenticateUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Basic ${encode}`,
    }
    
  });

  const responseData = await response.json();
  console.log(responseData);
  return responseData

};
