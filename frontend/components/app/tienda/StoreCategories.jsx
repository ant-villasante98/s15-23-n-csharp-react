"use client";
import { $Category } from "@/stores/products";
import { useStoreCategories } from "./hooks/useStoreCategories";

export const StoreCategories = () => {
  const { categorias } = useStoreCategories();
  return (
    <div>
      <ul className="flex gap-8 flex-wrap items-center justify-center mt-10">
        {categorias.map((category) => (
          <li
            key={category.category}
            className="text-primario text-2xl font-bold"
          >
            <button
              className="group flex flex-col items-center justify-center gap-2"
              onClick={() => $Category.set(category.category.toLowerCase())}
            >
              <div className="overflow-hidden w-[10rem] h-[10rem] rounded-full shadow-sm group-hover:shadow-md duration-500 ease-in-out">
                <img
                  alt={category.category}
                  src={category.image}
                  className=" w-[10rem] h-[10rem] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {category.category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
