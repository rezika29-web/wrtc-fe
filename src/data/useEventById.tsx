import { isUndefined } from 'lodash'
import { useQuery } from 'react-query'
import CallAPI from 'services/CallAPI'

export interface EventsDataType {
  id: string
  title: string
}

function useEventsById(id) {
  const queryKey = ['events']

  const query = useQuery({
    queryKey,
    queryFn() {
      return CallAPI.getEventById(id).then((res) => {
        return res.data
      })
    },
    enabled: !isUndefined(id),
  })

  return {
    ...query,
    data: query?.data?.data,
  }
}

export default useEventsById
