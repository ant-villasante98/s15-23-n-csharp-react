import Link from "next/link";

const NavMobile = ({ path, title }) => {
   const handleButtonClick = () => {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <Link href={path}>
         <div className="block py-2 pl-3 pr-4 text-white sm:text-m 2xl:text-lg rounded md:p-0 hover:text-[#E22C53]" onClick={handleButtonClick}>
            {title}
         </div>
      </Link>
   );
};

export default NavMobile;
