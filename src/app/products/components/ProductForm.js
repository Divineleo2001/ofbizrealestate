"use client";

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
import { Textarea } from "@/components/ui/textarea";

const ProductForm = ({ createProduct, productscategoryId, productstypeId }) => {
  const [productId, setProductId] = useState("");
  const [productTypeId, setProductTypeId] = useState("");
  const [internalName, setInternalName] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [longDescription, setLongDescription] = useState("");
  const [primaryProductCategoryId, setPrimaryProductCategoryId] = useState("");
  const [result, setResult] = useState(null);

  const form = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    try {
      const base64String = await fileToBase64(uploadFile);

      const formData = {
        productId,
        productTypeId,
        internalName,
        upload_file_file: base64String,
        _upload_file_fileName: uploadFile.name,
        _upload_file_contentType: uploadFile.type,
        longDescription,
        primaryProductCategoryId,
      };
      const result = await createProduct(formData);

      const res = result.JSON()

      console.log(res.statusCode);

      setResult(result);
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
              <CardTitle className="text-2xl">Create New Item</CardTitle>
              <CardDescription>
                Fill out the details below to add a new item.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="productId"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Product ID</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="productId"
                          name="productId"
                          required
                          value={productId}
                          onChange={(e) => setProductId(e.target.value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="productTypeId"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Product Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          setProductTypeId(value);
                        }}
                        value={field.value && setProductTypeId(field.value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select the Type of product"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {productstypeId.map((item) => (
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
                name="primaryProductCategoryId"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Primary Product Category Id</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          setPrimaryProductCategoryId(value);
                        }}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select the Category"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {productscategoryId.map((item) => (
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
                name="internalName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Internal Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="internalName"
                          name="internalName"
                          required
                          value={internalName}
                          onChange={(e) => setInternalName(e.target.value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
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
              <FormField
                control={form.control}
                name="longDescription"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Long Description</FormLabel>
                      <FormControl>
                        <Textarea
                          id="longDescription"
                          name="longDescription"
                          required
                          value={longDescription}
                          onChange={(e) => setLongDescription(e.target.value)}
                        />
                      </FormControl>
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

      {result && <div id="result">{JSON.stringify(result, null, 2)}</div>}
    </>
  );
};

export default ProductForm;
