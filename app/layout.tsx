import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"], weight: "500", variable: "--font-raleway" });

const description =
  "Portfólio de Pedro Henrique Klaus, desenvolvedor full-stack pleno em Curitiba (C#, .NET, React e Next.js). Projetos, experiência e currículo.";

export const metadata: Metadata = {
  metadataBase: new URL("https://klausdev.netlify.app"),
  title: {
    default: "Pedro Klaus | Desenvolvedor Full-Stack",
    template: "%s | Pedro Klaus",
  },
  description,
  manifest: "/manifest.json",
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "Pedro Klaus | Desenvolvedor Full-Stack",
    description: "Desenvolvedor full-stack pleno em Curitiba. C#, .NET, React e Next.js. Veja projetos, experiência e currículo.",
    images: [{ url: "/og-image.jpeg", width: 640, height: 640 }],
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  themeColor: "#0c0513",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={raleway.variable}>
      <body>
        <div className="App">
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
