import {
  Update_BP,
  Update_BTemp,
  Update_DBP,
  Update_HR,
  Update_SBP,
  Update_SL,
  Update_SR,
} from "./MainType";
import { Actiontype, StateType } from "./MainType";

export const initialstate: StateType = {
  BP: { value: 0, name: "Blood Pressure" },
  HR: { value: 0, name: "Heart Rate" },
  SBP: { value: 0, name: "Sistolic Blood Pressure" },
  DBP: { value: 0, name: "Distolic Blood Pressure" },
  BTemp: { value: 0, name: "Body Temperature" },
  SR: { value: 0, name: "Sugar level" },
  SL: { value: 0, name: "Stress level" },
};

const Reducerfunction = (state = initialstate, action: Actiontype) => {
  switch (action.type) {
    case Update_BP:
      return {
        ...state,
        BP: { value: action.payload.value, name: state.BP.name },
      };

    case Update_HR:
      return {
        ...state,
        HR: { value: action.payload.value, name: state.HR.name },
      };

    case Update_SBP:
      return {
        ...state,
        SBP: { value: action.payload.value, name: state.SBP.name },
      };

    case Update_DBP:
      return {
        ...state,
        DBP: { value: action.payload.value, name: state.DBP.name },
      };

    case Update_BTemp:
      return {
        ...state,
        BTemp: { value: action.payload.value, name: state.BTemp.name },
      };

    case Update_SR:
      return {
        ...state,
        SR: { value: action.payload.value, name: state.SR.name },
      };

    case Update_SL:
      return {
        ...state,
        SL: { value: action.payload.value, name: state.SL.name },
      };

    default:
      return state;
  }
};
export default Reducerfunction;
