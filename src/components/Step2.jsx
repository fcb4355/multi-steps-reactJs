import { useContext } from "react";
import AppContext from "../contexts/contextData";

function Step2() {

   const { skillLevel, setSkillLevel } = useContext(AppContext);

   const handelSelected = (level) => {
      setSkillLevel(level);
   }

   const levels = [
      { id: 1, label: 'Beginner' },
      { id: 2, label: 'Intermediate' },
      { id: 3, label: 'Advanced' },
      { id: 4, label: 'Expert' },
   ];

   return (
      <div className="step-two">
         <h2 className="text-xl font-semibold text-gray-800">Skill Level</h2>
         <span className="text-sm text-gray-500">
            Please tell us about your skill level in frontend development.
         </span>

         <div className="grid grid-cols-2 gap-4 mt-5">
            {levels.map((level) => (
               <label
                  key={level.id}
                  htmlFor={`level-${level.id}`}
                  className={`flex items-center gap-4 p-3 border rounded-md cursor-pointer transition duration-200 ease-in-out select-none
               ${skillLevel === level.id ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary'}
            `}
               >
                  <input
                     type="radio"
                     id={`level-${level.id}`}
                     name="level"
                     className="hidden"
                     onChange={() => handelSelected(level.id)}
                  />
                  <div
                     className={`level-icon w-[35px] h-[35px] flex items-center justify-center rounded-full font-semibold
                  ${skillLevel === level.id ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}
               `}
                  >
                     {level.id}
                  </div>
                  <span
                     className={`text-md font-medium ${skillLevel === level.id ? 'text-primary' : 'text-gray-800'
                        }`}
                  >
                     {level.label}
                  </span>
               </label>
            ))}
         </div>
      </div>
   );
}

export default Step2