import React, { useEffect, useState } from 'react'
import Text from 'components/Text'
import useBloods from 'data/useBloods'

function Kontak(dataUser) {
  const { data: dataMasterBlood } = useBloods() || {}
  const [dataBlood, setDataBlood] = useState([])
  useEffect(() => {
    if (dataMasterBlood) {
      setDataBlood(dataMasterBlood)
    }
  }, [dataMasterBlood])
  const findBloodById = (id) => {
    return dataBlood.find((item) => item.id === id)
  }
  const bloodById = findBloodById(dataUser?.MasterBloodId)
  return (
    <div className="mb-10 px-10">
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Kontak Darurat</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">{dataUser?.noTelpDarurat}</Text>
          </div>
        </div>
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Golongan Darah</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">{bloodById?.nama}</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Atas Nama</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">{dataUser?.namaTelpDarurat}</Text>
          </div>
        </div>
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Riwayat Penyakit</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">{dataUser?.AthleteDiseaseHistories[0].name}</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full mb-10 ">
        <div className="md:w-[50%] flex flex-row mr-10">
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Hubungan Dengan Kontak</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">{dataUser?.emergencyContactRelation}</Text>
          </div>
        </div>
        <div className="md:w-[50%] flex flex-row mr-10 pb-5" />
      </div>
    </div>
  )
}
export default Kontak
