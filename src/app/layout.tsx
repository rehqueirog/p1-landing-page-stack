import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renato Queiroga | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full-Stack especializado em React, Next.js, TypeScript e Node.js. Unindo 8 anos de experiência em educação ao poder do código para criar aplicações web eficientes.",
  authors: [{ name: "Renato Queiroga" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <head>
        <link rel="icon" type="image/icon" sizes="16x16" href="/img/favicon.png" />
      </head>
      <body>
        {children}
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" async />
      </body>
    </html>
  );
}