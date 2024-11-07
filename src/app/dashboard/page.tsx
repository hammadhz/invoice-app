"use server";
import React from "react";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
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
import Container from "@/components/Container";

export default async function Home() {
  const result = await db.select().from(Invoices);
  return (
    <main className=" h-full  py-12">
      <Container>
        <div className="flex justify-between mb-6">
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
            {result?.map((data) => {
              return (
                <TableRow key={data?.id}>
                  <TableCell className="font-medium text-left  ">
                    <Link
                      href={`/invoices/${data?.id}`}
                      className="font-semibold p-4"
                    >
                      {" "}
                      {new Date(data.createTs).toLocaleDateString()}{" "}
                    </Link>
                  </TableCell>
                  <TableCell className="text-left ">
                    <Link
                      href={`/invoices/${data?.id}`}
                      className="font-semibold p-4"
                    >
                      {" "}
                      Philip J. Fry
                    </Link>
                  </TableCell>
                  <TableCell className="text-left ">
                    <Link href={`/invoices/${data?.id}`} className="p-4">
                      {" "}
                      fry@planetexpress.com
                    </Link>
                  </TableCell>
                  <TableCell className="text-center ">
                    <Link href={`/invoices/${data?.id}`} className="p-4">
                      <Badge className="rounded-full">{data?.status}</Badge>
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link
                      href={`/invoices/${data?.id}`}
                      className="font-semibold p-4"
                    >
                      {" "}
                      ${data?.value / 100}
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </main>
  );
}
