import { useReducer, useState } from "react";
import "./App.css";
import Reducerfunction, { initialstate } from "./Attributes";
import TableData from "./Components/Table-Data";
import FormData from "./Components/Form-Data";
import ContextMain from "./Components/Context-main";

const App = () => {
  const [state, dispatch] = useReducer(Reducerfunction, initialstate);
  const [inputData, setInputData] = useState<number>(0);
  const setInputValWrapper = (value:number) =>{
    setInputData(value)
  }
  const Updateform = (input: any) => {
    console.log("output", inputData);

    dispatch({
      payload: { value: inputData },
      type: input,
    });
  };

  return (
    <ContextMain.Provider value={
    {
      inputVal:inputData,
      setInputVal: setInputValWrapper
    }

    }>
      <div className="App">
        <h1>Health Application</h1>

        <TableData state={state} />
        <br></br>
        <br></br>

        <FormData
          state={state}
          Updateform={Updateform}
        />
      </div>
    </ContextMain.Provider>
  );
};

export default App;
