import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

import { Roboto } from "next/font/google";

const roboto = Roboto({
   weight: ["100", "300", "400", "500", "700", "900"],
   style: "normal",
   display: "swap",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Car Showcase",
   description: "It's an car showcase website",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={`${roboto.className} font-medium`}>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
