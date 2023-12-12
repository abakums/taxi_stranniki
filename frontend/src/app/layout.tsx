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
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script type="text/javascript" src="./metrika.js"></script>
        {/* eslint-disable-next-line @next/next/no-img-element */}
      <noscript><div><img src="https://mc.yandex.ru/watch/95781936" style={{position: 'absolute', left: '-9999px'}} alt="" /></div></noscript>
        <Container>
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
