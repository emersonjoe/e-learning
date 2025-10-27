import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {

  return (
    <>
      <h1>Ewig Lab</h1>
      <Button>Click Me</Button>
    </>
  );
}
