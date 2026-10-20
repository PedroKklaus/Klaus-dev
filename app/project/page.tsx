import type { Metadata } from "next";
import Projects from "@/components/Projects/Projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos recentes de Pedro Klaus: inutri, Lumin Imports, Portfólio Ana Schaeffer e CCIAR.",
  alternates: { canonical: "/project/" },
};

export default function Page() {
  return <Projects />;
}
