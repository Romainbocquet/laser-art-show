import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const gothamMedium = localFont({
  src: "./fonts/Gotham/Gotham-Medium.otf",
  variable: "--gotham-medium",
});

const gothamBold = localFont({
  src: "./fonts/Gotham/Gotham-Medium.otf",
  variable: "--gotham-bold",
});

const benzinSemibold = localFont({
  src: "./fonts/benzin-semibold.ttf",
  variable: "--benzin-semibold",
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
        className={`${benzinSemibold.variable} ${gothamMedium.variable} ${gothamBold.variable} antialiased bg-black text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}