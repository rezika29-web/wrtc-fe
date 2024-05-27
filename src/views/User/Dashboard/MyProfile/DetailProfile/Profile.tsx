import React, { useEffect, useState } from 'react'
import Text from 'components/Text'
import moment from 'moment'
import 'moment/locale/id'
import useCities from 'data/useCities'
import useIdentities from 'data/useIdentities'

moment.locale('id')

function Profile(dataUser) {
  const dataUsers = dataUser
  const { data: dataCities } = useCities() || {}
  const { data: dataIdentities } = useIdentities() || {}
  const [dataCity, setDataCity] = useState([])
  const [dataIdentity, setDataIdentity] = useState([])

  useEffect(() => {
    if (dataCities) {
      setDataCity(dataCities)
    }
  }, [dataCities])
  const findById = (id) => {
    return dataCity.find((item) => item.id === id)
  }
  const cityById = findById(dataUsers?.CityId)

  useEffect(() => {
    if (dataIdentities) {
      setDataIdentity(dataIdentities)
    }
  }, [dataIdentities])
  const findIdentityById = (id) => {
    return dataIdentity.find((item) => item.id === id)
  }
  const indentityById = findIdentityById(dataUsers?.MasterIdentityCardId)

  const tglLahir = dataUsers?.tglLahir
  const tanggalLahirFormat = moment(tglLahir).format('DD MMMM YYYY')
  return (
    <div className="mb-10 px-10">
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50% w-full">
            <Text size="subtitle">Nama Lengkap</Text>
          </div>
          <div className="md:w-[50% w-full">
            <Text size="h6">{dataUsers?.fullname}</Text>
          </div>
        </div>
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Kabupaten / Kota</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">{cityById?.nama}</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Email</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">{dataUsers?.email}</Text>
          </div>
        </div>
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Alamat</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">{dataUsers?.alamat}</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Tempat Lahir</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">{dataUsers?.tempatLahir}</Text>
          </div>
        </div>
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Jenis Identitas</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">{indentityById?.nama}</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Tanggal Lahir</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">{tanggalLahirFormat}</Text>
          </div>
        </div>
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Nomor Identitas</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">{dataUsers?.noIdentitas}</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div className="md:w-[50%] flex flex-row mr-10">
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Kewarganegaraan (WNI/WNA)</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">{dataUsers?.wni === true ? 'WNI' : 'WNA'}</Text>
          </div>
        </div>
        <div className="md:w-[50%] flex flex-row mr-10 pb-5">
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Gender</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">
              {dataUsers?.MasterGenderId === '1' ? 'Pria' : 'Wanita'}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full mb-10 ">
        <div className="md:w-[50%] flex flex-row mr-10 pb-5" />
      </div>
    </div>
  )
}
export default Profile
