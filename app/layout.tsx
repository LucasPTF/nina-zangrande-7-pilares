import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Os 7 Pilares da Empresária da Beleza | Nina Zangrande",
  description:
    "Curso online com aulas gravadas e encontros ao vivo para profissionais da beleza que querem organizar, valorizar e fazer o negócio crescer.",
  metadataBase: new URL("https://nina-zangrande-7-pilares.dinizdcgd.chatgpt.site"),
  openGraph: {
    title: "Os 7 Pilares da Empresária da Beleza",
    description: "Você já domina a beleza. Agora é hora de dominar o negócio.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Os 7 Pilares da Empresária da Beleza — Nina Zangrande" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Os 7 Pilares da Empresária da Beleza",
    description: "Você já domina a beleza. Agora é hora de dominar o negócio.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
