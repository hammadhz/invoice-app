"use server";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CirclePlus } from "lucide-react";

export default async function Home() {
  return (
    <main className="flex flex-col justify-center gap-6 h-full text-center max-w-5xl mx-auto py-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button className="inline-flex gap-2" variant={"ghost"} asChild>
            <Link href={"/invoices/new"}>
              <CirclePlus className="size-4" /> Create Invoice
            </Link>
          </Button>
        </p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] p-4">Date</TableHead>
            <TableHead className="p-4">Customer</TableHead>
            <TableHead className="p-4">Email</TableHead>
            <TableHead className="text-center p-4">Status</TableHead>
            <TableHead className="text-right p-4">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-left  p-4">
              <span className="font-semibold"> 10/31/2024 </span>
            </TableCell>
            <TableCell className="text-left p-4">
              <span className="font-semibold"> Philip J. Fry</span>
            </TableCell>
            <TableCell className="text-left p-4">
              <span className=""> fry@planetexpress.com</span>
            </TableCell>
            <TableCell className="text-center p-4">
              <Badge className="rounded-full">open</Badge>
            </TableCell>
            <TableCell className="text-right p-4">
              <span className="font-semibold"> $250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}