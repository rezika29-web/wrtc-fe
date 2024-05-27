import { useQuery, UseQueryOptions } from 'react-query'
import { AxiosError } from 'axios'
import CallAPI from 'services/CallAPI'
import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
  email: string
  username: string
  fullname: string
  new_password: string
  confirm_new_password: string
}

type IResponse = {
  confirm_new_password: string
  new_password: string
  name: string
  email: string
  username: string
  fullname: string
  total: string
  id: string
  data: User[]
}

type IParams = {
  page?: number
  pageSize?: number
  options?: UseQueryOptions<IResponse, AxiosError>
}

function useUsers(params: IParams = {}) {
  const { page = 1, pageSize = 10, options, ...restParams } = params
  const [pagination, setPagination] = useState({ page, pageSize })

  useEffect(() => {
    setPagination({ page, pageSize })
  }, [page, pageSize])

  const queryKey = ['/users', pagination, JSON.stringify(restParams)]

  const query = useQuery<IResponse, AxiosError>({
    queryKey,
    queryFn() {
      return CallAPI.getAllUser({
        ...restParams,
        ...pagination,
      })
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          throw new Error(
            error.response?.data?.message || 'Failed to fetch Users',
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

export default useUsers
