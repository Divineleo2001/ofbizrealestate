import { z } from 'zod'

const signInSchema = z.object({
    username: z.string(),
    password: z.string().min(3)
})


const fileSchema = z.object({
  username:z.array(z.instanceof(File)),
})




export { signInSchema, fileSchema }