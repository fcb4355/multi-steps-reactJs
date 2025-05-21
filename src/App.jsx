import Form from './components/Form.jsx';
import AppContext from './contexts/contextData.js';
import Providers from "./contexts/toast.jsx";
import { useState } from 'react';

function App() {

   const [step, setStep] = useState(1);

   const [info, setInfo] = useState({
      fullName: '',
      email: '',
      phone: '',
      linkPortfolio: ''
   });

   const [skillLevel, setSkillLevel] = useState('');

   const [challenges, setChallenges] = useState([]);

   return (
      <AppContext.Provider value={{ step, setStep, info, setInfo, skillLevel, setSkillLevel, challenges, setChallenges }}>
         <Providers>
            <Form />
         </Providers>
      </AppContext.Provider>
   )
}

export default App