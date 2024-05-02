import React from 'react'
import Text from 'components/Text'
import CardDashboard from 'components/Cards/CardDashboard'
import ContactUs from 'components/ContactUs'
import Image from 'next/image'
import { Collapse, Form, Input } from 'antd'
import SimpleInput from 'components/Forms/Input/Inputs'
import PrimaryButton, { SecondaryButton } from 'components/Buttons'
import Profile from './Profile'
import Jersey from './Jersey'
import Kontak from './Kontak'

function DetailProfile() {
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
                children: Profile(),
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
                children: Jersey(),
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
                children: Kontak(),
              },
            ]}
            expandIconPosition="right"
          />
        </div>
        <div className="mb-10 flex justify-end">
          <SecondaryButton
            className="justify-center rounded-lg md:w-[15%] w-20% mb-12 mr-10"
            style={{ height: '50px' }}
          >
            <Text className="text-[15px] text-inter font-semibold">Back</Text>
          </SecondaryButton>
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
export default DetailProfile
