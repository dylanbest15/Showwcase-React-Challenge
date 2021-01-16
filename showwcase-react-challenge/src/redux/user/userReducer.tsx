import { SAVE_USER } from "./userTypes";

const initialState = {
  userName: ""
}

const userReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case SAVE_USER: return {
      ...state,
      userName: action.payload.userName
    }
    default: return state
  }
}

export default userReducer;