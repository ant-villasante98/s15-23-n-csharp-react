import Image from "next/image";
import { CakeWaves } from "./CakeWaves";

export const StoreHero = () => {
  return (
    <section className="flex flex-col">
      <div className="pt-20 h-80 overflow-hidden bg-cuaternario px-2">
        <div className=" flex flex-col justify-center items-center gap-10 h-full">
          <p className="text-6xl text-terciario font-DancingScript z-40 text-center">
            Tienda de Pasteles y Repostería
          </p>
          <p className="text-2xl text-primario font-bold z-40">
            Tortas, pasteles, cupcakes, galletas, brownies, y mucho más.
          </p>
        </div>
      </div>
      <div className=" relative z-0">
        <CakeWaves className="text-cuaternario" />

        <Image
          priority
          alt="Postre"
          className="absolute right-[-8rem] bottom-0 hidden lg:block"
          src="/postre.png"
          width={800}
          height={631}
        />
      </div>
    </section>
  );
};
