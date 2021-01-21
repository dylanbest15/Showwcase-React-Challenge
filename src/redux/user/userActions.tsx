import { SAVE_USER } from "./userTypes";

export const saveUser = (userName: string) => {
  return {
    type: SAVE_USER,
    payload: {
      userName: userName
    }
  }
}