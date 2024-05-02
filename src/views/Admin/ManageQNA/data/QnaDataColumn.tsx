import { EllipsisOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu, Popconfirm, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IconButton } from 'components/Buttons'
import Text from 'components/Text'
import Link from 'next/link'
import React from 'react'

interface DataType {
  id: string
  key: React.Key
  title: string
  status: boolean
  action: React.ReactNode
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Question',
    dataIndex: 'title',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render(value, record, index) {
      return (
        <Tag color={value ? 'green' : 'red'}>
          {value ? 'published' : 'unpublished'}
        </Tag>
      )
    },
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render(value, record, index) {
      const optionAction = (
        <Menu>
          <Menu.Item key="edit">
            <Link
              href={`/admin/manage-faq/edit/?id=${record.key}`}
              className="text-[#ff0000]"
            >
              Edit
            </Link>
          </Menu.Item>
          <Menu.Item key="delete">
            <Popconfirm
              title="Delete"
              description="Are you sure to delete this task?"
            >
              <Text className="text-[#ff0000]">Delete</Text>
            </Popconfirm>
          </Menu.Item>
        </Menu>
      )

      return (
        <div className="flex">
          <Dropdown overlay={optionAction} placement="bottomLeft">
            <IconButton
              icon={<EllipsisOutlined />}
              className="rounded-none border-none"
            />
          </Dropdown>
        </div>
      )
    },
  },
]

// FOR MOCKUP ONLY

const data = [
  {
    key: '1',
    id: '1',
    title: 'Are there any training programs available for Padang HM events?',
    totalQuestion: 8,
    status: true,
  },
  {
    key: '2',
    id: '2',
    title: 'What is Padang HM, We Run the City?',
    totalQuestion: 1,
    status: false,
  },
]

export { columns, data }
