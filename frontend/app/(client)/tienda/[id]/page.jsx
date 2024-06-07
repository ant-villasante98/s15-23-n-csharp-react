export default function StoreItem({ params }) {
  return (
    <main className="flex min-h-screen flex-col">
      <div>Item id: {params.id}</div>
    </main>
  );
}
