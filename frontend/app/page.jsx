import Navbar from "@/components/layout/Navbar/Navbar.jsx";
import Hero from "@/components/app/home/Hero.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar></Navbar>
      <Hero></Hero>
    </main>
  );
}
