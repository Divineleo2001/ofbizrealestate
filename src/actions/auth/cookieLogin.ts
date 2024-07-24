"use server"

import { StoreTokenRequest } from "@/types"
import { cookies } from "next/headers"

export async function cookieLogin({token}: {token: string}) {
    cookies().set({
      name: "token",
      value: token,
    });
  }