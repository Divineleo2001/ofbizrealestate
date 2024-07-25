import { fileSchema, signInSchema } from "@/schemas/authSchemas";
import { productCreationSchema } from "@/schemas/product";
import * as z from "zod";

declare type StoreTokenRequest = {
  token: string;
};

declare type signInForm = z.infer<typeof signInSchema>;

declare type fileForm = z.infer<typeof fileSchema>;



declare type atparProductsType = {
  longDescription: string;
  description: string;
  atparProductType: string;
  atparProductId: string;
  lastUpdatedStamp: string;
  productId: string;
  createdTxStamp: string;
  createdStamp: string;
  lastUpdatedTxStamp: string;
  thumbnailImagePath: string;
  introductionDate: string;
  atparProductInternalName: string;
  atparProductCategoryId: string;
  status: string;
};


declare type atparProductsCreation = {
  productId: string;
  productTypeId: string;
  internalName: string;
  upload_file?: ArrayBuffer;
  upload_file_file: string;
  _upload_file_fileName: string;
  _upload_file_contentType: string;
  longDescription: string;
  status: number;
  introductionDate: string;
  primaryProductCategoryId: string;
}

declare type ProductsCreationTypes = z.infer<typeof productCreationSchema>;


declare type ProductCategory = {
  longDescription: string;
  lastUpdatedStamp: string;
  productCategoryTypeId: string;
  createdTxStamp: string;
  createdStamp: string;
  lastUpdatedTxStamp: string;
  productCategoryId: string;
  primaryParentCategoryId: string;
}

declare type ProductType = {
  lastUpdatedStamp: string;
  isPhysical: string;
  isDigital: string;
  hasTable: string;
  createdTxStamp: string;
  createdStamp: string;
  description: string;
  lastUpdatedTxStamp: string;
  productTypeId: string;
}