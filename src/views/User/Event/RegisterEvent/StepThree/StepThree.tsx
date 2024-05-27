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

function StepThree() {
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
          Step 3 dari 5
        </Text>
      </div>
      <div className="my-[108px]">
        <Text className="h-[23px] text-neutral80 text-[18px] md:text-[28px] font-bold border-l-[6px] border-[#1088C8] ps-8 flex items-center">
          Data Kesehatan, Kontak darurat & Additional
        </Text>
        <Row className="mt-6">
          <Col span={13}>
            <CustomCollapse label="Data Kesehatan & Kontak Darurat">
              <Form layout="vertical">
                <Form.Item
                  name="nama"
                  label="Nama di BIB"
                  className="font-inter text-sm font-medium"
                >
                  <SimpleInput
                    className="font-normal"
                    placeholder="Masukkan nama BIB"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Nama Komunitas"
                  className="font-inter text-sm font-medium"
                >
                  <SimpleInput
                    className="font-normal"
                    placeholder="Masukkan nama komunitas"
                  />
                </Form.Item>
                <Form.Item
                  name="tempat_lahir"
                  label="Kontak Darurat"
                  className="font-inter text-sm font-medium"
                  rules={[{ required: true, message: 'Tidak boleh kosong!' }]}
                  required
                >
                  <SimpleInput
                    className="font-normal"
                    type="number"
                    placeholder="Masukkan nomor kontak darurat"
                  />
                </Form.Item>
                <Form.Item
                  name="no_hp"
                  label="Nama Kontak Darurat"
                  className="font-inter text-sm font-medium"
                  rules={[{ required: true, message: 'Tidak boleh kosong!' }]}
                  required
                >
                  <SimpleInput
                    className="font-normal"
                    placeholder="Masukkan nama orang sebagai kontak darurat"
                  />
                </Form.Item>
                <Form.Item
                  name="no_hp"
                  label="Hubungan dengan Kontak Darurat"
                  className="font-inter text-sm font-medium"
                >
                  <SimpleInput
                    className="font-normal"
                    placeholder="Masukkan hubungan dengan kontak darurat"
                  />
                  <Radio.Group>
                    <Radio value={1}>Pria</Radio>
                    <Radio value={2}>Wanita</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  name="no_hp"
                  label="Golongan Darah"
                  className="font-inter text-sm font-medium"
                >
                  <Radio.Group>
                    <Radio value={1}>AB</Radio>
                    <Radio value={2}>A</Radio>
                    <Radio value={1}>B</Radio>
                    <Radio value={2}>0</Radio>
                  </Radio.Group>
                </Form.Item>
              </Form>
            </CustomCollapse>
          </Col>
          <Col span={10} offset={1}>
            <CustomCollapse label="Upload Profile">
              <Form layout="vertical">
                <Form.Item
                  name="no_hp"
                  label="Nomor Induk Mahasiswa"
                  className="font-inter text-sm font-medium"
                  rules={[{ required: true, message: 'Tidak boleh kosong!' }]}
                  required
                >
                  <SimpleInput
                    type="number"
                    className="font-normal"
                    placeholder="Masukkan nomor induk"
                  />
                </Form.Item>
              </Form>
            </CustomCollapse>
          </Col>
        </Row>
      </div>
      <div className="flex justify-end gap-6">
        <Button
          href="step-two"
          className="w-[220px] h-14 px-14 flex items-center justify-center text-lg font-medium text-primary bg-white  border border-primary"
        >
          Back
        </Button>
        <LinkButton
          href="step-four"
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

export default StepThree
