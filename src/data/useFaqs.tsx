import { AxiosError } from 'axios'
import React, { useState } from 'react'
import { UseQueryOptions, useQuery } from 'react-query'
import CallAPI, { UrlQueryTypes } from 'services/CallAPI'

export interface FaqsDataType {
  id: string
  created_at: string
  updated_at: string
  deleted_at: any
  faq: string
  order: number
  QnAs: []
  total_question: number
}

type IResponse = {
  code: number
  message: string
  data: FaqsDataType
  total: number
}

type IParams = UrlQueryTypes & {
  options?: UseQueryOptions<IResponse, AxiosError>
}

function useFaqs(params: IParams = {}) {
  const { page = 1, pageSize = 10, options, ...restParams } = params
  const [pagination, setPagination] = useState({ page, pageSize })

  const queryKey = ['/faqs', pagination, restParams]

  const query = useQuery({
    queryKey,
    queryFn() {
      return CallAPI.getAllFaq({ ...restParams, ...pagination }).then((res) => {
        return res.data
      })
    },
  })

  return query
}

export default useFaqs
