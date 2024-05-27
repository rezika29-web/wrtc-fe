import { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { UseQueryOptions, useQuery } from 'react-query'
import CallAPI, { UrlQueryTypes } from 'services/CallAPI'

interface RequestHostEventDataTypes {
  id: string
  created_at: number
  updated_at: string
  deleted_at: any
  email: string
  city: string
}

type IResponse = {
  created_at: number
  updated_at: string
  code: string
  message: string
  data: RequestHostEventDataTypes[]
  total: string
  id: string
}

type IParams = UrlQueryTypes & {
  options?: UseQueryOptions<IResponse, AxiosError>
}

function useRequestHostEvent(params: IParams = {}) {
  const { page = 1, pageSize = 10, options, ...restParams } = params
  const [pagination, setPagination] = useState({ page, pageSize })

  useEffect(() => {
    setPagination({ page, pageSize })
  }, [page, pageSize])

  const queryKey = ['/request-host-events', pagination, restParams]

  const query = useQuery<IResponse, AxiosError>({
    queryKey,
    queryFn() {
      return CallAPI.getAllRequestHostEvent({
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

export default useRequestHostEvent
