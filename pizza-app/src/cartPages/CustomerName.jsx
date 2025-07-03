import { createContext, useContext, useState } from "react";

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [name, setName] = useState("");

  return (
    <CustomerContext.Provider value={{ name, setName }}>
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("useCustomer must be used within a CustomerProvider");
  }
  return context;
}
