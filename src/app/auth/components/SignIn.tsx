"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/schemas/authSchemas";
import { signInForm } from "@/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { signInUser } from "@/actions/auth/signIn";
import { cookieLogin } from "@/actions/auth/cookieLogin";
import { useToast } from "@/components/ui/use-toast";

const SignIn = () => {
  const router = useRouter();

  const {toast } = useToast()

  const form = useForm<signInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = async (data: signInForm) => {
    try {
      const response = await signInUser(data);
      if (response.statusCode === 200) {

        toast({
          title: "Login Successful",
          description: "You have successfully logged in",
          variant: "default",
        })
        
        const { access_token }: { access_token: string } = response.data;
        const IfTokenSet = await cookieLogin({ token: access_token });

        if (IfTokenSet === true && response.statusCode === 200) {
          router.push("/products");
          console.log("access token set in cookies");
        } else {
          console.log("access token not set in cookies");
        }
      }

      if (response.statusCode === 401) {
        console.log("invalid credentials");
      }

      if (response.statusCode === 403) {
        toast({
          title: "Internal Server Error - 403",
          description: "Backend Server not able to connect please restart the server",
          variant: "destructive",
        })
      }
      // if (IfTokenSet) {
      //   if (response.statusCode === 200) {
      //     router.push("/products");
      //   }
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="string" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <SignInButton />
        </form>
      </Form>
    </main>
  );
};

const SignInButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full mt-4" disabled={pending}>
      {pending ? "Loading..." : "Sign In"}
    </Button>
  );
};

export default SignIn;
