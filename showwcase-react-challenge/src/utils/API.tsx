import axios from "axios";

export default {
  getSchools: function (name : string) {
    return new Promise ((resolve, reject) => {
      axios.get(`http://universities.hipolabs.com/search?name=${name}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
    })
  }
}