import { Checkbox } from "@heroui/react";
import { useState, useContext } from "react";
import AppContext from "../contexts/contextData.js";

function Step3() {
   const { challenges, setChallenges } = useContext(AppContext);

   const listChallenges = [
      { id: 1, label: "HTML / CSS / JS" },
      { id: 2, label: "React JS" },
      { id: 3, label: "Angular JS" },
      { id: 4, label: "Vue JS" },
   ];

   const handleToggle = (id) => {
      setChallenges((prev) =>
         prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
   };


   return (
      <div className="step-two">
         <h2 className="text-xl font-semibold text-gray-800">Challenges Preference</h2>
         <span className="text-sm text-gray-500">
            Please tell us which frontend challenges you would like to participate in.
         </span>

         <div className="grid grid-cols-2 gap-4 mt-5">
            {listChallenges.map((item) => (
               <label
                  key={item.id}
                  htmlFor={item.id}
                  className={`flex items-center gap-3 p-4 rounded-md border cursor-pointer select-none transition
            ${challenges.includes(item.id)
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-white border-gray-300 hover:border-primary"}
            `}
               >
                  <Checkbox
                     id={item.id}
                     name="challenges"
                     checked={challenges.includes(item.id)}
                     isSelected={challenges.includes(item.id)}
                     onChange={() => handleToggle(item.id)}
                  />
                  <span className="text-sm font-medium">{item.label}</span>
               </label>
            ))}
         </div>
      </div>
   );
}

export default Step3;
