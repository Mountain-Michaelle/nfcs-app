import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '../Components/Partials/Navbar';
import Navbar from "../Components/Partials/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFCS St. Augustine Catholic Chaplaincy Enugu",
  description: "Nigeria Federation of Catholic Students(NFCS) St. Augustine Catholic Chaplaincy Institute of Management and Technology Enugu(IMT)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}