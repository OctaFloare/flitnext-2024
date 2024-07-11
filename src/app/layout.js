import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} bg-[url('../assets/background.jpg')] h-full bg-center bg-cover bg-repeat-y`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
