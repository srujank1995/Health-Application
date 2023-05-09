import { useContext, useRef } from "react";
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
import ContextMain from "../Context/Context-main";

const FormData = () => {
  const ModalRef: any = useRef();

  const ContextValue = useContext(ContextMain);
  const { inputVal, setInputVal, ContextState, Updateform } = ContextValue;

  console.log("ModalRef", ModalRef);
  console.log("ContextValue", ContextValue);

  return (
    <div>
      <form>
        <select ref={ModalRef}>
          <option value={Update_BP}>{ContextState.BP.name}</option>
          <option value={Update_HR}>{ContextState.HR.name}</option>
          <option value={Update_SBP}>{ContextState.SBP.name}</option>
          <option value={Update_DBP}>{ContextState.DBP.name}</option>
          <option value={Update_BTemp}>{ContextState.BTemp.name}</option>
          <option value={Update_SL}>{ContextState.SL.name}</option>
          <option value={Update_SR}>{ContextState.SR.name}</option>
        </select>
      </form>
      <br></br>
      <br></br>
      <table>
        <tr>
          <td>
            <input
              type="number"
              value={inputVal}
              onChange={(e) => {
                setInputVal(parseInt(e.target.value));
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
