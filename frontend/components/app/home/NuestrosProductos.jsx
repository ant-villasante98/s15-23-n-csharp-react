import Image from "next/image";
import Card from "./ProductCard.jsx";

export default function NuestrosProductos() {
   return (
      <div className="pt-12 pt-18 pb-24">
         <div className="pl-2">
            <div className="pl-14 pr-14">
               <p className="text-gray-500 text-6xl  font-bold pb-16">Nuestros Productos</p>
               <div className="flex gap-3 flex-grow justify-between">
                  <Card imageUrl="/Panes1.jpg" title="Panes" />
                  <Card imageUrl="/Galletitas2.jpg" title="Galletitas" />
                  <Card imageUrl="/Tarta1.jpg" title="Tartas" />
               </div>
               <div className="pt-20 flex gap-3 flex-grow justify-between">
                  <Card imageUrl="/Pastel1.jpg" title="Pasteles" />
                  <Card imageUrl="/Brownie1.jpg" title="Brownies" />

                  <Card imageUrl="/Cupcake1.jpg" title="Cupcakes" />
               </div>
            </div>
         </div>
      </div>
   );
}
