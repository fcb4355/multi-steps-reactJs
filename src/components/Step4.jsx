import { Input } from "@heroui/react";
import { useContext } from "react";
import AppContext from "../contexts/contextData.js";

function Step4() {

   const contextData = useContext(AppContext);

   let info = contextData.info;
   let skillLevel = contextData.skillLevel;
   let challenges = contextData.challenges;

   const levels = [
      { id: 1, label: 'Beginner' },
      { id: 2, label: 'Intermediate' },
      { id: 3, label: 'Advanced' },
      { id: 4, label: 'Expert' },
   ];

   const listChallenges = [
      { id: 1, label: "HTML / CSS / JS" },
      { id: 2, label: "React JS" },
      { id: 3, label: "Angular JS" },
      { id: 4, label: "Vue JS" },
   ];

   const challengesSelected = listChallenges
      .filter((item) => challenges.includes(item.id))
      .map((item) => item.label)
      .join(" - ");

   return (
      <div className="step-one">

         <h2 className="text-xl font-semibold text-gray-800">Review and Confirm</h2>
         <span className="text-sm text-gray-500">Please reiew your information to make sure everythink is accurate.</span>

         <div className="grid grid-cols-3 gap-4 mt-5">

            <Input
               isReadOnly
               className="max-w-xs"
               defaultValue={info.fullName}
               label="Full Name"
               type="text"
               variant="flat"
            />

            <Input
               isReadOnly
               className="max-w-xs"
               defaultValue={info.email}
               label="Email Address"
               type="email"
               variant="flat"
            />

            <Input
               isReadOnly
               className="max-w-xs"
               defaultValue={info.phone}
               label="Phone Number"
               type="text"
               variant="flat"
            />

            <Input
               isReadOnly
               className="max-w-xs"
               defaultValue={info.linkPortfolio}
               label="Portfolio Link"
               type="text"
               variant="flat"
            />

            <Input
               isReadOnly
               className="max-w-xs"
               defaultValue={levels[skillLevel - 1].label}
               label="Skill Level"
               type="text"
               variant="flat"
            />

            <Input
               isReadOnly
               className="max-w-xs"
               defaultValue={challengesSelected}
               label="Challenges Prefer"
               type="text"
               variant="flat"
            />

         </div>

      </div>
   )
}

export default Step4