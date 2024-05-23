import Image from "next/image";
import { CakeWaves } from "./cakeWaves";

export const StoreHero = () => {
  return (
    <section>
      <div className="h-80 overflow-hidden bg-cuaternario">
        <div className=" flex flex-col justify-center items-center gap-10 absolute pl-80 top-40">
          <p className="text-6xl text-terciario font-DancingScript">
            Tienda de Pasteles y Repostería
          </p>
          <p className="text-2xl text-primario font-bold">
            Tortas, pasteles, cupcakes, galletas, brownies, y mucho más.
          </p>
        </div>
      </div>
      <div className=" relative ">
        <CakeWaves className="text-cuaternario" />

        <Image
          priority
          alt="Postre"
          className="absolute right-[-8rem] bottom-0"
          src="/postre.png"
          width={800}
          height={631}
        />
      </div>
    </section>
  );
};
