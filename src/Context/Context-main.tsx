import { Children, createContext, useReducer, useState } from "react";
import Reducerfunction, { initialstate } from "../Attributes";

const ContextMain = createContext({
  inputVal: 0,
  ContextState: initialstate,
  setInputVal: (value: number) => {},
  Updateform: (input: any) => {},
});

export const ContextWrapper = (props: any) => {
  const { Children } = props;
  const [state, dispatch] = useReducer(Reducerfunction, initialstate);

  const [inputData, setInputData] = useState<number>(0);
  const Updateform = (input: any) => {
    console.log("output", inputData);

    dispatch({
      payload: { value: inputData },
      type: input,
    });
  };
  const setInputValWrapper = (value: number) => {
    setInputData(value);
  };

  return (
    <ContextMain.Provider
      value={{
        inputVal: inputData,
        ContextState: initialstate,
        Updateform: (input: any) => {},
        setInputVal: setInputValWrapper,
      }}
    >
      {Children}
    </ContextMain.Provider>
  );
};
export default ContextMain;
