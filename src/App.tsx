import { useReducer, useState } from "react";
import "./App.css";
import Reducerfunction, { initialstate } from "./Attributes";
import TableData from "./Components/Table-Data";
import FormData from "./Components/Form-Data";

const App = () => {
  const [state, dispatch] = useReducer(Reducerfunction, initialstate);
  const [inputData, setInputData] = useState<number>(0);
  
  const Updateform = (input: any) => {
    console.log("output", inputData);
    
    dispatch({
      payload: { value: inputData },
      type: input,
    });
  };

  return (
    <div className="App">
      <h1>Health Application</h1>

      <TableData state={state} />
      <br></br>
      <br></br>

      <FormData
        state={state}
        inputData={inputData}
        setInputData={setInputData}
        Updateform={Updateform}
      />
    </div>
  );
};

export default App;
