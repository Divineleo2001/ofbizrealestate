"use client";
import React from "react";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { UploadProduct } from "@/actions/app/actions";

const UploadForm = ({ products }) => {
  const [productId, setProductId] = useState("");

  const [uploadFile, setUploadFile] = useState(null);
  const [result, setResult] = useState(null);

  const form = useForm();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    try {
      const base64String = await fileToBase64(uploadFile);

      const formData = {
        productId,
        upload_file_file: base64String,
        _upload_file_fileName: uploadFile.name,
        _upload_file_contentType: uploadFile.type,
      };
      console.log(formData);

      const result = await UploadProduct(formData);
      setResult(result);
      console.log(result)
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };
  return (
    <>
      <Form {...form} className="space-y-4 w-2/3 mx-auto pt-10">
        <form onSubmit={handleSubmit}>
          <Card className="w-full max-w-5xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Upload File</CardTitle>
              <CardDescription>Add a file to the system</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Primary Product Category Id</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          setProductId(value);
                        }}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select the Category"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {products.map((item) => (
                            <SelectItem key={item} value={item.toString()}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="upload_file"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Upload File</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          id="upload_file"
                          name="upload_file"
                          required
                          onChange={(e) => setUploadFile(e.target.files[0])}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button type="submit">Submit</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
};

export default UploadForm;
