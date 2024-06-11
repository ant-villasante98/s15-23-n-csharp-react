import { StoreIndividualPage } from "@/components/app/tienda/InvidvidualPage/StoreIndividualPage";

export default function StoreItem({ params }) {
  return (
    <main className="flex min-h-screen flex-col">
      <StoreIndividualPage id={params.id} />
    </main>
  );
}
