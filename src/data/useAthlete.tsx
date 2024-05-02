import { useQuery } from 'react-query'
import CallAPI from 'services/CallAPI'

interface AthleteDataType {
  id: number
  fullname: string
  email: string
  photoAthlete: {
    id: number
    file: string
    AthleteId: number
  }
  password: string
}

type IResponse = {
  code: number
  message: string
  athlete: AthleteDataType
  total: number
}

function useAthlete(isAuth) {
  const query = useQuery<IResponse>(
    'athlete',
    () =>
      CallAPI.public.get(`/athlete/me`).then((res) => {
        return res.data
      }),
    { enabled: isAuth },
  )

  return {
    ...query,
    data: query?.data?.athlete,
  }
}

export default useAthlete
