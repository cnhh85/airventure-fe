import Axios from 'axios'
import objectAssign from 'object-assign'

import { API_URL } from '../config'

export const request = (endpoint, method, headers = {}, params = {}, body = {}) => {
  return Axios({
    url:endpoint,
    method: method,
    headers: objectAssign({}, headers),
    params: objectAssign(params),
    data: body,
  })
}

export const get = (endpoint, body = {}, params = {}, headers = {}) => {
  return request(endpoint, 'GET', headers, params, body)
}

export const post = (endpoint, body = {}, params = {}, headers = {}) => {
  return request(endpoint, 'POST', headers, params, body)
}

export const put = (endpoint, body = {}, params = {}, headers = {}) => {
  return request(endpoint, 'PUT', headers, params, body)
}

export const remove = (endpoint, body = {}, params = {}, headers = {}) => {
  return request(endpoint, 'DELETE', headers, params, body)
}
