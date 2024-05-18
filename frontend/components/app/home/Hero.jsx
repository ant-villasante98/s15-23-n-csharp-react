"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
   return (
      <section className="relative pt-18">
         <div className="flex">
            <Image
               src="/kekis2.jpg"
               width={1360}
               height={768}
               alt="Delicious Cupcakes"
               priority={true}
               className="w-full h-auto object-cover"
            />
            <div className="absolute w-full h-full flex items-top pt-96">
               <div className="pl-14 flex flex-col justify-between md:items-start items-center w-full ">
                  <h1 className="p-2 flex-1 text-center md:text-start font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[75px] leading-[75px]">
                     Endulzamos <br></br>tus momentos
                  </h1>
               </div>
            </div>
         </div>
         <div className="absolute bottom-2 w-full bg-[#FF90BC] bg-opacity-90 flex items-center justify-center h-64">
            <div className="p-4">
               <p className="text-white text-xl text-center font-bold">
                  En Buenos Aires Bakery trabajamos a diario para que a tu mesa lleguen los
                  productos más ricos y sanos.{<br></br>} Somos la opción más rica y cerca
                  tuyo, para todos los momentos del día.
               </p>
            </div>
         </div>
      </section>
   );
}
