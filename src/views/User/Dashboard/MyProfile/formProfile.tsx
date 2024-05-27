import React, { useEffect, useState } from 'react'
import { Radio, Form, Select, Switch, Input, DatePicker } from 'antd'
import SimpleInput from 'components/Forms/Input/Inputs'
import Link from 'next/link'
import useCities from 'data/useCities'
import useIdentities from 'data/useIdentities'
import useCountry from 'data/useCountry'
import moment from 'moment'

const { TextArea } = Input
const optionsGender = [
  { label: 'Pria', value: '1' },
  { label: 'Wanita', value: '2' },
]
function FormProfile({ dataUser, valueWni, setValueWni }) {
  const dataProfile = dataUser
  const params = {
    pageSize: 999,
  }
  const { data: dataCountries } = useCountry(params) || {}
  const { data: dataCities } = useCities(params) || {}
  const { data: dataMasterIdentities } = useIdentities() || {}
  const dataCity = dataProfile?.CityId
  const dataCountry = dataProfile?.MasterCountryId

  const [masterCities, setMasterCities] = useState([])
  const [masterCountries, setMasterCountries] = useState([])
  const [masterIdentity, setMasterIdentity] = useState([])
  const [valueCity, setValueCity] = useState(null)
  const [valueCountry, setValueCountry] = useState(null)
  const { Option } = Select

  useEffect(() => {
    if (dataCities) {
      setMasterCities(dataCities)
    }
  }, [dataCities])
  useEffect(() => {
    if (dataCountries) {
      setMasterCountries(dataCountries)
    }
  }, [dataCountries])
  useEffect(() => {
    if (dataMasterIdentities) {
      setMasterIdentity(dataMasterIdentities)
    }
  }, [dataMasterIdentities])

  useEffect(() => {
    if (dataCity) {
      setValueCity(String(dataCity))
    }
  }, [dataCity])
  useEffect(() => {
    if (dataCountry) {
      setValueCountry(String(dataCountry))
    }
  }, [dataCountry])
  useEffect(() => {
    setValueWni(dataProfile?.wni)
  }, [dataProfile?.wni])

  const changeWni = (value) => {
    if (value === 'WNI') {
      setValueWni(true)
    } else {
      setValueWni(false)
    }
  }

  const tglLahir = dataProfile?.tglLahir ? moment(dataProfile.tglLahir) : null

  const optionIdentities = masterIdentity.map((identity) => ({
    label: identity.nama,
    value: identity.id,
  }))
  const optionCities = masterCities.map((cities) => ({
    label: cities.nama,
    value: cities.id.toString(),
  }))
  const optionCountries = masterCountries.map((countries) => ({
    label: countries.nama,
    value: countries.id.toString(),
  }))
  return (
    <>
      <Form.Item
        label="Nama Lengkap"
        name="fullname"
        rules={[{ required: true }]}
        colon={false}
        labelAlign="right"
        initialValue={dataProfile?.fullname || ''}
      >
        <SimpleInput placeholder="Masukkan Nama Lengkap" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ type: 'email' }]}
        initialValue={dataProfile?.email || ''}
      >
        <SimpleInput placeholder="Masukkan Email" readOnly />
      </Form.Item>
      <Form.Item
        label="Tempat Lahir"
        name="tempatLahir"
        initialValue={dataProfile?.tempatLahir || ''}
      >
        <SimpleInput placeholder="Masukkan Tempat Lahir" />
      </Form.Item>
      <Form.Item
        label="Tanggal Lahir"
        name="tglLahir"
        rules={[{ required: true }]}
        initialValue={tglLahir || ''}
      >
        <DatePicker style={{ width: '100%', height: '60px' }} />
      </Form.Item>
      <Form.Item
        label="Nomor Handphone"
        name="telp"
        initialValue={dataProfile?.telp || ''}
      >
        <SimpleInput placeholder="Masukkan Nomor Handphone" />
      </Form.Item>
      <Form.Item
        label="Gender"
        name="MasterGenderId"
        initialValue={dataUser?.MasterGenderId || ''}
      >
        <Radio.Group options={optionsGender} />
      </Form.Item>
      <Form.Item
        label="Kewarganegaraan (WNI/WNA)"
        name="wni"
        rules={[{ required: true }]}
        initialValue={dataProfile?.wni === true ? 'WNI' : 'WNA'}
      >
        <Select style={{ height: '60px' }} onChange={changeWni}>
          <Option value="WNI">WNI</Option>
          <Option value="WNA">WNA</Option>
        </Select>
      </Form.Item>
      {valueWni === true && (
        <Form.Item
          label="Kabupaten/Kota"
          name="CityId"
          rules={[{ required: true }]}
          initialValue={valueCity || ''}
        >
          <Select
            placeholder="Pilih Kabupaten/Kota"
            style={{ width: '100%', height: '60px' }}
            options={optionCities}
          />
        </Form.Item>
      )}
      {valueWni === false && (
        <Form.Item
          label="Negara"
          name="MasterCountryId"
          rules={[{ required: true }]}
          initialValue={valueCountry || ''}
        >
          <Select
            placeholder="Pilih Negara"
            // onChange={handleDistrictChange}
            style={{ width: '100%', height: '60px' }}
            options={optionCountries}
          />
        </Form.Item>
      )}
      <Form.Item
        label="Alamat"
        name="alamat"
        rules={[{ required: true }]}
        initialValue={dataProfile?.alamat || ''}
      >
        <TextArea placeholder="Masukkan Alamat" />
      </Form.Item>
      <Form.Item
        label="Identitas"
        name="MasterIdentityCardId"
        rules={[{ required: true }]}
        initialValue={dataProfile?.MasterIdentityCardId || ''}
      >
        <Radio.Group options={optionIdentities} />
      </Form.Item>
      <Form.Item
        label="Nomor Identitas"
        name="noIdentitas"
        rules={[{ required: true }]}
        initialValue={dataProfile?.noIdentitas || ''}
      >
        <SimpleInput
          placeholder="Masukkan Nomor Identitas"
          defaultValue={dataProfile?.noIdentitas || ''}
        />
      </Form.Item>
      <Form.Item
        name="terms"
        valuePropName="checked"
        rules={[
          { required: true, message: 'Please accept terms and conditions' },
        ]}
        initialValue="checked"
      >
        <Switch defaultChecked /> Dengan menyetujui item dalam daftar periksa
        ini, Anda menyatakan bahwa Anda telah membaca dan memahami{' '}
        <Link
          style={{ color: 'blue' }}
          href="/register/persyaratan"
          target="_blank"
        >
          syarat dan ketentuan
        </Link>{' '}
        yang diuraikan di atas.
      </Form.Item>
    </>
  )
}

export default FormProfile
