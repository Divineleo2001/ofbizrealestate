import { fileSchema, signInSchema } from "@/schemas/authSchemas";
import * as z from "zod";

declare type StoreTokenRequest = {
  token: string;
};

declare type signInForm = z.infer<typeof signInSchema>;

declare type fileForm = z.infer<typeof fileSchema>;

declare type Productstype = {

  createdStamp: string;
  mediumImageUrl: string;
  productName: string;
  originalImageUrl: string;
  inShippingBox: string;
  detailImageUrl: string;
  billOfMaterialLevel: string;
  lotIdFilledIn: string;
  createdByUserLogin: string;
  requireAmount: string;
  productId: string;
  smallImageUrl: string;
  primaryProductCategoryId: string;
  createdTxStamp: string;
  lastUpdatedTxStamp: string;
  isVirtual: string;
  amountUomTypeId: string;
  internalName: string;
  lastModifiedByUserLogin: string;
  inventoryItemTypeId: string;
  lastUpdatedStamp: string;
  lastModifiedDate: string;
  orderDecimalQuantity: string;
  productTypeId: string;
  createdDate: string;
  isVariant: string;
  largeImageUrl: string;


}

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
  thumbnailImagePath: string | undefined;
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