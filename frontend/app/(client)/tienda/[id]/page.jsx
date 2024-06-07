import { StoreIndividualPage } from "@/components/app/tienda/item/StoreIndividualPage";

export default function StoreItem({ params }) {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="bg-primario h-[10rem]"></div>
      <StoreIndividualPage id={params.id} />
    </main>
  );
}
