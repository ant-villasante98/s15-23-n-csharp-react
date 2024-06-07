
import Navbar from "@/components/layout/Navbar/Navbar";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pasteleria X",
  description: "Pasteleria X description",
  image:
    "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div>
          <Toaster />
        </div>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
