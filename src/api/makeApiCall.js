import axios from 'axios'

export default {
  makeGetRequest (path, callback, fail) {
    axios.get(path)
      .then(callback)
      .catch(fail)
  },
  makePostRequest (path, callback, payload, fail) {
    axios.post(path, payload, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(callback)
      .catch(fail)
  }
}
