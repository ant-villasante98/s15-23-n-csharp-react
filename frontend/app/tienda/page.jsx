import { StoreCategories } from "@/components/app/tienda/StoreCategories";
import { StoreHero } from "@/components/app/tienda/StoreHero";
import { StoreProducts } from "@/components/app/tienda/StoreProducts";

export default function Store({ searchParams }) {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <StoreHero />
      <StoreCategories />
      <StoreProducts searchParams={searchParams} />
    </main>
  );
}
