import { ColumnsType } from 'antd/es/table'
import React from 'react'

interface DataType {
  id: string
  key: React.Key
  namaAthlete: string
  gender: string
  event: string
  kategori: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Nama Athlete',
    dataIndex: 'namaAthlete',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
  },
  {
    title: 'Event',
    dataIndex: 'event',
  },
  {
    title: 'Kategori',
    dataIndex: 'kategori',
  },
]

// FOR MOCKUP ONLY
const data = [
  {
    key: '1',
    namaAthlete: 'Padang We Run The City',
    gender: 'female',
    event: 'padang',
    kategori: '-',
  },
  {
    key: '2',
    namaAthlete: 'Lampung We Run The City',
    gender: 'female',
    event: 'Lampung',
    kategori: '-',
  },
]

export { columns, data }
