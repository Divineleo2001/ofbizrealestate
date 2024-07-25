"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ProductCategory, ProductsCreationTypes } from "@/types";
import { Input } from "@/components/ui/input";
import { productCreationSchema } from "@/schemas/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SelectTrigger } from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const ProductsCreate = ({
  productscategoryId,
  productstypeId,
}: {
  productscategoryId: string[];
  productstypeId: string[];
}) => {
  const form = useForm({
    resolver: zodResolver(productCreationSchema),
    defaultValues: {
      productId: "",
      productTypeId: "",
      internalname: "",
      upload_file: "",
      upload_file_file: "",
      _upload_file_fileName: "",
      _upload_file_contentType: "",
      longDescription: "",
      status: "",
      introductionDate: "",
      primaryProductCategoryId: "",
    },
  });

  const onSubmit = async (data: ProductsCreationTypes) => {
    console.log(data);
  };

  return (
    <main className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="productId"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Product Id</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Product Id" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="primaryProductCategoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Product Category Id</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {productscategoryId.map((item) => (
                        <SelectItem key={item} value={item.toString()}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </main>
  );
};

export default ProductsCreate;
