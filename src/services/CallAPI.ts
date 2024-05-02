import { AxiosInstance } from 'axios'
import { BASE_API_URL } from 'constant'

import qs from 'query-string'
import createCustomAxiosInstance from './createCustomAxiosInstance'

export type UrlQueryTypes = {
  page?: number
  pageSize?: number
  filtered?: { id: string; value: string }[]
  sorted?: { id: string; value: string }[]
}

class BaseCallAPI {
  /**
   * Call the API without token
   */
  public public: AxiosInstance

  /**
   * Required token to call the API
   */
  public admin: AxiosInstance

  constructor() {
    this.public = createCustomAxiosInstance({
      baseURL: BASE_API_URL,
      tokenLocalStorageKey: 'userToken',
    })

    this.admin = createCustomAxiosInstance({
      baseURL: BASE_API_URL,
      tokenLocalStorageKey: 'apiToken',
    })
  }

  // Auth
  login(payload: { email: string; password: string }) {
    return this.public.post(`/auth/sign-in`, payload)
  }

  // Events
  getAllEvent(payload: UrlQueryTypes = {}) {
    return this.public.get(
      `foos?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  // Faqs
  getAllFaq(payload: UrlQueryTypes = {}) {
    return this.public.get(
      `foos?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  // eslint-disable-next-line no-unused-vars
  getDummyUsers(payload: { page: number; pageSize: number }) {
    return this.public.get('https://jsonplaceholder.typicode.com/users')
  }
}

const CallAPI = new BaseCallAPI()

export default CallAPI
