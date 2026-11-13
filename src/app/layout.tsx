import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Santo Recheio | Bolos de pote e empadões artesanais",
  icons: { icon: "/img/logo.jpg" },
  description:
    "Conheça os bolos de pote, tortas salgadas e empadões da Santo Recheio. Descubra os produtos e fale com a confeitaria para fazer seu pedido.",
  openGraph: {
    title: "Santo Recheio | Confeitaria Artesanal",
    description: "Bolos de pote, tortas salgadas e empadões para saborear com carinho.",
    type: "website",
    locale: "pt_BR",
    images: siteUrl
      ? [{ url: new URL("/img/logo-2.jpg", siteUrl).toString(), width: 1600, height: 600, alt: "Santo Recheio Confeitaria Artesanal" }]
      : undefined,
  },
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
