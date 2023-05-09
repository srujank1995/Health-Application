import { Children, createContext, useReducer, useState } from "react";


const ContextMain = createContext({
    inputVal : 0,
    setInputVal: (value:number) =>{}
});

export const ContextWrapper = (props:any) =>{
    const {Children} = props

    const [inputData, setInputData] = useState<number>(0);
    const setInputValWrapper = (value: number) => {
        setInputData(value);
      };
    
    return(
        <ContextMain.Provider value={{
            inputVal: inputData,
            setInputVal: setInputValWrapper,}}>
            {Children}
        </ContextMain.Provider>
    )
}
export default ContextMain;
