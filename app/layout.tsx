import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Os 7 Pilares da Empresária da Beleza | Nina Zangrande",
  description:
    "Workshop online e ao vivo com Nina Zangrande para profissionais da beleza que querem organizar o negócio, identificar gargalos e crescer com direção.",
  metadataBase: new URL("https://nina-zangrande-7-pilares.dinizdcgd.chatgpt.site"),
  openGraph: {
    title: "Os 7 Pilares da Empresária da Beleza",
    description: "Você sabe fazer seu trabalho. Agora falta fazer o negócio funcionar.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Os 7 Pilares da Empresária da Beleza — Nina Zangrande" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Os 7 Pilares da Empresária da Beleza",
    description: "Você sabe fazer seu trabalho. Agora falta fazer o negócio funcionar.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
