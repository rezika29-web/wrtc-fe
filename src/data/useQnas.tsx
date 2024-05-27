import { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { UseQueryOptions, useQuery } from 'react-query'
import CallAPI, { UrlQueryTypes } from 'services/CallAPI'

interface FaqsDataType {
  id: string
  created_at: string
  updated_at: string
  deleted_at: any
  faq: string
  order: number
  faq_id: string
  question: string
  answer: string
}

interface QnAsDataType {
  id: string
  created_at: string
  updated_at: string
  deleted_at: any
  question: string
  answer: string
  order: number
  faq_id: string
  FaqS: FaqsDataType[]
}

type IResponse = {
  faq_id: string
  order: string
  faq: string
  code: string
  message: string
  data: QnAsDataType[]
  total: string
  id: string
}

type IParams = UrlQueryTypes & {
  options?: UseQueryOptions<IResponse, AxiosError>
}

function useQna(params: IParams = {}) {
  const { page = 1, pageSize = 10, options, ...restParams } = params
  const [pagination, setPagination] = useState({ page, pageSize })

  useEffect(() => {
    setPagination({ page, pageSize })
  }, [page, pageSize])

  const queryKey = ['/qna', pagination, restParams]

  const query = useQuery<IResponse, AxiosError>({
    queryKey,
    queryFn() {
      return CallAPI.getAllQna({
        ...restParams,
        ...pagination,
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

export default useQna
