"use server";

import { Invoices } from "@/db/schema";
import { db } from "@/db";
import { redirect } from "next/navigation";

export async function createAction(formData: FormData) {
  const value = Math.floor(parseFloat(String(formData.get("value"))) * 100);
  const description = formData.get("description") as String;
  const name = formData.get("name") as String;
  const email = formData.get("email") as String;

  const results = await db
    .insert(Invoices)
    .values({
      value,
      description,
      name,
      email,
      status: "open",
    })
    .returning({
      id: Invoices.id,
    });

  redirect(`/invoices/${results[0].id}`);
}
