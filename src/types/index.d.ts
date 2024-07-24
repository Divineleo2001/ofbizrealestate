import { fileSchema, signInSchema } from "@/schemas/authSchemas";
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
