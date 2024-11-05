import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-6 h-screen text-center max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Invoicepedia</h1>
      <p>
        <Button asChild>
          <Link href={"/dashboard"}>Sign In</Link>
        </Button>
      </p>
    </main>
  );
}
