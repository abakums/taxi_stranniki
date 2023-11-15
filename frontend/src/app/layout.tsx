import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import type { IChild } from "@/types";
import "./globals.scss";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Quiz",
  description: "Quiz",
};

export default function RootLayout({ children }: IChild) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Container>
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
