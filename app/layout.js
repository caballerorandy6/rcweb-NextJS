import Image from "next/image";

//CSS
import "./globals.css";

//Components
import Navbar from "./ui/components/Navbar";
import Footer from "./ui/components/Footer";

//Fonts
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata = {
  title: {
    default: "RC WEB",
    template: "% | RC WEB",
  },
  description: "Randy Caballero's personal website, blog, and portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
