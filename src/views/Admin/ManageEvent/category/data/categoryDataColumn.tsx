import { EllipsisOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IconButton } from 'components/Buttons'
import Link from 'next/link'
import React from 'react'

interface DataType {
  id: string
  key: React.Key
  kategory: string
  harga: string
  kuota: string
  sisaKuota: string
  startRegistrasi: string
  finishRegistrasi: string
  action: React.ReactNode
}

const columns: ColumnsType<DataType> = [
  {
    title: 'kategory',
    dataIndex: 'Kategory',
  },
  {
    title: 'harga',
    dataIndex: 'Harga',
  },
  {
    title: 'kuota',
    dataIndex: 'Kuota',
  },
  {
    title: 'sisaKuota',
    dataIndex: 'Sisa Kuota',
  },
  {
    title: 'startRegistrasi',
    dataIndex: 'Start Registrasi',
  },
  {
    title: 'finishRegistrasi',
    dataIndex: 'Finish Registrasi',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render(value, record, index) {
      const optionAction = (
        <Menu>
          <Menu.Item key="edit">
            <Link
              href={`/admin/manage-event/category/detail-category/?id=${record.key}`}
              className="text-[#000000]"
            >
              Detail
            </Link>
          </Menu.Item>
          <Menu.Item key="edit">
            <Link
              href={`/admin/manage-event/category/edit/?id=${record.key}`}
              className="text-[#ff0000]"
            >
              Edit
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
    kategori: 'Padang We Run The City',
    harga: 'Padang',
    Kuota: 'Padang',
  },
  {
    key: '2',
    kategori: 'Lampung We Run The City',
    harga: 'Bandar Lampung',
    Kuota: '14 September 2024 - 20 September 2024',
  },
]

export { columns, data }
