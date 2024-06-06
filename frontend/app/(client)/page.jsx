import Hero from "@/components/app/home/Hero.jsx";
import NuestrosProductos from "@/components/app/home/NuestrosProductos.jsx";
import SeccionMapa from "@/components/app/home/SeccionMapa.jsx";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col">
         <Hero />
         <NuestrosProductos></NuestrosProductos>
         <SeccionMapa></SeccionMapa>
      </main>
   );
}
