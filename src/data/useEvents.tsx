import { AxiosError } from 'axios'
import React, { useState } from 'react'
import { UseQueryOptions, useQuery } from 'react-query'
import CallAPI, { UrlQueryTypes } from 'services/CallAPI'

export interface EventsDataType {
  id: string
  title: string
}

type IResponse = {
  code: number
  message: string
  data: EventsDataType
  total: number
}

type IParams = UrlQueryTypes & {
  options?: UseQueryOptions<IResponse, AxiosError>
}

function useEvents(params: IParams = {}) {
  const { page, pageSize, options, ...restParams } = params
  const [pagination, setPagination] = useState({ page, pageSize })

  const queryKey = ['events', pagination, restParams]

  const query = useQuery({
    queryKey,
    queryFn() {
      return CallAPI.getAllEvent({ ...restParams, ...pagination }).then(
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

export default useEvents
