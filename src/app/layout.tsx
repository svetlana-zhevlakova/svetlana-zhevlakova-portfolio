import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TopNavigation } from "@/components/nav/TopNavigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website"
};

const overusedGrotesk = localFont({
  src: [
    { path: "../../public/fonts/OverusedGrotesk-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/OverusedGrotesk-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../../public/fonts/OverusedGrotesk-Book.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/OverusedGrotesk-BookItalic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/OverusedGrotesk-Roman.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/OverusedGrotesk-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/OverusedGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/OverusedGrotesk-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../../public/fonts/OverusedGrotesk-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/OverusedGrotesk-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "../../public/fonts/OverusedGrotesk-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/OverusedGrotesk-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../../public/fonts/OverusedGrotesk-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../../public/fonts/OverusedGrotesk-ExtraBoldItalic.woff2", weight: "800", style: "italic" },
    { path: "../../public/fonts/OverusedGrotesk-Black.woff2", weight: "900", style: "normal" },
    { path: "../../public/fonts/OverusedGrotesk-BlackItalic.woff2", weight: "900", style: "italic" }
  ],
  display: "swap",
  variable: "--font-overused-grotesk"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className={overusedGrotesk.variable}>
      <body className={overusedGrotesk.className}>
        <TopNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

