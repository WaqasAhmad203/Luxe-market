import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "LuxeMarket - Premium Multi-Vendor Marketplace",
  description: "Discover luxury items from trusted vendors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-cream text-charcoal font-sans`}
      >
        <Providers>
          <CartProvider>
            {children}
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
