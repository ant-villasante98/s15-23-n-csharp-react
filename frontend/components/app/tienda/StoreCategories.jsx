"use client";
import { $Category } from "@/stores/products";
import { useStoreCategories } from "./useStoreCategories";

export const StoreCategories = () => {
  const { categorias } = useStoreCategories();
  return (
    <div>
      <ul className="flex gap-8 flex-wrap items-center justify-center">
        {categorias.map((category) => (
          <li
            key={category.category}
            className="text-primario text-2xl font-bold"
          >
            <button
              className="group flex flex-col items-center justify-center gap-2"
              onClick={() => $Category.set(category.category.toLowerCase())}
            >
              <img
                alt={category.category}
                src={category.image}
                className=" w-[10rem] h-[10rem] rounded-full object-cover shadow-sm group-hover:scale-95 transition-transform duration-100 ease-in-out"
              />

              {category.category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
