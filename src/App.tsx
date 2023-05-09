import "./App.css";
import TableData from "./Components/Table-Data";
import FormData from "./Components/Form-Data";
import { ContextWrapper } from "./Context/Context-main";

const App = () => {
  return (
    <ContextWrapper>
      <div className="App">
        <h1>Health Application</h1>
        <TableData />
        <br></br>
        <FormData />
      </div>
    </ContextWrapper>
  );
};

export default App;
