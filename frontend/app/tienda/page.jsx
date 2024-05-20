import { StoreProducts } from "@/components/app/tienda/StoreProducts";
import { cakeWaves } from "@/components/app/tienda/cakeWaves";
import Image from "next/image";

export default function Store() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <section>
        <div className="h-80 overflow-hidden bg-[#FFD6EB]">
          <div className=" flex flex-col justify-center items-center gap-10 absolute pl-80 top-40">
            <p className="text-6xl text-[#B892FF] font-DancingScript">
              Tienda de Pasteles y Repostería
            </p>
            <p className="text-2xl text-[#5f4b85] font-bold">
              Tortas, pasteles, cupcakes, galletas, brownies, y mucho más.
            </p>
          </div>
        </div>
        <div className=" relative ">
          {cakeWaves()}

          <Image
            className="absolute right-[-8rem] bottom-0"
            src="/postre.png"
            width={800}
            height={800}
          />
        </div>
      </section>
      <StoreProducts category={"all"} />
    </main>
  );
}
