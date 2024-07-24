"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "./SignIn";

const AuthPage = () => {
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center pt-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-5xl capitalize font-bold ">Ofbiz</h1>
              <p className="text-balance text-muted-foreground">
                Trying it to make it better than yesterday and but less than
                tommorow
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-5 pb-10">
          <Tabs defaultValue="signin" className="w-full max-w-2xl px-5">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign in</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin" className="sm:px-5">
              <Card className="w-full ">
                <CardHeader>
                  <CardTitle className="text-2xl">Sign In </CardTitle>
                  <CardDescription>
                    Enter your username and password below to login to your
                    account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="">
                  <SignIn />
                </CardContent>
                <CardFooter />
              </Card>
            </TabsContent>
            <TabsContent value="signup" className="sm:px-5">
              <Card className="w-full ">
                <CardHeader>
                  <CardTitle className="text-2xl">Sign Up </CardTitle>
                  <CardDescription>
                    Please add the information for your new account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="">Sign Up</CardContent>
                <CardFooter />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
