"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import React, { useEffect } from "react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Filter Atpar Product Id ... "
          value={
            (table.getColumn("atparProductId")?.getFilterValue() as string) ??
            ""
          }
          onChange={(e) => {
            table.getColumn("atparProductId")?.setFilterValue(e.target.value);
          }}
          className="max-w-sm"
        />
        <Input
          placeholder="Filter Product Id ... "
          value={
            (table.getColumn("productId")?.getFilterValue() as string) ?? ""
          }
          onChange={(e) => {
            table.getColumn("productId")?.setFilterValue(e.target.value);
          }}
          className="max-w-sm"
        />
      </div>

      <DataTableViewOptions table={table} />
    </div>
  );
}
