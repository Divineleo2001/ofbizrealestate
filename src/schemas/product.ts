import { z } from "zod";

export const AtparproductSchema = z.object({
  longDescription: z.string().optional(),
  description: z.string().optional(), // Optional to match your provided data
  atparProductType: z.string().optional(),
  atparProductId: z.string().optional(),
  lastUpdatedStamp: z.string().optional(),
  productId: z.string().optional(),
  createdTxStamp: z.string().optional(),
  createdStamp: z.string().optional(),
  lastUpdatedTxStamp: z.string().optional(),
  thumbnailImagePath: z.string().optional(),
  introductionDate: z.string().optional(),
  atparProductInternalName: z.string().optional(),
  atparProductCategoryId: z.string().optional(),
  status: z.string().optional(),
});



// create a JSON Body
