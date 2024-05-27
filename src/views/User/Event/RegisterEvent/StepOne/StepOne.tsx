import { UploadOutlined } from '@ant-design/icons'
import {
  Button,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Switch,
  Upload,
  message,
} from 'antd'
import { LinkButton } from 'components/Buttons'
import CustomCollapse from 'components/Collapse'
import ContactUs from 'components/ContactUs'
import SimpleInput from 'components/Forms/Input/Inputs'
import Text from 'components/Text'
import { BASE_API_URL } from 'constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function StepOne() {
  const [previewImage, setPreviewImage] = useState(null)

  const handleChange = (info) => {
    if (info.file.status === 'done') {
      // Menyimpan URL gambar yang diunggah
      setPreviewImage(info.file.response.url)
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }

  return (
    <div className="container">
      <div className="flex flex-col items-center gap-y-6 mt-20 ">
        <Text
          size="body1"
          className="text-lg px-8 py-4 font-bold font-inter text-[#0079C4] bg-[#FFFFFF] rounded-full"
        >
          REGISTER EVENT
        </Text>
        <Text className="text-neutral80 text-[38px] font-bold">
          Padang half marathon
        </Text>
        <Text className="bg-white text-neutral80 text-xl font-semibold shadow-[0_4px_20px_0px_rgba(0,0,0,0.05)] rounded-full px-8 py-4">
          Step 1 dari 5
        </Text>
      </div>
      <div className="my-[108px]">
        <Text className="h-[23px] text-neutral80 text-[18px] md:text-[28px] font-bold border-l-[6px] border-[#1088C8] ps-8 flex items-center">
          Detail Informasi Pribadi
        </Text>
        <Row className="mt-6">
          <Col span={13}>
            <CustomCollapse label="Informasi Profile">
              <Form layout="vertical">
                <Form.Item
                  name="nama"
                  label="Nama Lengkap"
                  className="font-inter text-sm font-medium"
                  rules={[{ required: true, message: 'Tidak boleh kosong!' }]}
                  required
                >
                  <SimpleInput
                    className="font-normal"
                    placeholder="Masukkan nama lengkap"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  className="font-inter text-sm font-medium"
                >
                  <SimpleInput
                    className="font-normal"
                    placeholder="Masukkan Email"
                  />
                </Form.Item>
                <Form.Item
                  name="tempat_lahir"
                  label="Tempat Lahir"
                  className="font-inter text-sm font-medium"
                >
                  <SimpleInput
                    className="font-normal"
                    placeholder="Masukkan tempat lahir"
                  />
                </Form.Item>
                <Form.Item
                  name="no_hp"
                  label="Nomor Handphone"
                  className="font-inter text-sm font-medium"
                >
                  <SimpleInput
                    type="number"
                    className="font-normal"
                    placeholder="Masukkan nomor handphone"
                  />
                </Form.Item>
                <Form.Item
                  name="no_hp"
                  label="Gender"
                  className="font-inter text-sm font-medium"
                >
                  <Radio.Group>
                    <Radio value={1}>Pria</Radio>
                    <Radio value={2}>Wanita</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  name="no_hp"
                  label="Kewarganegaraan (WNI/WNA)"
                  className="font-inter text-sm font-medium"
                  rules={[{ required: true, message: 'Tidak boleh kosong!' }]}
                  required
                >
                  <Select
                    className="w-full h-[56px]"
                    allowClear
                    placeholder="Masukkan Kewarganegaraan (WNI/WNA)"
                    options={[
                      { value: 'jack', label: 'Jack' },
                      { value: 'lucy', label: 'Lucy' },
                      { value: 'Yiminghe', label: 'yiminghe' },
                      { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                  />
                </Form.Item>
                <div className="flex gap-6">
                  <Form.Item
                    name="no_hp"
                    label="Provinsi"
                    className="w-full font-inter text-sm font-medium"
                    rules={[{ required: true, message: 'Tidak boleh kosong!' }]}
                    required
                  >
                    <Select
                      className="max-w-[290px] h-[56px]"
                      allowClear
                      placeholder="Pilih Provinsi"
                      options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        {
                          value: 'disabled',
                          label: 'Disabled',
                          disabled: true,
                        },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    name="no_hp"
                    label="Kabupaten/Kota"
                    className="w-full font-inter text-sm font-medium"
                    rules={[{ required: true, message: 'Tidak boleh kosong!' }]}
                    required
                  >
                    <Select
                      className="max-w-[280px] h-[56px]"
                      allowClear
                      placeholder="Pilih Kabupaten/Kota"
                      options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        {
                          value: 'disabled',
                          label: 'Disabled',
                          disabled: true,
                        },
                      ]}
                    />
                  </Form.Item>
                </div>
                <Form.Item
                  name="no_hp"
                  label="Identitas"
                  className="font-inter text-sm font-medium"
                  rules={[{ required: true, message: 'Tidak boleh kosong!' }]}
                  required
                >
                  <Radio.Group>
                    <Radio value={1}>KTP</Radio>
                    <Radio value={2}>Kartu Pelajar</Radio>
                    <Radio value={3}>SIM</Radio>
                    <Radio value={4}>Passport</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  name="nama"
                  label="Nomor Identitas"
                  className="font-inter text-sm font-medium"
                  rules={[{ required: true, message: 'Tidak boleh kosong!' }]}
                  required
                >
                  <SimpleInput
                    className="font-normal"
                    placeholder="Masukkan nama lengkap"
                  />
                  <Text className="font-normal text-sm">
                    Masukan untuk Kata Sandi terdiri dari huruf, angka, dan
                    tanda bintang (). Hanya angka dan tanda bintang () yang
                    diperbolehkan.
                  </Text>
                </Form.Item>
                <div className="flex gap-6 mt-12">
                  <Switch defaultChecked={false} />
                  <Text className="font-normal text-sm">
                    Dengan menyetujui item dalam daftar periksa ini, Anda
                    menyatakan bahwa Anda telah membaca dan memahami{' '}
                    <Link className="text-blue-400" href="/">
                      syarat dan ketentuan
                    </Link>{' '}
                    yang diuraikan di atas.
                  </Text>
                </div>
              </Form>
            </CustomCollapse>
          </Col>
          <Col span={10} offset={1}>
            <CustomCollapse label="Upload Profile">
              <Image
                src={previewImage || '/images/example-profile.png'}
                alt="profile"
                width={250}
                height={250}
                className="mx-auto  mb-12"
              />

              <Form layout="vertical">
                <Form.Item
                  name="nama"
                  label="Ubah Gambar Profile"
                  className="font-inter text-sm font-medium"
                  rules={[{ required: true, message: 'Tidak boleh kosong!' }]}
                >
                  <div className="flex">
                    <SimpleInput
                      disabled
                      value={previewImage}
                      type="number"
                      className="font-normal rounded-r-none"
                      placeholder={previewImage}
                    />
                    <Upload
                      name="image"
                      action={`${BASE_API_URL}/v1/`} // Ganti dengan URL yang sesuai dengan backend Anda
                      showUploadList={false}
                      onChange={handleChange}
                    >
                      <Button
                        className="bg-bluemain w-[52px] h-[56px] rounded-l-none"
                        icon={
                          <Image
                            src="/icons/u_upload-alt.png"
                            alt="upload-icon"
                            width={20}
                            height={20}
                          />
                        }
                      />
                    </Upload>
                  </div>
                  <Text className="font-normal text-neutral60">
                    Ukuran maksimal 2 MB
                  </Text>
                </Form.Item>
              </Form>
            </CustomCollapse>
          </Col>
        </Row>
      </div>
      <div className="w-full flex justify-end">
        <LinkButton
          href="step-two"
          className="w-[220px] h-14 px-14  text-lg font-medium bg-primary text-white"
        >
          Next
        </LinkButton>
      </div>
      <div className="pt-16 pb-20">
        <ContactUs />
      </div>
    </div>
  )
}

export default StepOne
