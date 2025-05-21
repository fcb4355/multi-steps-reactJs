import { Button, Input } from "@heroui/react";
import { useContext } from "react";
import AppContext from "../contexts/contextData";

function Step1() {

   const contextData = useContext(AppContext);
   let info = contextData.info;
   let setInfo = contextData.setInfo;

   const handelFullName = (value) => {
      setInfo({ ...info, fullName: value });
   }
   const handelEmail = (value) => {
      setInfo({ ...info, email: value });
   }
   const handelPhone = (value) => {
      setInfo({ ...info, phone: value });
   }
   const handelPortfolio = (value) => {
      setInfo({ ...info, linkPortfolio: value });
   }


   return (
      <div className="step-one">

         <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
         <span className="text-sm text-gray-500">Please provide your personal details so we can get to know you better.</span>

         <div className="grid grid-cols-2 gap-4 mt-5">

            <Input isRequired label="Full Name" type="text" value={info.fullName} onChange={(e) => handelFullName(e.target.value)} />

            <Input isRequired label="Email Address" type="email" value={info.email} onChange={(e) => handelEmail(e.target.value)} />

            <Input isRequired label="Phone Number" type="text" value={info.phone} onChange={(e) => handelPhone(e.target.value)} />

            <Input isRequired label="Portfolio / Github Link" type="text" value={info.linkPortfolio} onChange={(e) => handelPortfolio(e.target.value)} />

         </div>

      </div>
   )
}

export default Step1