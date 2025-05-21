import '../styles/circels.css';
import { useContext } from "react";
import AppContext from "../contexts/contextData";

function Circels() {

   const contextData = useContext(AppContext);

   let step = contextData.step;

   return (

      <div className="steps">

         <div
            className={step >= 1
               ? 'w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center'
               : 'w-9 h-9 bg-gray-200 text-black rounded-full flex items-center justify-center'}>
            1
         </div>
         <span className={step >= 2
            ? 'w-[5rem] h-1 rounded-full bg-primary'
            : 'w-[5rem] h-1 rounded-full bg-gray-200'
         }>
         </span>

         <div
            className={step >= 2
               ? 'w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center'
               : 'w-9 h-9 bg-gray-200 text-black rounded-full flex items-center justify-center'}>
            2
         </div>
         <span className={step >= 3
            ? 'w-[5rem] h-1 rounded-full bg-primary'
            : 'w-[5rem] h-1 rounded-full bg-gray-200'
         }>
         </span>

         <div
            className={step >= 3
               ? 'w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center'
               : 'w-9 h-9 bg-gray-200 text-black rounded-full flex items-center justify-center'}>
            3
         </div>
         <span className={step >= 4
            ? 'w-[5rem] h-1 rounded-full bg-primary'
            : 'w-[5rem] h-1 rounded-full bg-gray-200'
         }>
         </span>

         <div
            className={step >= 4
               ? 'w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center'
               : 'w-9 h-9 bg-gray-200 text-black rounded-full flex items-center justify-center'}>
            4
         </div>

      </div>

   )
}

export default Circels