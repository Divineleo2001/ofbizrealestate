"use client";
import { atparProductsType } from "@/types";
import React, { useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const ProductsList = ({ products }: { products: atparProductsType[] }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      <DataTable
        columns={columns}
        data={products}
        openModal={() => openModal()}
      />
    </div>
  );
};

export default ProductsList;
