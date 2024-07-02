import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import FloatingNav from "@/components/FloatingNav";
import { Toaster } from "@/components/ui/toaster";
import ServerNavbar from "@/components/Navbar/ServerNavbar";
import { Footer } from "@/components/Footer";
import { CartContextProvider } from "@/components/cart/CartContextProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Bloomy",
  description: "Best taple tops on the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <CartContextProvider>
          <ServerNavbar />
          <FloatingNav />
          <main className="">{children}</main>
          <Footer />
          <Toaster />
        </CartContextProvider>
      </body>
    </html>
  );
}
