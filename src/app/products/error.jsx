"use client"; // Error components must be Client Components

import SignOut from "@/components/shared/SignOut";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col  items-center justify-center  px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-red-500 p-2 text-primary" />
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops! Something went wrong.
        </h1>
        <p className="mt-4 text-foreground">
          Please try logging in again .
        </p>
        <div className="mt-6">
        <SignOut />
        </div>
      </div>
    </div>
  );
}
