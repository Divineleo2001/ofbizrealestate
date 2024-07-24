"use client";
// import FormOne from "@/components/dashboard/FormOne";
import FileInput from "@/components/ui/FileInput";
import Image from "next/image";



export default function Home() {
  const handleSearch = async (event: any) => {
    const file: File = event.target.files[0];
    console.log(file);
    const buffer = await file.arrayBuffer();
    let byteArray = new Int8Array(buffer);
    console.log(byteArray);
  };

  const handleSubmit = async (event: any) => {
    // const file : File = event.target.files[0];
    // console.log(file);
    // const buffer = await file.arrayBuffer();
    // let byteArray = new Int8Array(buffer)
    // console.log(byteArray);
    // console.log(event.target.value);
    const formData = new FormData();
  };

  return (
    <div className="flex flex-col items-center justify-center">


   Hello
    </div>
  );
}
