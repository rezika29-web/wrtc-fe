import React, { useEffect, useState } from 'react'
import Text from 'components/Text'
import useJersey from 'data/useJersey'

function Jersey(dataUser) {
  const { data: dataMasterJersey } = useJersey() || {}
  const [dataJersey, setDataJersey] = useState([])

  useEffect(() => {
    if (dataMasterJersey) {
      setDataJersey(dataMasterJersey)
    }
  }, [dataMasterJersey])
  const findJerseyById = (id) => {
    return dataJersey.find((item) => item.id === id)
  }
  const jerseyById = findJerseyById(dataUser?.MasterShirtSizeId)

  return (
    <div className="flex flex-row w-full px-10">
      <div className="md:w-[50%] flex flex-row">
        <div className="md:w-[50% w-full">
          <Text size="subtitle">Ukuran Jersey</Text>
        </div>
        <div className="md:w-[50% w-full">
          <Text size="h6">{jerseyById?.nama}</Text>
        </div>
      </div>
    </div>
  )
}
export default Jersey
