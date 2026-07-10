import { colors, darkColors } from "../../../Config/theme";
import types from "./action";

// Aurora Dark is the default first impression; toggle still switches to light.
const initialState = {
  userdata: {},
  themeData: darkColors,
  switchBool: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER_DATA:
      localStorage.setItem("userData", JSON.stringify(action.userdata));
      return {
        ...state,
        userdata: action.userdata,
      };
    case types.SET_THEME_DATA:
      return {
        ...state,
        themeData: action.themeData,
      };
    case types.SET_SWITCH_BOOL:
      return {
        ...state,
        switchBool: action.switchBool,
      };
    case types.CLEAR_ALL_STORAGE_DATA:
      localStorage.removeItem("userData");
      return {
        ...state,
        userdata: {},
        themeData: colors,
        switchBool: false,
      };
    default:
      return state;
  }
}
