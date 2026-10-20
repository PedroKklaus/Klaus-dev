import type { Metadata } from "next";
import Resume from "@/components/Resume/Resume";

export const metadata: Metadata = {
  title: "Currículo",
  description: "Currículo de Pedro Henrique Klaus, desenvolvedor full-stack pleno. Disponível para download em PDF.",
  alternates: { canonical: "/resume/" },
};

export default function Page() {
  return <Resume />;
}
