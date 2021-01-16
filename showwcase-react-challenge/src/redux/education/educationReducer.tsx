import { ADD_EDUCATION } from "./educationTypes";

const initialState = {
  educations: []
}

const educationReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case ADD_EDUCATION: return {
      ...state,
      educations: [...state.educations, action.payload.education]
    }
    default: return state
  }
}

export default educationReducer;