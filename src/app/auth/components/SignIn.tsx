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
import { cookies } from "next/headers";
const SignIn = () => {
  const router = useRouter();

  const form = useForm<signInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = async (data: signInForm) => {
    const response = await signInUser(data);
    console.log(response);

    const { access_token }: { access_token: string } = response.data;

    cookieLogin({ token: access_token });

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
