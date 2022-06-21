import axios from 'axios'
import authService from "./auth"; 

const baseUrl = '/dictionaries'

const search = newObject => {
    const url = baseUrl + "/" + newObject.language + "/words/" + newObject.word
    const request = axios.get(url, {
        headers: authService.getHeaders()
    })
    return request.then(response => response.data)
}

const searchService = {
    search,
  }

export default searchService