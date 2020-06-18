import axios from 'axios'

const commonApi = (httpMethod, endPoint, payload) => {
  const httpMethodFiltered =
    ['get', 'post', 'put', 'delete', 'patch'].includes(
      httpMethod.toLowerCase()
    ) &&
    (httpMethod.toLowerCase() || 'get')
  const data =
    httpMethod === 'post' || httpMethod === 'put' || httpMethod === 'patch'
      ? { ...payload }
      : {}
  const headers = {
    'Content-Type': 'application/json',
    'X-ACCESS-TOKEN': 'blablabla',
    'X-API-SERVER-ACCESS-TOKEN': 'blablabla',
    'X-APP-NAME': 'blablabla',
    'X-PM-COMPANY': 'blablabla',
  }

  return axios({
    method: httpMethodFiltered,
    url: `${endPoint}`,
    data: data,
    params: httpMethod === 'get' ? payload : {},
    headers,
  })
}

export const httpUtils = {
  delete: (endPoint, payload = {}) => {
    return commonApi('delete', endPoint, payload)
  },
  get: (endPoint, payload = {}, language = null) => {
    return commonApi('get', endPoint, payload, language)
  },
  post: (endPoint, payload = {}, language = null) => {
    return commonApi('post', endPoint, payload, language)
  },
  put: (endPoint, payload = {}) => {
    return commonApi('put', endPoint, payload)
  },
}
