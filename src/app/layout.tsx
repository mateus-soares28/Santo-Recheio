import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();
const preview = process.env.VERCEL_ENV === "preview";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Santo Recheio | Bolos de pote e empadões artesanais",
  icons: { icon: "/img/logo.jpg" },
  description:
    "Conheça os bolos de pote, tortas salgadas e empadões da Santo Recheio. Descubra os produtos e fale com a confeitaria para fazer seu pedido.",
  openGraph: {
    title: "Santo Recheio | Confeitaria Artesanal",
    description: "Bolos de pote, tortas salgadas e empadões para saborear com carinho.",
    url: siteUrl,
    type: "website",
    locale: "pt_BR",
    images: [{ url: new URL("/img/logo-2.jpg", siteUrl).toString(), width: 1600, height: 600, alt: "Santo Recheio Confeitaria Artesanal" }],
  },
  alternates: { canonical: siteUrl },
  robots: { index: !preview, follow: !preview },
  verification: { google: "8Sw_TpcUhkNkYmIKkVFSmJH_Dc_S4M2foUFdj7PZC0o" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
