import { StoreCategories } from "@/components/app/tienda/StoreCategories";
import { StoreHero } from "@/components/app/tienda/StoreHero";
import { StoreProducts } from "@/components/app/tienda/StoreProducts";

export const metadata = {
  title: "Tienda / Pasteleria y Reposteria X",
  description:
    "Encuentra los mejores productos de pasteleria y reposteria en Pasteleria X",
};

export default function Store({ searchParams }) {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <StoreHero />
      <StoreCategories />
      <StoreProducts searchParams={searchParams} />
    </main>
  );
}
