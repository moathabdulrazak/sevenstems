import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import LayoutProvider from "./components/layout/LayoutProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-playfair',
});

const poppins = Poppins({
  weight: ['300', '400', '500'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: "SevenStems - Luxury Floral Design",
  description: "Avant-garde floral design for those who want to make a scene. Luxury weddings, events, and installations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased`}
      >
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
