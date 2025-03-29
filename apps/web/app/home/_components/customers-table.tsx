'use client';

import { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from "@kit/ui/data-table";

export interface Customer {
  id: number;
  name: string;
  age: number;
  gender: string;
}

export default function CustomersTable({ data }: { data: Customer[] }) {
  const [pageIndex, setPageIndex] = useState(0);

  const perPage = 2;
  const total = data?.length ?? 0;
  const pageCount = Math.ceil(total / perPage);
  const paginatedData = data?.slice(pageIndex * perPage, (pageIndex + 1) * perPage) ?? [];

  const columns: ColumnDef<Customer>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    { header: 'Age', accessorKey: 'age' },
    { header: 'Gender', accessorKey: 'gender' },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="text-2xl font-bold">Customers</div>

        <div className="flex justify-left space-x-2 gap-4">
          <button
            onClick={() => setPageIndex(pageIndex - 1)}
            disabled={pageIndex === 0}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            Previous
          </button>

          <span>Page {pageIndex + 1} / {pageCount}</span>

          <button
            onClick={() => setPageIndex(pageIndex + 1)}
            disabled={pageIndex >= pageCount - 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            Next
          </button>
        </div>

        <DataTable<Customer>
          onPaginationChange={(pagination) => setPageIndex(pagination.pageIndex)}
          pageIndex={pageIndex}
          pageCount={pageCount}
          data={paginatedData}
          columns={columns}
        />
      </div>
    </>
  );
}
