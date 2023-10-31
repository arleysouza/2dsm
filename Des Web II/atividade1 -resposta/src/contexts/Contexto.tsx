import { createContext, useEffect, useState } from "react";
import loteria from "../services/Loteria";
import { LoteriaProps, Props } from "../types";

export const Contexto = createContext({} as LoteriaProps);

export function Provider({children}:any) {
  const [megasena,setMegasena] = useState({} as Props);
  const [lotofacil,setLotofacil] = useState({} as Props);
  
  function testar(){
    loteria.get()
    .then(r => {
      setMegasena(r.megasena);
      setLotofacil(r.lotofacil);
    })
    .catch(e => console.log(e.message));
  }

  useEffect(testar,[]);

  return (
    <Contexto.Provider value={{megasena,lotofacil}}>
      {children}
    </Contexto.Provider>
  );
}

