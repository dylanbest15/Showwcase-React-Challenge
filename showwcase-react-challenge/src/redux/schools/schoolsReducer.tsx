import { 
  FETCH_SCHOOLS_FAILURE, 
  FETCH_SCHOOLS_REQUEST, 
  FETCH_SCHOOLS_SUCCESS 
} from "./schoolsTypes"

const initialState = {
  loading: false,
  schools: [],
  error: ""
}

const reducer = (state = initialState, action : any) => {
  switch(action.type) {
    case FETCH_SCHOOLS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_SCHOOLS_SUCCESS:
      return {
        loading: false,
        schools: action.payload,
        error: ""
      }
    case FETCH_SCHOOLS_FAILURE:
      return {
        loading: false,
        schools: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer;