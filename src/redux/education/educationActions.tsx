import { ADD_EDUCATION } from "./educationTypes";

export const addEducation = (education: Object) => {
  return {
    type: ADD_EDUCATION,
    payload: {
      education: education
    }
  }
}