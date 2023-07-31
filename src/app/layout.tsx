import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/ui/Footer";
import ScreenBox from "@/components/templates/ScreenBox";
import Header from "@/components/ui/Header";

const primary_font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nostra",
  description: "Demo app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={[primary_font.className, ""].join(" ")}>
        <Header />
        <ScreenBox appendClass="min-h-screen">{children}</ScreenBox>
        <Footer />
      </body>
    </html>
  );
}
