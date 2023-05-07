import { createContext } from "react";

const ContextMain = createContext({
    inputVal : 0,
    setInputVal: (value:number) =>{}
});

export default ContextMain;
