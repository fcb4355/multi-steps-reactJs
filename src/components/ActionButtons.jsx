import { addToast, Button } from "@heroui/react";
import { useContext } from "react";
import AppContext from "../contexts/contextData";

function ActionButtons() {

   const contextData = useContext(AppContext);

   let info = contextData.info;
   let step = contextData.step;
   let setStep = contextData.setStep;
   let skillLevel = contextData.skillLevel;
   let challenges = contextData.challenges;


   const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   };

   const isValidPhone = (phone) => {
      return /^(0[567])\d{8}$/.test(phone.replace(/\s|-/g, ''));
   };

   const showErrorToast = (message) => {
      addToast({
         title: "Error",
         description: message,
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               width={24}
               height={24}
            >
               <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
               />
            </svg>
         ),
         color: "danger",
         variant: "flat",
         timeout: '2000',
         shouldShowTimeoutProgress: true,
      });
   };


   const nexStep = () => {
      if (step <= 4) {

         // ==== Check The Step [ 1 ] ==== //
         if (step === 1) {
            if (info.fullName == '') {
               showErrorToast('Full Name Require');
            } else if (info.email == '') {
               showErrorToast('Email Require');
            } else if (!isValidEmail(info.email)) {
               showErrorToast('Email Not Valide');
            } else if (info.phone == '') {
               showErrorToast('Phone Number Required');
            } else if (!isValidPhone(info.phone)) {
               showErrorToast('Phone Number Not Valide');
            } else if (info.linkPortfolio == '') {
               showErrorToast('Link Portfolio Require');
            } else {
               setStep((prev) => prev + 1);
            }
         }

         // ==== Check The Step [ 2 ] ==== //
         if (step === 2) {
            if (skillLevel == '') {
               showErrorToast('Please Choose Your Level Skill');
            } else {
               setStep((prev) => prev + 1);
            }
         }

         // ==== Check The Step [ 3 ] ==== //
         if (step === 3) {
            if (challenges.length == 0) {
               showErrorToast('Choose at least one challenge of challenges');
            } else {
               setStep((prev) => prev + 1);
            }
         }

         // ==== Check The Step [ 4 ] ==== //
         if (step === 4) {
            setStep((prev) => prev + 1);
         }


      }
   }

   const backStep = () => {
      if (step > 1) {
         setStep((prev) => prev - 1);
      }
   }

   return (
      <div className="flex flex-wrap gap-4 items-center justify-between">
         {step > 1
            ?
            <Button color="primary" variant="ghost" onClick={backStep}>
               Back
            </Button>
            :
            <span></span>
         }
         <Button color="primary" variant="solid" onClick={nexStep}>
            {step === 4 ? "Submit" : "Next Step"}
         </Button>
      </div>
   )
}

export default ActionButtons