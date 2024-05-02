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
  totalQuestion: number
  status: boolean
  action: React.ReactNode
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Total Question',
    dataIndex: 'totalQuestion',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render(value, record, index) {
      // return (
      // <div className="flex">
      //   <IconButton
      //     titlePopUp="Delete"
      //     withPopOverConfirm
      //     icon={<DeleteOutlined />}
      //     className="rounded-none border-none"
      //     descriptionPopUp="Are you sure want to delete this data?"
      //   />
      //   <Link href={`/admin/manage-faq/edit/?id=${record.key}`}>
      //     <IconButton
      //       className="rounded-none border-none"
      //       icon={<EditOutlined />}
      //     />
      //   </Link>
      // </div>
      // )
      const optionAction = (
        <Menu>
          <Menu.Item key="edit">
            <Link
              href={`/admin/manage-faq/edit/?id=${record.key}`}
              className="hover:text-[#ff0000]"
            >
              Edit
            </Link>
          </Menu.Item>
          <Menu.Item key="qna">
            <Link
              href={`/admin/manage-qna/?id=${record.key}`}
              className="hover:text-[#ff0000]"
            >
              Question And Answer
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
    title: 'General Questions',
    totalQuestion: 8,
  },
  {
    key: '2',
    id: '2',
    title: 'Questions Running',
    totalQuestion: 1,
  },
]

export { columns, data }
