import { useRef } from "react";
import {
  StateType,
  Update_BP,
  Update_BTemp,
  Update_DBP,
  Update_HR,
  Update_SBP,
  Update_SL,
  Update_SR,
} from "../Attributes/MainType";

const FormData: React.FC<{
  state: StateType;
  inputData: number;
  setInputData: any;
  Updateform: (input: any) => void;
}> = (props) => {
  const ModalRef: any = useRef();
  console.log("ModalRef", ModalRef.current.value);
  const { state, inputData, setInputData, Updateform } = props;

  return (
    <div>
      <form>
        <select ref={ModalRef}>
          <option value={Update_BP}>{state.BP.name}</option>
          <option value={Update_HR}>{state.HR.name}</option>
          <option value={Update_SBP}>{state.SBP.name}</option>
          <option value={Update_DBP}>{state.DBP.name}</option>
          <option value={Update_BTemp}>{state.BTemp.name}</option>
          <option value={Update_SL}>{state.SL.name}</option>
          <option value={Update_SR}>{state.SR.name}</option>
        </select>
      </form>
      <br></br>
      <br></br>
      <table>
        <tr>
          <td>
            <input
              type="number"
              value={inputData}
              onChange={(e) => {
                setInputData(parseInt(e.target.value));
              }}
            />
          </td>
          <td>
            <button
              type="button"
              onClick={() => {
                Updateform(ModalRef.current.value);
              }}
            >
              Submit
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default FormData;
