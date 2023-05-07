import { StateType } from '../Attributes/MainType';


const TableData:React.FC<{state:StateType}> = (props) => {
  const {state} = props
  return (
    <div>
      <table>
          <tr>
            <td >Health Attribute</td>
            <td >Health Data</td>
            <td >Unit</td>
          </tr>
        
          <tr>
              <td >{state.BP.name}</td>
              <td >{state.BP.value}</td>
              <td >(mmHg)</td>
          </tr>
          <tr>
              <td >{state.HR.name}</td>
              <td >{state.HR.value}</td>
              <td>(BPM)</td>
          </tr>
          <tr>
              <td >{state.SBP.name}</td>
              <td >{state.SBP.value}</td>
              <td >(mmHg)</td>
          </tr>
          <tr>
              <td >{state.DBP.name}</td>
              <td >{state.DBP.value}</td>
              <td >(mmHg)</td>
          </tr>
          <tr>
              <td >{state.BTemp.name}</td>
              <td >{state.BTemp.value}</td>
              <td >(&deg;C)</td>
          </tr>
          <tr>
              <td >{state.SL.name}</td>
              <td >{state.SL.value}</td>
              <td>(HRV)</td>
          </tr>
          <tr>
              <td >{state.SR.name}</td>
              <td >{state.SR.value}</td>
              <td >(mmol/L)</td>
          </tr>       
      </table>
    </div>
  );
}

export default TableData;