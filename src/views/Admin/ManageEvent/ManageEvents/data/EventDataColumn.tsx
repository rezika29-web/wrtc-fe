import { EllipsisOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IconButton } from 'components/Buttons'
import Link from 'next/link'
import React from 'react'

interface DataType {
  id: string
  key: React.Key
  title: string
  eventLocation: string
  eventDate: Date
  action: React.ReactNode
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Event Location',
    dataIndex: 'eventLocation',
  },
  {
    title: 'Event Date',
    dataIndex: 'eventDate',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render(value, record, index) {
      const optionAction = (
        <Menu>
          <Menu.Item key="eventLocation">
            <Link
              href={`/admin/manage-event/detail/?id=${record.key}`}
              className="text-[#000000]"
            >
              Detail
            </Link>
          </Menu.Item>
          <Menu.Item key="eventDate">
            <Link
              href={`/admin/manage-event/category/?id=${record.key}`}
              className="text-[#000000]"
            >
              Kategory
            </Link>
          </Menu.Item>
          <Menu.Item key="wrtc">
            <Link
              href={`/admin/manage-event/we-run-the-city/?id=${record.key}`}
              className="text-[#000000]"
            >
              WRTC
            </Link>
          </Menu.Item>
          <Menu.Item key="peserta">
            <Link
              href={`/admin/manage-event/peserta/?id=${record.key}`}
              className="text-[#000000]"
            >
              Peserta
            </Link>
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
    title: 'Padang We Run The City',
    eventLocation: 'Padang',
    eventDate: 'Padang',
  },
  {
    key: '2',
    title: 'Lampung We Run The City',
    eventLocation: 'Bandar Lampung',
    eventDate: '14 September 2024 - 20 September 2024',
  },
]

export { columns, data }
