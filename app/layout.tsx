import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SERVIAM",
  description:
    "Serviam Spółka Z Ograniczoną Odpowiedzialnością | NIP 8281415753 | KRS 0000691916 | REGON 368138265",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <main className="space-y-16">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
