import { createContext, useState } from "react";

export const OptionContext = createContext();
export const OptionProvider = ({ children }) => {
  const [option, setOption] = useState();

  return (
    <OptionContext.Provider value={{ option, setOption }}>
      {children}
    </OptionContext.Provider>
  );
};
