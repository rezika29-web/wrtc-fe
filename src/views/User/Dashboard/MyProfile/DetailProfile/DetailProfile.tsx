import React, { useEffect, useState } from 'react'
import Text from 'components/Text'
import ContactUs from 'components/ContactUs'
import Image from 'next/image'
import { Avatar, Button, Collapse, Form, Input, Modal } from 'antd'
import SimpleInput from 'components/Forms/Input/Inputs'
import PrimaryButton, { SecondaryButton } from 'components/Buttons'
import { UserOutlined } from '@ant-design/icons'
import router from 'next/router'
import useAthlete from 'data/useAthlete'
import useTokenHandler from 'hooks/useTokenHandler'
import Profile from './Profile'
import Jersey from './Jersey'
import Kontak from './Kontak'

function DetailProfile() {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const { token, deleteToken } = useTokenHandler('userToken')

  useEffect(() => {
    setIsAuth(!!token)
  }, [])

  const dataAthlete = useAthlete(isAuth)
  const dataUser = dataAthlete?.data
  const urlImages = 'https://api-prod-new2.beyondrun.com/v1/uploads/'

  const toEdit = () => {
    router.push('/dashboard/my-profile')
  }
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
      <div className="bg-white flex flex-col justify-center md:rounded-xl rounded-2xl w-full mb-20">
        <div
          className="md:flex md:items-start rounded-t-xl justify-end"
          style={{
            background: 'linear-gradient(90deg, #1088c6 0%, #1286c9 100%)',
          }}
        >
          {/* <div className="md:flex md:-right-12 md:bottom-0 max-h md:justify-end md:items-end"> */}
          <Image
            src="/images/rectangle1.png"
            alt="img-faq"
            width={740}
            height={389}
            className="flex justify-items-end rounded-tr-xl"
          />
        </div>
        <div
          className="flex z-2"
          style={{
            padding: '10px 40px',
          }}
        >
          <div className="flex flex-row md:w-full ">
            <div
              style={{
                position: 'relative',
                top: '-100px',
                minWidth: '200px',
              }}
            >
              <Avatar
                size={200}
                icon={<UserOutlined />}
                src={urlImages + (dataUser?.photoAthlete?.file || '')}
              />
            </div>
            <div
              style={{
                position: 'relative',
                top: '-50px',
                width: '100%',
                padding: '0px 30px',
              }}
            >
              <Text
                size="body1"
                className="md:text-lg text-base font-inter font-bold mb-4"
                style={{ color: '#ffff' }}
              >
                My Profile
              </Text>
              <div
                className="flex flex-row mb-6"
                style={{
                  gap: 20,
                  marginTop: 30,
                }}
              >
                <div
                  // className="md:w-[30%]"
                  style={{
                    width: 'calc(100% / 2)',
                  }}
                >
                  <div className="md:w-[50% w-full mb-6">
                    <Text size="subtitle">Email</Text>
                  </div>
                  <div
                    className="md:w-[50%] w-full"
                    style={{
                      borderBottom: '1px solid black',
                      marginBottom: '0px',
                      marginTop: '0px',
                    }}
                  >
                    <Text size="h6">{dataUser?.email}</Text>
                  </div>
                </div>
                {/* BIB */}
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
          <Collapse
            size="large"
            items={[
              {
                key: '1',
                label: 'Informasi Profile',
                children: Profile(dataUser),
              },
            ]}
            expandIconPosition="right"
          />
        </div>
        <div className="mb-10">
          <Collapse
            size="large"
            items={[
              {
                key: '1',
                label: 'Jersey',
                children: Jersey(dataUser),
              },
            ]}
            expandIconPosition="right"
          />
        </div>
        <div className="mb-10">
          <Collapse
            size="large"
            items={[
              {
                key: '1',
                label: 'Data Kesehatan & Kontak Darurat',
                children: Kontak(dataUser),
              },
            ]}
            expandIconPosition="right"
          />
        </div>
        <div className="mb-10 flex justify-end">
          <PrimaryButton
            type="primary"
            htmlType="submit"
            onClick={toEdit}
            className="justify-center rounded-lg md:w-[15%] w-20% mb-12"
            style={{ height: '50px' }}
          >
            <Text className="text-[15px] text-inter font-semibold">Edit</Text>
          </PrimaryButton>
        </div>
      </div>
      <ContactUs />
    </div>
  )
}
export default DetailProfile
