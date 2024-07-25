import { z } from "zod";


const productCreationSchema = z.object({
    productId: z.string(),
    productTypeId : z.string(),
    internalname: z.string(),
    upload_file: z.string(),
    upload_file_file: z.string(),
    _upload_file_fileName: z.string(),
    _upload_file_contentType: z.string(),
    longDescription: z.string(),
    status: z.string(),
    introductionDate: z.string(),
    primaryProductCategoryId: z.string(),
 })

 export { productCreationSchema }