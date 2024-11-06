import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/Container";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-6 h-screen text-center">
      <Container>
        <h1 className="text-5xl font-bold">Invoicepedia</h1>
        <div>
          <Button asChild>
            <Link href={"/dashboard"}>Sign In</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
