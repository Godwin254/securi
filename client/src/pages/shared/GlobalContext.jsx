import React, {createContext, useContext} from 'react'

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export function GlobalContextProvider({children, residents}) {
  return (
    <GlobalContext.Provider value={residents}> 
      {children}
    </GlobalContext.Provider>
  )
}
