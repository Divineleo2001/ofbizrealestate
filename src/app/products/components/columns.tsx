"use client";

import { atparProductsType } from "@/types";
// atparProductsType
import { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "./data-table-row-actions";
import { AtparproductSchema } from "@/schemas/product";

export const columns: ColumnDef<atparProductsType>[] = [
  {
    accessorKey: "productId",
    header: "Product Id",
  },

  {
    accessorKey: "atparProductId",
    header: "ATPAR Product Id",
  },
  {
    accessorKey: "atparProductType",
    header: "Product Type",
  },
  {
    accessorKey: "atparProductInternalName",
    header: "Product Name",
  },
  {
    accessorKey: "longDescription",
    header: "Long Description",
  },
  {
    accessorKey: "status",
    header: "status",
    cell: ({ row }) => {
      return (
        <div className="flex text-blue-500 items-center justify-center">
          <h1>{row.getValue("status")}</h1>
        </div>
      );
    },
  },
  {
    header: "Approve Status & Upload Status",

    cell: ({ row }) => {
      const productInfo = row.original;

      const productTypeInfo = AtparproductSchema.parse(productInfo);
      const statusNo = Number(productTypeInfo.status);

      const thumbnailNotUndefined =
        productTypeInfo.thumbnailImagePath === undefined ||
        productTypeInfo.thumbnailImagePath === null ||
        productTypeInfo.thumbnailImagePath === "error"
          ? false
          : true;
      return (
        <div>
          {thumbnailNotUndefined
            ? statusNo !== 0
              ? statusNo === 1
                ? "Approved but Please Upload"
                : "Approved and Uploaded"
              : "Not Approved"
            : "No Image"}
        </div>
      );
    },
  },
  {
    accessorKey: "thumbnailImagePath",
    header: "Thumbnail Image Path",
    cell: ({ row }) => {
      if (row.getValue("thumbnailImagePath") === undefined) {
        return (
          <div className="flex text-blue-500 items-center justify-center">
            <h1>No Image</h1>
          </div>
        );
      }
      return (
        <div className="flex text-blue-500 items-center justify-center ">
          <h1>{row.getValue("thumbnailImagePath")}</h1>
        </div>
      );
    },
  },
  {
    accessorKey: "atparProductCategoryId",
    header: "Product Category Id",
  },

  // {
  //   accessorKey: "thumbnailImagePath",
  //   header: "Thumbnail Image Path",
  // },
  {
    accessorKey: "actions",
    header: () => (
      <div className="flex text-red-600 items-center justify-center">
        <h1>Actions</h1>
      </div>
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
