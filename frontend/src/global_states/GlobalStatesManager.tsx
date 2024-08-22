import { createContext, useState } from "react";
import { ChildrenTypeProps, UseStateType } from "../types/types";
import ConfigManager from "./ConfigManager";

export const GlobalStateProvider = createContext(null as unknown as UseStateType)

const GlobalStatesManager = ({children} : ChildrenTypeProps) => {
    const [data, setData] = useState(null as any)

  return (
    
        <GlobalStateProvider.Provider value={{data, setData}} >
          <ConfigManager>
            {children}
          </ConfigManager>
        </GlobalStateProvider.Provider>
  )
}

export default GlobalStatesManager
