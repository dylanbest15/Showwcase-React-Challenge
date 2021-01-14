import {
  FETCH_SCHOOLS_FAILURE,
  FETCH_SCHOOLS_REQUEST,
  FETCH_SCHOOLS_SUCCESS
} from "./schoolsTypes"

export const fetchSchoolsRequest = () => {
  return {
    type: FETCH_SCHOOLS_REQUEST
  }
}

const fetchSchoolsSuccess = (schools: []) => {
  return {
    type: FETCH_SCHOOLS_SUCCESS,
    payload: schools
  }
}

const fetchSchoolsFailure = (error: any) => {
  return {
    type: FETCH_SCHOOLS_FAILURE,
    payload: error
  }
}