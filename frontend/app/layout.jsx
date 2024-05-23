import Navbar from "@/components/layout/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Cart from "@/components/Cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pasteleria X",
  description: "Pasteleria X description",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* <Navbar />
        {children} */}
        <Cart/>
      </body>
    </html>
  );
}
