import { UploadOutlined } from '@ant-design/icons'
import {
  Button,
  Col,
  Divider,
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
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function StepFour() {
  const router = useRouter()

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
          Step 4 dari 5
        </Text>
      </div>
      <div className="my-[108px]">
        <Text className="h-[23px] text-neutral80 text-[18px] md:text-[28px] font-bold border-l-[6px] border-[#1088C8] ps-8 flex items-center">
          Detail Pesanan
        </Text>
        <CustomCollapse className="mt-12" label="Informasi Profile">
          <div className="flex justify-between gap-16">
            <div className="w-[50%]">
              <Row justify="space-between">
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Nama Lengkap
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    Igid Sabda Ilman
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Email
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    Igitsabdailman96@gmail.com
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Tempat Lahir
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    Metro
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Tanggal Lahir
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    01 Januari 1996
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Gender
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    Pria
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Kewarganegaraan (WNI/WNA)
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    Indonesia
                  </Text>
                </Col>
              </Row>
            </div>
            <div className="w-[50%]">
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Provinsi
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    Serang
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Kabupaten/Kota
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    Kota Sorong
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Alamat
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    Jl. Ahmad Yani no. 162, Sorong
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Jenis Identitas
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    KTP
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Nomor Identitas
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    1807030101876555
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
            </div>
          </div>
        </CustomCollapse>
        <CustomCollapse
          className="mt-12"
          label="Data Kesehatan, Kontak darurat & Event"
        >
          <div className="flex justify-between gap-16">
            <div className="w-[50%]">
              <Row justify="space-between">
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Kontak Darurat
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    081282718192
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Atas Nama
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    Nurul
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Hubungan dengan kontak
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    Saudara
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Golongan Darah
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    O
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
            </div>
            <div className="w-[50%]">
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Riwayat Penyakit
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    Tidak Ada
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Nama di BIB
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    Igid Aja
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
              <Row>
                <Col span={12}>
                  <Text className="text-base text-[#5F5F70] font-medium">
                    Nama Komunitas
                  </Text>
                </Col>
                <Col span={12}>
                  <Text className="text-base text-neutral80 font-semibold">
                    Padang Runners
                  </Text>
                </Col>
              </Row>
              <Divider dashed style={{ borderColor: '#B5DAEE' }} />
            </div>
          </div>
        </CustomCollapse>
      </div>
      <div className="flex justify-between gap-12">
        <div className="relative w-[50%] h-[451px]">
          <Image
            className="w-full h-full object-cover rounded-xl"
            src="/images/padang.png"
            alt="padang"
            fill
          />
        </div>
        <div className="w-[50%]">
          <CustomCollapse label="Data Kesehatan, Kontak darurat & Event">
            <Row>
              <Col span={12}>
                <Text className="text-base text-[#5F5F70] font-medium">
                  Kategori
                </Text>
              </Col>
              <Col span={12}>
                <Text className="text-base text-neutral80 font-semibold">
                  (EARLY BIRD) - 3K Umum
                </Text>
              </Col>
            </Row>
            <Divider dashed style={{ borderColor: '#B5DAEE' }} />
            <Row>
              <Col span={12}>
                <Text className="text-base text-[#5F5F70] font-medium">
                  Harga Tiket
                </Text>
              </Col>
              <Col span={12}>
                <Text className="text-base text-neutral80 font-semibold">
                  IDR 100.000
                </Text>
              </Col>
            </Row>
            <Divider dashed style={{ borderColor: '#B5DAEE' }} />
            <Row>
              <Col span={12}>
                <Text className="text-base text-[#5F5F70] font-medium">
                  Pilihan Add-Ons
                </Text>
              </Col>
              <Col span={12}>
                <Text className="text-base text-neutral80 font-semibold">
                  -
                </Text>
              </Col>
            </Row>
            <Divider dashed style={{ borderColor: '#B5DAEE' }} />
            <Row>
              <Col span={12}>
                <Text className="text-base text-[#5F5F70] font-medium">
                  Pilihan Kurir
                </Text>
              </Col>
              <Col span={12}>
                <Text className="text-base text-neutral80 font-semibold">
                  -
                </Text>
              </Col>
            </Row>
            <Divider dashed style={{ borderColor: '#B5DAEE' }} />
            <Row>
              <Col span={12}>
                <Text className="text-base text-[#5F5F70] font-medium">
                  Biaya Pengiriman
                </Text>
              </Col>
              <Col span={12}>
                <Text className="text-base text-neutral80 font-semibold">
                  IDR 0
                </Text>
              </Col>
            </Row>
            <Divider dashed style={{ borderColor: '#B5DAEE' }} />
            <Row>
              <Col span={12}>
                <Text className="text-base text-[#5F5F70] font-medium">
                  Diskon
                </Text>
              </Col>
              <Col span={12}>
                <Text className="text-base text-neutral80 font-semibold">
                  IDR 0
                </Text>
              </Col>
            </Row>
            <Divider dashed style={{ borderColor: '#B5DAEE' }} />
            <Row>
              <Col span={12}>
                <Text className="text-base text-[#5F5F70] font-medium">
                  Total Bayar
                </Text>
              </Col>
              <Col span={12}>
                <Text className="text-base text-bluemain font-semibold">
                  IDR 100.000
                </Text>
              </Col>
            </Row>
          </CustomCollapse>
          <CustomCollapse className="mt-12" label="Terms">
            <Form>
              <Form.Item
                name="no_hp"
                className="font-inter text-sm font-medium"
              >
                <Radio.Group size="large" className="flex flex-col gap-6">
                  <Radio className="text-[#5F5F70] font-medium" value={1}>
                    Dengan ini saya menyatakan dengan sesungguhnya bahwa
                    data-data yang diberikan benar adanya.
                  </Radio>
                  <Radio className="text-[#5F5F70] font-medium" value={2}>
                    Saya telah menyetujui syarat dan ketentuan yang telah
                    ditetapkan oleh pihak penyelenggara.
                  </Radio>
                  <Radio className="text-[#5F5F70] font-medium" value={3}>
                    Dengan ini saya menyetakan sehat jasmani, rohani, dan tidak
                    memiliki riwayat penyakit yang menghambat perlombaan saya.
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Form>
          </CustomCollapse>
          <CustomCollapse className="mt-12" label="Disclaimer *">
            <Text className="text-[#5F5F70] font-medium text-base">
              Dengan ini saya menyatakan bahwa saya berada dalam keadaan sehat
              jasmani, rohani dan tidak memiliki riwayat penyakit yang
              menghambat perlombaan saya. Bilamana terjadi sesuatu pada saat
              perlombaan berlangsung, maka hal itu diluar tanggung jawab
              penyelenggara
            </Text>
          </CustomCollapse>
        </div>
      </div>
      <div className="bg-white w-full flex justify-between items-center px-12 py-6  mt-12 rounded-lg">
        <div>
          <Text className="text-xl text-neutral80 font-semibold">
            Total Bayar
          </Text>
          <Text className="text-base text-neutral60 font-medium">
            Potongan Harga
          </Text>
        </div>
        <div>
          <Text className="text-xl text-bluemain font-semibold">
            IDR 100.000
          </Text>
          <div className="flex">
            <Image
              src="/images/hemat-illustration.png"
              alt="hemat icon"
              width={60}
              height={30}
            />
            <Text className="text-base text-neutral80 font-semibold">
              - IDR 0
            </Text>
          </div>
        </div>
        <div className="flex justify-end gap-6">
          <Button
            onClick={() => router.back()}
            className="w-[220px] h-14 px-14 flex items-center justify-center text-lg font-medium text-primary bg-white  border border-primary"
          >
            Back
          </Button>
          <Link
            href="https://app.sandbox.midtrans.com/snap/v4/redirection/93411b27-66cf-42c5-a267-1a86c477fe6a"
            target="_blank"
          >
            <Button
              className="w-[220px] h-14 px-14  text-lg font-medium bg-primary text-white"
              onClick={() => router.push('/dashboard/myprofile')}
            >
              Checkout
            </Button>
          </Link>
        </div>
      </div>
      <div className="pt-16 pb-20">
        <ContactUs />
      </div>
    </div>
  )
}

export default StepFour
