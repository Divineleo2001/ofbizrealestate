"use client";
import { ApproveProductActions } from "@/actions/app/products";
import Modal from "@/components/shared/Modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

import { AtparproductSchema } from "@/schemas/product";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import React from "react";
interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}
export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  // const productInfo = AtparproductSchema.parse(row.original);

  const productInfo = row.original;

  const productTypeInfo = AtparproductSchema.parse(productInfo);

  const { toast } = useToast();
  const statusNo = Number(productTypeInfo.status);

  const thumbnailNotUndefined =
    productTypeInfo.thumbnailImagePath === undefined ||
    productTypeInfo.thumbnailImagePath === null ||
    productTypeInfo.thumbnailImagePath === "error"
      ? false
      : true;

  const disable = thumbnailNotUndefined
    ? statusNo !== 0
      ? true
      : false
    : true;

  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=openReschedule]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem
            disabled={disable}
            className="hover:cursor-pointer flex justify-center"
            onClick={async () => {
              const data = JSON.stringify(productInfo);
              try {
                console.log(data);
                const res = await ApproveProductActions(data);
                if (res.statusCode === 200) {
                  console.log("Product Approved");
                  toast({
                    title: "Product Approved",
                    description: "Product Approved successfully",
                    className: "bg-green-500",
                  });
                }
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Approve
          </DropdownMenuItem>
          <DropdownMenuItem
            // programitacallly disable
            className="hover:cursor-pointer flex justify-center "
            onClick={() => {
              console.log(statusNo);
            }}
          >
           Upload
          </DropdownMenuItem>
          {/* <Button disabled={!templateditEligibility} onClick={() => setOpenReportTemplateEditor(true)}>
            {templateditEligibility
              ? templateReportTobefilled
                ? "Edit"
                : "Add"
              : "No Parent ID so it cannot be filled"}
          </Button> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
