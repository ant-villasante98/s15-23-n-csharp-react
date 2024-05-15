"use client"
import NavLink from "./Navlink";
import { useState } from "react";
import NavMobile from "./NavMobile";
import { useEffect } from "react";



const navLinks = [
   { title: "Productos", path: "/productos", offset: -55 },
   { title: "Realizar Pedido", path: "/pedido", offset: -130 },
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
         className={`fixed top-0 left-0 right-0 z-50 lg:mb-4 pb-4 shadow-sticky ${scrolling ? "bg-[#86DBD4] bg-opacity-40  backdrop-blur-sm" : "md:bg-transparent bg-[#00040F] bg-opacity-100"
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
                  <span className=" text-white bg-clip-text" style={{ fontFamily: 'Sometype Mono, monospace' }}>Pasteleria X</span>

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
                           <NavLink
                              path={link.path}
                              title={link.title}
                           />
                        </li>
                     ))}
                  </ul>
               </div>
               {/* darkmode */}
               <div className="text-white hidden  md:block hover:text-[#F6A9BD] hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
               </svg>
               </div>
               {/* Idioma */}
               <div className="text-white hidden  md:block hover:text-[#F6A9BD] hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
               </svg>
               </div>
            </div>
         </div>
         <ul className="flex flex-col items-center">
            {navbarOpen
               ? navLinks.map((link, index) => (
                  <li key={index}>
                     <NavMobile
                        path={link.path}
                        title={link.title}
                     />
                  </li>
               ))
               : null}
         </ul>
      </nav>
   );
}
