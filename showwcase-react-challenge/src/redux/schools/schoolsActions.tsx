import axios from "axios";
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

export const fetchSchools = () => {
  return (dispatch : any) => {
    dispatch(fetchSchoolsRequest);
    axios.get("http://universities.hipolabs.com")
    .then(res => {
      const schools = res.data;
      dispatch(fetchSchoolsSuccess(schools));
    })
    .catch(err => {
      const error = err.message;
      dispatch(fetchSchoolsFailure(error));
    })
  }
}