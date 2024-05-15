import Image from "next/image";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero.jsx";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
         <Navbar></Navbar>
         <Hero></Hero>
      </main>
   );
}
