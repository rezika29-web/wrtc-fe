import React from 'react'
import Text from 'components/Text'
import CardDashboard from 'components/Cards/CardDashboard'
import ContactUs from 'components/ContactUs'
import Image from 'next/image'
import { Avatar, Collapse, Form, Input, Typography } from 'antd'
import SimpleInput from 'components/Forms/Input/Inputs'
import PrimaryButton, { LinkButton } from 'components/Buttons'
import { UserOutlined } from '@ant-design/icons'
import FormProfile from './formProfile'
import FormJersey from './formJersey'
import FormKesehatan from './FormKesehatan'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
const handleSubmit = (e) => {
  e.preventDefault()
}
const { Link } = Typography

function MyProfile() {
  const [form] = Form.useForm()

  return (
    <div className="md:px-[100px] md:py-20">
      <div className="md:w-[840px] md:pb-24 w-[320px] mx-auto text-center flex justify-center flex-col items-center">
        <Text
          size="body1"
          className="md:text-lg md:w-[253px] md:mb-6 md:py-3 font-bold font-inter text-[#0079C4] bg-[#FFFFFF] rounded-full"
        >
          SELAMAT DATANG 👋
        </Text>
        <Text
          size="body1"
          className="md:text-[38px] md:leading-[52px] mb-12 font-rubik font-extrabold text-[#444458]"
        >
          Alexander Supatramp
        </Text>
      </div>
      <div className="bg-blue-500 flex flex-col justify-center md:rounded-xl rounded-2xl w-full mb-20">
        <div className="md:flex md:items-start rounded-t-xl justify-end bg-blue-600 bg-gradient-to-r">
          {/* <div className="md:flex md:-right-12 md:bottom-0 max-h md:justify-end md:items-end"> */}
          <Image
            src="/images/rectangle1.png"
            alt="img-faq"
            width={740}
            height={389}
            className="flex justify-items-end rounded-tr-xl"
          />
          {/* <Image
              src="/icons/vektor-2.svg"
              alt="img-faq"
              width={765}
              height={389}
              className="relative left-1 top-[48px] rounded-2xl"
            /> */}
          {/* </div> */}
        </div>
        <div className="flex z-2">
          <div className="flex flex-row md:w-full ">
            <div className="md:w-[20%]">
              <Avatar
                size={200}
                icon={<UserOutlined />}
                src="/images/picture.png"
              />
            </div>
            <div className="md:w-[80%]">
              <Text
                size="body1"
                className="md:text-lg text-base font-inter font-bold mb-4"
                style={{ color: '#ffff' }}
              >
                My Profile
              </Text>
              <div className="flex flex-row md:w-[95%] bg-slate-400">
                <div className="md:w-[30%]">
                  <Form form={form} onFinish={handleSubmit} layout="vertical">
                    <Form.Item
                      label="Email"
                      name="fullName"
                      colon={false}
                      labelAlign="right"
                      style={{ borderBottom: '1px solid black' }}
                    >
                      <SimpleInput placeholder="Masukkan Nama Lengkap" />
                    </Form.Item>
                  </Form>
                </div>
                <div className="md:w-[30%]">
                  <Form form={form} onFinish={handleSubmit} layout="vertical">
                    <Form.Item
                      label="Password"
                      name="fullName"
                      colon={false}
                      labelAlign="right"
                      style={{ borderBottom: '1px solid black' }}
                    >
                      <SimpleInput value="*************" />
                    </Form.Item>
                  </Form>
                </div>
                <div className="md:w-[30%] justify-items-end justify-end align-text-bottom">
                  <Link href="/register/persyaratan" target="_blank">
                    Change Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <Text
          className="text-2xl font-extrabold leading-9 font-rubik text-[#444458] mb-6 pl-9"
          style={{ borderLeft: '5px solid #007bff' }}
        >
          Detail
        </Text>
        <div className="mb-10">
          <div className="flex flex-row w-full md:gap-x-6 gap-3">
            <div className="md:w-[60%] ">
              <Collapse
                size="large"
                items={[
                  {
                    key: '1',
                    label: 'Informasi Profile',
                    children: FormProfile(),
                  },
                ]}
                expandIconPosition="right"
              />
            </div>
            <div className="md:w-[40%] w-full relative bg-white  ">
              <Collapse
                size="large"
                className="mb-10"
                items={[
                  {
                    key: '1',
                    label: 'Informasi Jersey',
                    children: FormJersey(),
                  },
                ]}
                expandIconPosition="right"
              />
              <Collapse
                size="large"
                items={[
                  {
                    key: '1',
                    label: 'Data Kesehatan & Kontak Darurat',
                    children: FormKesehatan(),
                  },
                ]}
                expandIconPosition="right"
              />
            </div>
          </div>
        </div>
        <div className="mb-10 flex justify-end">
          <PrimaryButton
            type="primary"
            htmlType="submit"
            className="justify-center rounded-lg md:w-[15%] w-20% mb-12"
            style={{ height: '50px' }}
          >
            <Text className="text-[15px] text-inter font-semibold">Save</Text>
          </PrimaryButton>
        </div>
      </div>
      <ContactUs />
    </div>
  )
}

export default MyProfile