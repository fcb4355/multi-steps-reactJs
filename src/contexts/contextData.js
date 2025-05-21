import { createContext } from "react";

// 1. Create the context
const AppContext = createContext();

// 2. Create the provider component
// const ContextProvider = ({ children }) => {
//    const [step, setStep] = useState(1);
//    const [info, setInfo] = useState({
//       fullName: '',
//       email: '',
//       phone: '',
//       linkPortfolio: ''
//    });

//    return (
//       <AppContext.Provider value={{ step, setStep, info, setInfo }}>
//          {children}
//       </AppContext.Provider>
//    );
// };

// export default ContextProvider;

export default AppContext;