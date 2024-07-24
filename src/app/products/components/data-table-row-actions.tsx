"use client";
import Modal from "@/components/shared/Modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import React, { useState } from "react";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}
export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {

  return (
    <>
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
            className="hover:cursor-pointer flex justify-center"
            onClick={() => console.log("edit")}
          >
            edit
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
    </>
  );
}
