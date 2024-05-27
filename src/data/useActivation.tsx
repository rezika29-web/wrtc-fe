import { useQuery } from 'react-query'
import CallAPI from 'services/CallAPI'

interface ActivationDataType {
  isActive: boolean
  forceOtp: boolean
}

type IResponse = {
  code: number
  message: string
  data: ActivationDataType
  total: number
}

function useActivation(isAuth) {
  const query = useQuery<IResponse>(
    'activation',
    () =>
      CallAPI.user.get(`/athlete/check-activation`).then((res) => {
        return res.data
      }),
    { enabled: isAuth },
  )

  return {
    ...query,
    data: query?.data?.data,
  }
}

export default useActivation
