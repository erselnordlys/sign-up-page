import { SAVE_STATE } from "../constants/action-types";
export const saveState = state => ({ type: SAVE_STATE, payload: state });