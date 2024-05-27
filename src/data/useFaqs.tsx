import { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { UseQueryOptions, useQuery } from 'react-query'
import CallAPI, { UrlQueryTypes } from 'services/CallAPI'

interface QnAsDataType {
  id: string
  created_at: number
  updated_at: string
  deleted_at: any
  question: string
  answer: string
  order: number
  faq_id: string
}

interface FaqsDataType {
  question: string
  answer: string
  faq_id: string
  id: string
  created_at: number
  updated_at: string
  deleted_at: any
  faq: string
  order: number
  QnAs: QnAsDataType[]
}

type IResponse = {
  faq_id: string
  created_at: number
  updated_at: string
  order: number
  faq: string
  code: string
  message: string
  data: FaqsDataType[]
  total: string
  id: string
}

type IParams = UrlQueryTypes & {
  options?: UseQueryOptions<IResponse, AxiosError>
}

function useFaqs(params: IParams = {}) {
  const { page = 1, pageSize = 10, options, ...restParams } = params
  const [pagination, setPagination] = useState({ page, pageSize })

  useEffect(() => {
    setPagination({ page, pageSize })
  }, [page, pageSize])

  const queryKey = ['/faq', pagination, restParams]

  const query = useQuery<IResponse, AxiosError>({
    queryKey,
    queryFn() {
      return CallAPI.getAllFaq({
        ...restParams,
        ...pagination,
        faq: '',
        order: '',
      })
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw new Error(
            error.response?.data?.message || 'Failed to fetch FAQs',
          )
        })
    },
    ...options,
  })

  const totalData = parseInt(query.data?.total || '0', 10)

  const handlePaginationChange = (p: number, ps: number) => {
    setPagination((prev) => ({ ...prev, page: p, pageSize: ps }))
  }

  return { ...query, totalData, pagination, handlePaginationChange }
}

export default useFaqs
