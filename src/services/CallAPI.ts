import { AxiosInstance } from 'axios'
import { BASE_API_URL } from 'constant'

import qs from 'query-string'
import createCustomAxiosInstance from './createCustomAxiosInstance'
import { Faq, qnaPayload, userPayload } from './PayloadTypes'

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
   * Call the API without token
   */
  public user: AxiosInstance

  /**
   * Required token to call the API
   */
  public admin: AxiosInstance

  constructor() {
    this.public = createCustomAxiosInstance({
      baseURL: BASE_API_URL,
      version: 'v1',
    })

    this.user = createCustomAxiosInstance({
      baseURL: BASE_API_URL,
      tokenLocalStorageKey: 'userToken',
      version: 'v1',
    })

    this.admin = createCustomAxiosInstance({
      baseURL: BASE_API_URL,
      tokenLocalStorageKey: 'apiToken',
      version: 'v1',
    })
  }

  // Auth
  login(payload: { email: string; password: string }) {
    return this.user.post(`/auth/sign-in`, payload)
  }

  register(formData) {
    return this.public.post(`/auth/sign-up`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  loginAdmin(payload: {
    email: string
    password: string
    latitude: string
    longitude: string
  }) {
    return this.admin.post(`/auth/back-office/sign-in`, payload)
  }

  // Events
  getAllEvent(payload: UrlQueryTypes = {}) {
    return this.public.get(
      `/event?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  // Events By Id
  getEventById(id) {
    return this.public.get(`/event/${id}`)
  }

  // Additional Event Category
  getAdditionalEventCategory(payload: UrlQueryTypes = {}) {
    return this.public.get(
      `/additional-event-category?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  // Blood
  getMasterBlood(payload: UrlQueryTypes = {}) {
    return this.public.get(
      `master-blood?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  // Country
  getMasterCountry(payload: UrlQueryTypes = {}) {
    return this.public.get(
      `master-country?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  // Jersey
  getMasterJersey(payload: UrlQueryTypes = {}) {
    return this.public.get(
      `master-shirt-size?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  // City
  getMasterCity(payload: UrlQueryTypes = {}) {
    return this.public.get(
      `master-city?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  // Identities
  getMasterIdentities(payload: UrlQueryTypes = {}) {
    return this.public.get(
      `master-identity-cards?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  // EditProfile
  editProfile(payload: {
    MasterIdentityCardId: string
    noIdentitas: string
    fullname: string
    wni: boolean
    telp: string
    tempatLahir: string
    tglLahir: any
    MasterGenderId: string
    MasterBloodId: string
    MasterCountryId: string
    CityId: string
    MasterShirtSizeId: string
    namaTelpDarurat: string
    noTelpDarurat: string
    alamat: string
    AthleteDiseaseHistories: [string]
    emergencyContactRelation: string
    isChangePassword: boolean
    oldPassword: string
    newPassword: string
    confirmNewPassword: string
  }) {
    return this.user.put(`/athlete/update`, payload)
  }

  // request-host-event
  requestHostEvent(payload: { email: string; city: string }) {
    return this.user.post(`/request-host-event`, payload)
  }

  // Payment-History
  getPaymentHistory(payload: UrlQueryTypes = {}) {
    return this.user.get(
      `payment-history?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  // Faqs
  getAllFaq(payload: Faq) {
    return this.admin.get(
      `/faq?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  createFaq(payload: { faq: string; order: number }) {
    return this.admin.post(
      `/faq?${qs.stringify({
        ...payload,
      })}`,
      payload,
    )
  }

  updateFaq(id: string, payload: { faq: string; order: number }) {
    return this.admin.put(`/faq/${id}`, payload)
  }

  deleteFaq(id: string) {
    return this.admin.delete(`/faq/soft-delete/${id}`)
  }
  // Manage User

  getAllUser(payload) {
    return this.admin.get(
      `/user?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  createUsers(payload: userPayload) {
    return this.admin.post(
      `/user?${qs.stringify({
        ...payload,
      })}`,
      payload,
    )
  }

  updateUser(id: string, payload: userPayload) {
    return this.admin.put(`/user/${id}`, payload)
  }

  deleteUsers(id: string) {
    return this.admin.delete(`/user/soft-delete/${id}`)
  }

  // QNA

  getAllQna(payload) {
    return this.admin.get(
      `/qna?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  createQna(payload: qnaPayload) {
    return this.admin.post(
      `/qna?${qs.stringify({
        ...payload,
      })}`,
      payload,
    )
  }

  updateQna(id: string, payload: qnaPayload) {
    return this.admin.put(`/qna/${id}`, payload)
  }

  deleteQna(id: string) {
    return this.admin.delete(`/qna/soft-delete/${id}`)
  }

  // Host Event
  getAllRequestHostEvent(payload) {
    return this.admin.get(
      `/request-host-event?${qs.stringify({
        ...payload,
        filtered: JSON.stringify(payload.filtered),
        sorted: JSON.stringify(payload.sorted),
      })}`,
    )
  }

  createRequestHostEvent(payload: { email: string; city: string }) {
    return this.admin.post(
      `/request-host-event?${qs.stringify({
        ...payload,
      })}`,
      payload,
    )
  }

  deleteRequstHostEvent(id: string) {
    return this.admin.delete(`/request-host-event/soft-delete/${id}`)
  }

  // eslint-disable-next-line no-unused-vars
  getDummyUsers(payload: { page: number; pageSize: number }) {
    return this.public.get('https://jsonplaceholder.typicode.com/users')
  }
}

const CallAPI = new BaseCallAPI()

export default CallAPI
