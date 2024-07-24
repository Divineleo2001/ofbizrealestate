"use server"
import { cookies } from "next/headers";
import axios from "axios";

export const getProducts = async ( ) => {

    // const userAuthToken = 
    const productUrl = process.env.BACKEND_URL + "/rest/services/newPerformFind"
    const params = {
        inParams: JSON.stringify({
            inputFields: {},
            entityName: 'atparProduct',
            orderBy: 'productId',
            viewIndex: 0,
            noConditionFind: 'Y'
        })
    };

    const queryString = new URLSearchParams(params).toString();

    const fullProductUrl = `${productUrl}?${queryString}`;

    const userAuthToken = cookies().get("token");

    const token = userAuthToken?.value

    const response = await fetch(fullProductUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return response.json();
    


}


export const getProductType = async ( ) => {
    
}