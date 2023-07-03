import { Space_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Gazi Tasnuva Farhana | Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(spaceGrotesk.className, "bg-neutral-700 text-neutral-200 uppercase")}
      >
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
