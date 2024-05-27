import { AxiosError } from 'axios'
import React, { useState } from 'react'
import { UseQueryOptions, useQuery } from 'react-query'
import CallAPI, { UrlQueryTypes } from 'services/CallAPI'

export interface CitiesDataType {
  id: string
  nama: string
}

type IResponse = {
  code: number
  message: string
  data: CitiesDataType
  total: number
}

type IParams = UrlQueryTypes & {
  options?: UseQueryOptions<IResponse, AxiosError>
}

function useCities(params: IParams = {}) {
  const { page, pageSize, options, ...restParams } = params
  const [pagination, setPagination] = useState({ page, pageSize })

  const queryKey = ['cities', pagination, restParams]

  const query = useQuery({
    queryKey,
    queryFn() {
      return CallAPI.getMasterCity({ ...restParams, ...pagination }).then(
        (res) => {
          return res.data
        },
      )
    },
  })

  return {
    ...query,
    data: query?.data?.data,
  }
}

export default useCities
