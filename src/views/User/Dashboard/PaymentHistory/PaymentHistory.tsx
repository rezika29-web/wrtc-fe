import React, { useState } from 'react'
import { Table, Space, Select } from 'antd'
import Text from 'components/Text'
import SegmentedComponent from 'components/Segmented'
import ContactUs from 'components/ContactUs'
import PrimaryButton from 'components/Buttons'

const { Option } = Select

const data = [
  {
    key: '1',
    no: 1,
    event: 'Padang Half Marathon',
    tanggalPembayaran: '2022-01-01',
    total: 100000,
    status: 'Approved',
  },
  {
    key: '2',
    no: 2,
    event: 'Event B',
    tanggalPembayaran: '2022-02-02',
    total: 150000,
    status: 'Waiting',
  },
  {
    key: '3',
    no: 3,
    event: 'Event C',
    tanggalPembayaran: '2022-03-03',
    total: 200000,
    status: 'Approved',
  },
  {
    key: '4',
    no: 4,
    event: 'Event D',
    tanggalPembayaran: '2022-04-04',
    total: 250000,
    status: 'Waiting',
  },
  {
    key: '5',
    no: 5,
    event: 'Event E',
    tanggalPembayaran: '2022-05-05',
    total: 300000,
    status: 'Approved',
  },
  {
    key: '6',
    no: 6,
    event: 'Event F',
    tanggalPembayaran: '2022-06-06',
    total: 350000,
    status: 'Approved',
  },
]
function PaymentHistory() {
  const [statusFilter, setStatusFilter] = useState('All')
  const [entriesPerPage, setEntriesPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  // const [paginationSet, setPaginationSet] = useState()
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      render: (text, record, index) =>
        (currentPage - 1) * entriesPerPage + index + 1,
    },
    { title: 'Event', dataIndex: 'event', key: 'event' },
    {
      title: 'Tanggal Pembayaran',
      dataIndex: 'tanggalPembayaran',
      key: 'tanggalPembayaran',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (text) => `Rp. ${text}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => {
        const statusColor = text === 'Approved' ? '#1F9E3D' : '#F89D3C'
        const bgColor = text === 'Approved' ? '#92F28C' : '#F9DABA'
        return (
          <span
            style={{
              color: statusColor,
              backgroundColor: bgColor,
              width: '50%',
              display: 'inline-block',
              border: '1px solid',
            }}
            className="rounded-md text-center"
          >
            {text}
          </span>
        )
      },
    },
    {
      title: 'Aksi',
      key: 'aksi',
      render: (text, record) => (
        <Space size="middle">
          {record.status === 'Waiting' && (
            // eslint-disable-next-line react/button-has-type
            <PrimaryButton
              style={{
                height: '30px',
              }}
              className="rounded-md text-center justify-center w-full"
            >
              Pembayaran
            </PrimaryButton>
          )}
        </Space>
      ),
    },
  ]

  const handleFilterChange = (value) => {
    setStatusFilter(value)
    if (value === 'All') {
      setEntriesPerPage(data.length)
    } else if (value === 'Approved') {
      setEntriesPerPage(10)
    } else if (value === 'Waiting') {
      setEntriesPerPage(5)
    }
  }
  const handleEntryChange = (value) => {
    setEntriesPerPage(value)
    console.log(value)
  }
  const filteredData = data.filter(
    (item) => statusFilter === 'All' || item.status === statusFilter,
  )
  const paginatedData = filteredData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage,
  )

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
        <SegmentedComponent
          options={[
            { label: 'Dashboard', link: '/' },
            { label: 'Padang Explorer', link: '/' },
            { label: 'Gallery', link: '/' },
            { label: 'Riwayat Pembayaran', link: '/dashboard/paymenthistory' },
          ]}
          className="px-12 py-2"
        />
      </div>
      <div className="mb-10">
        <div className="flex flex-row w-full md:gap-x-6 gap-3">
          <div className="md:w-[75%]">
            <Text
              className="text-2xl font-extrabold leading-9 font-rubik text-[#444458] mb-6 pl-9"
              style={{ borderLeft: '5px solid #007bff' }}
            >
              Riwayat Pembayaran
            </Text>
          </div>
          <div className="md:w-[25%] w-full relative bg-white  ">
            <div
              className="flex flex-row rounded-md p-2 align-middle items-center"
              style={{ border: '2px solid #808080' }}
            >
              <Text className="ml-2 md:w-[25%] align-middle " size="body1">
                Filter By :
              </Text>
              <Select
                defaultValue="All"
                style={{ width: '75%', borderStyle: 'none', border: 'none' }}
                onChange={handleFilterChange}
              >
                <Option value="All">All</Option>
                <Option value="Approved">Approved</Option>
                <Option value="Waiting">Waiting</Option>
              </Select>
            </div>
          </div>
        </div>
        {/* <Table columns={columns} dataSource={filteredData} /> */}
        <Table
          columns={columns}
          dataSource={paginatedData}
          // pagination={{
          //   pageSize: entriesPerPage,
          // }}
          pagination={{
            pageSize: entriesPerPage,
            current: currentPage,
            total: filteredData.length,
            onChange: (page) => setCurrentPage(page),
          }}
        />
        <div className="flex flex-row rounded-md p-2 align-middle items-center md:w-[30%]">
          <Select
            defaultValue="5 Entri"
            style={{ width: '40%', borderStyle: 'none', border: 'none' }}
            onChange={(value) => handleEntryChange(parseInt(value, 10))}
          >
            <Option value={10}>10 Entri</Option>
            <Option value={5}>5 Entri</Option>
          </Select>
          <Text className="ml-2 md:w-[60%] align-middle " size="caption">
            Menampilkan 1 hingga 2 dari 2 entri
          </Text>
        </div>
      </div>
      <ContactUs />
    </div>
  )
}

export default PaymentHistory
