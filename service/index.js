import axios from 'axios'


export const createRequestInstance = (baseUrl) => axios.create({
  baseURL: baseUrl,
  auth: {
    username: "pkey_test_5wvisbxphp1zapg8ie6",
    password: ''
  }
})
