import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-max">
      <div className="h-60 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-primary-blue">
          Resume Generator
        </h1>
      </div>
      <div className="h-60 flex justify-center items-center">
        <Button className="" variant="contained">
          <Link href="/modelo">INICIAR</Link>
        </Button>
      </div>
    </main>
  );
}
