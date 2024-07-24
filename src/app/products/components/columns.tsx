"use client";

import { atparProductsType } from "@/types";
// atparProductsType
import { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "./data-table-row-actions";

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
    accessorKey: "thumbnailImagePath",
    header: "Thumbnail Image Path",
  },
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
