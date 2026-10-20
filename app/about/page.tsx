import type { Metadata } from "next";
import About from "@/components/About/About";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Experiência, skills e ferramentas de Pedro Klaus, desenvolvedor full-stack pleno na Linked Data (C#, ASP.NET Core, React e Next.js).",
  alternates: { canonical: "/about/" },
};

export default function Page() {
  return <About />;
}
