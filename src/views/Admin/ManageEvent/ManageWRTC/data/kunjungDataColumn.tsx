import { EllipsisOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Popconfirm } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IconButton } from 'components/Buttons'
import Text from 'components/Text'
import Link from 'next/link'
import React from 'react'

interface DataType {
  id: string
  key: React.Key
  title: string
  action: React.ReactNode
}

const columnKunjung: ColumnsType<DataType> = [
  {
    title: 'Tempat Kunjungan',
    dataIndex: 'title',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render(value, record, index) {
      const optionAction = (
        <Menu>
          <Menu.Item key="edit">
            <Link
              href={`/admin/manage-event/we-run-the-city/edit-kunjungan/?id=${record.key}`}
              className="text-[#000000]"
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
const dataKunjung = [
  {
    key: '1',
    title: 'Padang We Run The City',
  },
  {
    key: '2',
    title: 'Lampung We Run The City',
  },
]

export { columnKunjung, dataKunjung }
