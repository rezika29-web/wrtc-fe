import React, { useEffect, useState } from 'react'
import { Radio, Form, Checkbox, Select, Switch, Input } from 'antd'
import Text from 'components/Text'
import SimpleInput from 'components/Forms/Input/Inputs'
import PrimaryButton, { LinkButton } from 'components/Buttons'
import Link from 'next/link'
import DashedLine from 'views/User/Register/DashedLine'

const { TextArea } = Input
interface DataSelectedProvinceType {
  id: string
  name: string
}
function FormProfile() {
  const [form] = Form.useForm()
  const { Option } = Select
  const [provinces, setProvinces] = useState([])
  const [selectedProvince, setSelectedProvince] = useState('')
  const [districts, setDistricts] = useState([])
  const [selectedDistrict, setSelectedDistrict] = useState('')

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch(
          `http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`,
        )
        const data = await response.json()
        setProvinces(data)
        // console.log(data)
        // console.log(selectedProvince)
      } catch (error) {
        console.error('Error fetching provinces:', error)
      }
    }
    fetchProvinces()
  }, [])
  useEffect(() => {
    const fetchDistricts = async () => {
      if (selectedProvince) {
        try {
          const response = await fetch(
            `http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`,
          )
          const data = await response.json()
          setDistricts(data)
        } catch (error) {
          console.error('Error fetching districts:', error)
        }
      }
    }
    fetchDistricts()
  }, [selectedProvince])
  const handleProvinceChange = (value) => {
    setSelectedProvince(value)
    setSelectedDistrict('')
  }

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const customizeRequiredMark = (
    label: React.ReactNode,
    { required }: { required: boolean },
  ) => (
    <>
      {label}&nbsp;
      {required && <span style={{ color: 'red' }}>*</span>}
    </>
  )
  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      layout="vertical"
      requiredMark={customizeRequiredMark}
    >
      <Form.Item
        label="Nama Lengkap"
        name="fullName"
        rules={[{ required: true }]}
        colon={false}
        labelAlign="right"
      >
        <SimpleInput placeholder="Masukkan Nama Lengkap" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: 'email' }]}
      >
        <SimpleInput placeholder="Masukkan Email" />
      </Form.Item>
      <Form.Item
        label="Tempat Lahir"
        name="tempat_lahir"
        rules={[{ required: true }]}
      >
        <SimpleInput placeholder="Masukkan Tempat Lahir" />
      </Form.Item>
      <Form.Item
        label="Nomor Handphone"
        name="nomor_handphone"
        rules={[{ required: true }]}
      >
        <SimpleInput placeholder="Masukkan Nomor Handphone" />
      </Form.Item>
      <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value="1">Pria</Radio>
          <Radio value="2">Wanita</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Kewarganegaraan (WNI/WNA)"
        name="negara"
        rules={[{ required: true }]}
      >
        <Select defaultValue="WNI" style={{ height: '60px' }}>
          <Option value="WNI">WNI</Option>
          <Option value="WNA">WNA</Option>
        </Select>
      </Form.Item>
      <div className="flex flex-row items-center justify-center">
        <div className="w-1/2 pr-2">
          <Form.Item
            label="Provinsi"
            name="province"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Pilih Provinsi"
              value={selectedProvince}
              onChange={handleProvinceChange}
              style={{ width: '100%', height: '60px' }}
            >
              {provinces.map((province) => (
                <Option key={province.id} value={province.id}>
                  {province.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div className="w-1/2 pl-2">
          <Form.Item
            label="Kabupaten/Kota"
            name="district"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Pilih Kabupaten/Kota"
              value={selectedDistrict}
              onChange={handleDistrictChange}
              style={{ width: '100%', height: '60px' }}
              disabled={!selectedProvince}
            >
              {districts.map((district) => (
                <Option key={district.id} value={district.id}>
                  {district.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
      </div>
      <Form.Item label="Alamat" name="alamat" rules={[{ required: true }]}>
        <TextArea placeholder="Masukkan Alamat" />
      </Form.Item>
      <Form.Item
        label="Identitas"
        name="identitas"
        rules={[{ required: true }]}
      >
        <Radio.Group>
          <Radio value="KTP" style={{ marginRight: '30px' }}>
            KTP
          </Radio>
          <Radio value="Kartu Pelajar" style={{ marginRight: '30px' }}>
            Kartu Pelajar
          </Radio>
          <Radio value="SIM" style={{ marginRight: '30px' }}>
            SIM
          </Radio>
          <Radio value="Password" style={{ marginRight: '30px' }}>
            Password
          </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Nomor Identitas"
        name="nomor_identitas"
        rules={[{ required: true }]}
      >
        <SimpleInput placeholder="Masukkan Nomor Identitas" />
        <Text size="body2">
          Masukan untuk Kata Sandi terdiri dari huruf, angka, dan tanda bintang
          (). Hanya angka dan tanda bintang () yang diperbolehkan.
        </Text>
      </Form.Item>
      <Form.Item
        name="terms"
        valuePropName="checked"
        rules={[
          { required: true, message: 'Please accept terms and conditions' },
        ]}
      >
        {/* <Checkbox> */}
        <Switch /> Dengan menyetujui item dalam daftar periksa ini, Anda
        menyatakan bahwa Anda telah membaca dan memahami{' '}
        <Link
          style={{ color: 'blue' }}
          href="/register/persyaratan"
          target="_blank"
        >
          syarat dan ketentuan
        </Link>{' '}
        yang diuraikan di atas.
        {/* </Checkbox> */}
      </Form.Item>
    </Form>
  )
}

export default FormProfile
