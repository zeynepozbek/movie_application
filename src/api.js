import axios from 'axios';


let baseURL = 'https://api.themoviedb.org/'
let key = '991a7a0c3af8aa6c10fd25900f3ef364'

export default {
  get(params, urlDetail) {

    var res = axios.get(baseURL + urlDetail + '?api_key=' + key)
      .catch(function (error) {
        console.log(error);
      })

    return res

  },
}
