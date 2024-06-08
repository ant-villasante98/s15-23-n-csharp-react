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
            <div className="absolute w-full h-full flex items-top pt-28 bg-white bg-opacity-10 lg:pt-80 bg-blur-xsm lg:bg-opacity-0 lg:bg-blur-none">
               <div className="pt-2 lg:pl-14 pl-2 flex flex-col justify-between xl:items-start items-center w-full ">
                  <h1 className="p-2 flex-1 text-center md:text-start font-poppins font-semibold text-[#ffa8e5] font-Elegant text-6xl md:text-9xl drop-shadow-[0_1.2px_1.2px_rgba(182,113,161,0.8)] ">
                     Endulzamos <br></br>tus momentos
                  </h1>
               </div>
            </div>
         </div>
         <div className="mt-4 absolute bottom-2 w-full bg-[#FF90BC] bg-opacity-90 items-center justify-center h-64 xl:flex hidden">
            <div className="p-4">
               <p className="pt-4 text-white text-xl text-center font-bold">
                  En Baking Love trabajamos a diario para endulzar tu vida{<br></br>} Somos la opción más rica y dulce cerca
                  tuyo, para todos los momentos del día.
               </p>
            </div>
         </div>
      </section>
   );
}
