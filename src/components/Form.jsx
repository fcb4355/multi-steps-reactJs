import { Divider } from "@heroui/react";

// ========= Components ========= //
import Circels from './Circels.jsx';
import Step1 from './Step1.jsx';
import Step2 from './Step2.jsx';
import Step3 from './Step3.jsx';
import Step4 from "./Step4.jsx";
import Done from "./Done.jsx";
import ActionButtons from './ActionButtons.jsx';

import { useContext } from "react";
import AppContext from "../contexts/contextData";
import { div } from "framer-motion/client";


function Form() {

   const contextData = useContext(AppContext);
   let step = contextData.step;

   const renderStep = () => {
      switch (step) {
         case 1:
            return <Step1 />;
         case 2:
            return <Step2 />;
         case 3:
            return <Step3 />;
         case 4:
            return <Step4 />;
         case 5:
            return <Done />;
         default:
            return <Step1 />;
      }
   };

   return (
      <div className="form-container">

         <h1 className="text-3xl text-center">Join our Community of Developers.</h1>
         <div className="text-center text-sm text-gray-500">To join our Community and participate in frontend challenges please fill out the following form.</div>

         <form action="" className="form mt-8 p-5 rounded-md">

            {step < 5
               ?
               <>
                  <Circels />
                  <Divider className="my-5 bg-gray-200" />
               </>
               : ''
            }


            {renderStep()}

            {step < 5
               ?
               <>
                  <Divider className="my-5 bg-gray-200" />
                  <ActionButtons />
               </>
               : ''
            }

         </form>

         {/* <Done /> */}

      </div>
   )
}

export default Form