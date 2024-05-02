import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IconButton } from 'components/Buttons'
import Link from 'next/link'
import React from 'react'

interface DataType {
  id: string
  rank: number
  nama: string
  gender: string
  waktu: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Rank',
    dataIndex: 'rank',
  },
  {
    title: 'Nama',
    dataIndex: 'nama',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
  },
  {
    title: 'Waktu',
    dataIndex: 'waktu',
  },
]

// FOR MOCKUP ONLY
const data = [
  {
    rank: '1',
    nama: 'John Brown',
    gender: 'Laki Laki',
    waktu: '00:24:01',
  },
  {
    rank: '2',
    nama: 'Robert Downey',
    gender: 'Laki Laki',
    waktu: '00:24:01',
  },
  {
    rank: '3',
    nama: 'Jhon Doe',
    gender: 'Laki Laki',
    waktu: '00:24:01',
  },
]

export { columns, data }
