import axios from 'axios'

const baseUrl = '/sessions'

const login = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data.token)
}

const loginService = {
  login,
}

export default loginService