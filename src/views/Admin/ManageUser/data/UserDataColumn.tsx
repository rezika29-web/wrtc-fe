import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IconButton } from 'components/Buttons'
import Link from 'next/link'
import React from 'react'

interface DataType {
  id: string
  key: React.Key
  name: string
  username: string
  email: string
  status: boolean
  action: React.ReactNode
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render(value, record, index) {
      return (
        <Tag color={value ? 'green' : 'red'}>
          {value ? 'Active' : 'Inactive'}
        </Tag>
      )
    },
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render(value, record, index) {
      return (
        <div className="flex">
          <IconButton
            titlePopUp="Delete"
            withPopOverConfirm
            icon={<DeleteOutlined />}
            className="rounded-none border-none"
            descriptionPopUp="Are you sure want to delete this data?"
          />
          <Link href={`/admin/manage-user/edit/?id=${record.key}`}>
            <IconButton
              className="rounded-none border-none"
              icon={<EditOutlined />}
            />
          </Link>
        </div>
      )
    },
  },
]

// FOR MOCKUP ONLY
const data = [
  {
    key: '1',
    name: 'John Brown',
    username: 'JohnB',
    email: 'Jhon@gmail.com',
    status: true,
  },
  {
    key: '2',
    name: 'Robert Downey',
    username: 'Robert',
    email: 'Jhon@gmail.com',
    status: false,
  },
  {
    key: '3',
    name: 'Jhon Doe',
    username: 'Jhon',
    email: 'Jhon@gmail.com',
    status: false,
  },
]

export { columns, data }
