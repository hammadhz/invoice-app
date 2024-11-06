"use client";
import React, { SyntheticEvent, useState, startTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createAction } from "@/app/actions";
import SubmitButton from "@/components/SubmitButton";
import Form from "next/form";

const page = () => {
  const [state, setState] = useState("ready");
  async function handleSubmit(e: SyntheticEvent) {
    if (state === "pending") {
      e.preventDefault();
      return;
    }
    setState("pending");
    // const target = e.target as HTMLFormElement;
    // startTransition(async () => {
    //   const formData = new FormData(target);
    //   await createAction(formData);
    // });
  }
  return (
    <main className="flex flex-col justify-center gap-6 h-full  max-w-5xl mx-auto py-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Create Invoice</h1>
      </div>
      <Form
        action={createAction}
        onSubmit={handleSubmit}
        className="grid gap-4 max-w-xs"
      >
        <div>
          <Label htmlFor="name" className="block mb-2 font-semibold text-sm">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="block mb-2 font-semibold text-sm">
            Billing Email
          </Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div>
          <Label htmlFor="value" className="block mb-2 font-semibold text-sm">
            Value
          </Label>
          <Input id="value" name="value" type="text" />
        </div>
        <div>
          <Label
            htmlFor="description"
            className="block mb-2 font-semibold text-sm"
          >
            Description
          </Label>
          <Textarea id="description" name="description"></Textarea>
        </div>
        <div>
          <SubmitButton />
        </div>
      </Form>
    </main>
  );
};

export default page;
