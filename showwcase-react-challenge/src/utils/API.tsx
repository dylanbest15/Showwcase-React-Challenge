import axios from "axios";

export default {
  getSchools: function () {
    axios.get("http://universities.hipolabs.com")
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
}