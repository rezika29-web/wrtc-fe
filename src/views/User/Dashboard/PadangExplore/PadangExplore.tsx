import Text from 'components/Text'
import React from 'react'
import SegmentedComponent from 'components/Segmented'
import CardChallenge from 'components/Cards/CardChallenge'
import ContactUs from 'components/ContactUs'
import Image from 'next/image'
import WrtcTable from 'components/Table/WrtcTable'
import useEvents from 'data/useEvents'
import moment from 'moment'
import { LinkButton } from 'components/Buttons'

const columns = [
  {
    title: 'No',
    render(value, record, index) {
      return index + 1
    },
  },
  {
    title: 'Nama Event',
    dataIndex: 'nama',
  },
  {
    title: 'Tanggal Event',
    dataIndex: 'tglEventMulai',
    render(value, record, index) {
      return moment(value).format('DD MMMM YYYY')
    },
  },
  {
    title: 'Tanggal Event',
    dataIndex: 'tglEventMulai',
    render(value, record, index) {
      return moment(value).format('DD MMMM YYYY')
    },
  },
  {
    title: 'Status Pembayaran',
    dataIndex: 'example',
    render(value, record, index) {
      return (
        <Text className="w-[60px] bg-[#D7FAD1] border border-[#92F28C] rounded-md text-xs text-[#1F9E3D] px-4 py-1">
          Paid
        </Text>
      )
    },
  },
  {
    title: 'Point',
    dataIndex: 'example',
    render(value, record, index) {
      return (
        <Text className="text-base text-[#F89D3C] font-semibold">45 Point</Text>
      )
    },
  },
  {
    title: 'Action',
    dataIndex: 'id',
    render(value, record, index) {
      return (
        <LinkButton
          className="bg-bluemain h-10 hover:bg-bluemain"
          href={`padang-explore/${value}`}
        >
          <Image src="/icons/u_eye.svg" alt="icon" width={16} height={16} />
        </LinkButton>
      )
    },
  },
]

function PadangExplore() {
  const { data } = useEvents({
    filtered: [{ id: 'nama', value: '' }],
  })
  return (
    <div className="px-5 md:px-[100px] md:py-20">
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
        <SegmentedComponent
          hrefSegmented
          options={[
            { label: 'Dashboard', link: '/dashboard/myprofile' },
            { label: 'Padang Explorer', link: '/dashboard/padang-explore' },
            { label: 'Gallery', link: '/' },
            { label: 'Riwayat Pembayaran', link: '/dashboard/paymenthistory' },
          ]}
          className="p-0 w-[86px] md:w-auto md:px-12 md:py-2"
        />
      </div>
      <Text className="h-[23px] text-[18px] md:text-[28px] font-bold border-l-[6px] border-[#1088C8] ps-8 flex items-center">
        Padang Explorer
      </Text>
      <WrtcTable className="mt-16" columns={columns} data={data} />
      <ContactUs />
    </div>
  )
}

export default PadangExplore
