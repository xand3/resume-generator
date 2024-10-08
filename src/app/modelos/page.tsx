import Resume from "../components/Resume/Resume";
import { Container } from "@mui/material";
import Link from "next/link";

function ModelsPage() {
  return (
    <Container maxWidth="md">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-primary-blue">
          Escolha seu modelo
        </h1>
      </div>

      <div className="mt-20">
        <Link href="/edicao">
        <Resume />
        </Link>
        
      </div>
    </Container>
  );
}

export default ModelsPage;
