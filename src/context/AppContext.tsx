import {createContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Routing from '../router/Routing';
import { it } from 'vitest';
export const AppContext = createContext({});
export const AppProvider = ({children})=>{
  const {pathname}= useLocation();
  const [isOpen,setIsOpen]= useState(false);
  const toogleSideBar = (e: { currentTarget: { classList: { toggle: (arg0: string) => void; }; }; })=>{
    setIsOpen(!isOpen);
    e.currentTarget.classList.toggle('active');
  }
  let itemsMenu;
 Routing.routes.map((item, i) => {
   itemsMenu= item.children[0].children;
  });

  return <AppContext.Provider
    value={{
      isOpen,
      setIsOpen,
      toogleSideBar
    }}>
    {children}
  </AppContext.Provider>
}