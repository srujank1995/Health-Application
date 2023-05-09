import { useContext } from "react";
import ContextMain from "../Context/Context-main";

const TableData = () => {
  const ContextTableData = useContext(ContextMain);
  const { ContextState } = ContextTableData;
  return (
    <div>
      <table>
        <tr>
          <td>Health Attribute</td>
          <td>Health Data</td>
          <td>Unit</td>
        </tr>

        <tr>
          <td>{ContextState.BP.name}</td>
          <td>{ContextState.BP.value}</td>
          <td>(mmHg)</td>
        </tr>
        <tr>
          <td>{ContextState.HR.name}</td>
          <td>{ContextState.HR.value}</td>
          <td>(BPM)</td>
        </tr>
        <tr>
          <td>{ContextState.SBP.name}</td>
          <td>{ContextState.SBP.value}</td>
          <td>(mmHg)</td>
        </tr>
        <tr>
          <td>{ContextState.DBP.name}</td>
          <td>{ContextState.DBP.value}</td>
          <td>(mmHg)</td>
        </tr>
        <tr>
          <td>{ContextState.BTemp.name}</td>
          <td>{ContextState.BTemp.value}</td>
          <td>(&deg;C)</td>
        </tr>
        <tr>
          <td>{ContextState.SL.name}</td>
          <td>{ContextState.SL.value}</td>
          <td>(HRV)</td>
        </tr>
        <tr>
          <td>{ContextState.SR.name}</td>
          <td>{ContextState.SR.value}</td>
          <td>(mmol/L)</td>
        </tr>
      </table>
    </div>
  );
};

export default TableData;
