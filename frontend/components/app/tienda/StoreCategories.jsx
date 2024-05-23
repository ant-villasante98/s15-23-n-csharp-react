"use client";
import { $Category, $Products } from "@/stores/products";
import { useStore } from "@nanostores/react";

export const StoreCategories = () => {
  const allProducts = useStore($Products);
  const categorias = [
    ...new Set(allProducts.map((product) => product.category)),
  ].map((category) => ({
    category,
    image: allProducts.find((product) => product.category === category).image,
  }));
  categorias.unshift({
    category: "Todo",
    image:
      "https://images.pexels.com/photos/4913389/pexels-photo-4913389.jpeg?auto=compress&cs=tinysrgb&w=600",
  });
  return (
    <div>
      <ul className="flex gap-8 flex-wrap items-center justify-center">
        {categorias.map((category) => (
          <li
            key={category.category}
            className="text-[#5f4b85] text-2xl font-bold"
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
