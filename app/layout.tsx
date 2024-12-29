import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const interItalic = localFont({
  src: "./fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf",
  variable: "--inter-italic",
});

const inter = localFont({
  src: "./fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--inter",
});

const micromaRegular = localFont({
  src: "./fonts/Michroma-Regular.ttf",
  variable: "--microma-regular",
});

export const metadata: Metadata = {
  title: "Laser Art Show",
  description: "Des shows laser, partout en France et dans le monde (mapping laser, aurores boréales, show volumétrique...). Une manière unique, innovante et originale de mettre en valeur vos évènements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <html lang="fr">
      <body
        className={`${interItalic.variable} ${inter.variable} ${micromaRegular.variable} antialiased bg-black text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}