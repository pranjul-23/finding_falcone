import axios from 'axios'

export default {
  makeGetRequest (path, callback, fail) {
    axios.get(path)
      .then(callback)
      .catch(fail)
  }
}
