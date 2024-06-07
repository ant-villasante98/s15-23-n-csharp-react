"use client";
import NavLink from "./Navlink";
import { useState } from "react";
import NavMobile from "./NavMobile";
import { useEffect } from "react";

const navLinks = [
   { title: "Inicio", path: "/", offset: -55 },
   { title: "Tienda", path: "/tienda", offset: -55 },
   { title: "Carrito", path: "/cart", offset: -130 },
   { title: "Iniciar Sesion", path: "/login", offset: -130 },
];

export default function Navbar() {
   const [navbarOpen, setNavbarOpen] = useState(false);
   const [scrolling, setScrolling] = useState(false);

   const handleScroll = () => {
      const offset = window.scrollY;
      setScrolling(offset > 0);
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);
   const scrollToSection = (path, offset) => {
      if (path.startsWith("/")) {
         window.location.href = path;
      } else {
         const element = document.querySelector(path);
         if (element) {
            const offsetTop = element.offsetTop + offset;
            window.scrollTo({
               top: offsetTop,
               behavior: "smooth",
            });
            setNavbarOpen(false);
         }
      }
   };
   return (
      <nav
         className={`fixed top-0 left-0 right-0 z-50 lg:mb-4 pb-4 shadow-sticky pr-12 ${
            scrolling
               ? " bg-[#FF90BC] bg-opacity-60  backdrop-blur-sm"
               : "md:bg-transparent bg-[#FF90BC bg-opacity-100"
         }`}
      >
         <div className="flex items-center justify-between p-4 pb-0 font-medium">
            <a href={"/"} className="ml-8 text-2xl md:text-3xl text-white font-semibold">
               <p className="ml-4 flex items-center text-2xl md:text-3xl 2xl:text-4xl">
                  {/* <img
                     src={}
                     alt="logo"
                     className="w-9 h-9 relative z-[5]"
                  /> */}
                  <span className="text-transparent bg-[#043D7A] bg-clip-text "></span>
                  <span
                     className=" text-[#ffffff] bg-clip-text hover:text-[#E22C53] font-Elegant2"
                     
                  >
                     Baking Love
                  </span>
               </p>
            </a>
            <div className="mobile-menu block md:hidden">
               {navbarOpen ? (
                  <button
                     onClick={() => setNavbarOpen(false)}
                     className="flex items-center rounded px-3 py-2 border border-white text-white "
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M6 18L18 6M6 6l12 12"
                        />
                     </svg>
                  </button>
               ) : (
                  <button
                     onClick={() => setNavbarOpen(true)}
                     aria-label="Navbar Button"
                     className="flex items-center rounded px-3 py-2 border border-white text-white hover:border-slate-200 hover:text-slate-200"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                     </svg>
                  </button>
               )}
            </div>

            <div className=" hidden md:flex md:justify-between md:w-3/2  gap-10">
               <div className="menu md:flex md:w-auto z-50 justify-between " id="navbar">
                  <ul className="flex md:space-x-8">
                     {navLinks.map((link, index) => (
                        <li key={index}>
                           <NavLink path={link.path} title={link.title} />
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
         <ul className="flex flex-col items-center">
            {navbarOpen
               ? navLinks.map((link, index) => (
                    <li key={index}>
                       <NavMobile path={link.path} title={link.title} />
                    </li>
                 ))
               : null}
         </ul>
      </nav>
   );
}
