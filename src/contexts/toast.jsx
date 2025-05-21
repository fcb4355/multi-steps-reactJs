import { HeroUIProvider } from '@heroui/react'
import { ToastProvider } from "@heroui/toast";

const Providers = ({ children }) => {
   return (
      <HeroUIProvider>
         <ToastProvider placement='top-center' />
         {children}
      </HeroUIProvider>
   )
}

export default Providers