import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { fileForm } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { fileSchema } from '@/schemas/authSchemas';
import { z } from 'zod';




const FormOne = () => {

const {register,...form} = useForm()

const onSubmit = async(data:any) => {

  const file:File = data.picture[0]
  console.log(file)
  const buffer = await file.arrayBuffer();

  let byteArray = new Int8Array(buffer);

  console.log(byteArray)
  

  console.log(buffer)
  
  // console.log(byteArray);
  // console.log(data.picture[0]); 
}

  // const handleSubmit = (data:Schema) => {
  //   console.log(data);
 
   
  // //  const buffer = file.arrayBuffer();
  // //  let byteArray = new Int8Array(buffer)
 
  // }

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Input {...register('picture')} type="file" name="picture" />
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default FormOne