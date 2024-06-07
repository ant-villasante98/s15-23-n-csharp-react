import Image from "next/image";
import Card from "./ProductCard.jsx";

export default function NuestrosProductos() {
   return (
      <div className="pt-16 pt-18 pb-24">
         <div className="pl-2">
            <div className="pl-14 pr-14">
               <p className="text-gray-500 text-5xl lg:text-6xl font-bold pb-16">
                  Nuestros Productos
               </p>
               {/* Grid for desktop */}
               <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
                  <Card imageUrl="/Panes1.jpg" title="Panes" />
                  <Card imageUrl="/Galletitas2.jpg" title="Galletitas" />
                  <Card imageUrl="/Tarta1.jpg" title="Tartas" />
                  <Card imageUrl="/Pastel1.jpg" title="Pasteles" />
                  <Card imageUrl="/Brownie1.jpg" title="Brownies" />
                  <Card imageUrl="/Cupcake1.jpg" title="Cupcakes" />
               </div>
               {/* Grid for mobile */}
               <div className="grid grid-cols-2 gap-3 lg:hidden">
                  <Card imageUrl="/Panes1.jpg" title="Panes" />
                  <Card imageUrl="/Galletitas2.jpg" title="Galletitas" />
                  <Card imageUrl="/Tarta1.jpg" title="Tartas" />
                  <Card imageUrl="/Pastel1.jpg" title="Pasteles" />
                  <Card imageUrl="/Brownie1.jpg" title="Brownies" />
                  <Card imageUrl="/Cupcake1.jpg" title="Cupcakes" />
               </div>
            </div>
         </div>
      </div>
   );
}
