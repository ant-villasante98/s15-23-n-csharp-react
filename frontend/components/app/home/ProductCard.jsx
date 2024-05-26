import React from "react";

const Card = ({ imageUrl, title}) => {
   return (
      <div className="max-w-lg rounded overflow-hidden shadow-lg">
         <div className="relative overflow-hidden">
            <img
               src={imageUrl}
               alt={title}
               className="w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
         </div>
         <div className="pt-3 font-bold text-xl pb-3 bg-transparent text-center">{title}</div>
      </div>
   );
};

export default Card;
