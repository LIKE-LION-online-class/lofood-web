import {createContext, useEffect, useState} from "react";

export const AppContext = createContext({});
export const AppProvider = ({children})=>{

  const [isOpen,setIsOpen]= useState(false);
  const toogleSideBar = (e: { target: { classList: { toggle: (arg0: string) => void; }; }; })=>{
    setIsOpen(!isOpen);
    e.target.classList.toggle('toogle-sidebar');
  }
  return <AppContext.Provider
    value={{
      isOpen,
      setIsOpen,
      toogleSideBar
    }}>
    {children}
  </AppContext.Provider>
}