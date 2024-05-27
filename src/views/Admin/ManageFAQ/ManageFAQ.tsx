import React from 'react'
import WrtcTable from 'components/Table/WrtcTable'
import Text from 'components/Text'
import useFaqs from 'data/useFaqs'
import { Dropdown, Menu, Popconfirm, notification } from 'antd'
import Link from 'next/link'
import { IconButton } from 'components/Buttons'
import { EllipsisOutlined } from '@ant-design/icons'
import { useMutation } from 'react-query'
import CallAPI from 'services/CallAPI'
import useQna from 'data/useQnas'
import Action from './Partials/Action'

function ManagerFAQ() {
  const { data: faqData, refetch: refetchFaqs } = useFaqs()
  const qFaq = useFaqs()

  const handleDelete = useMutation({
    mutationFn: (id: string) => {
      return CallAPI.deleteFaq(id)
    },
    onSuccess() {
      notification.success({
        message: 'Deleted!',
        description: 'Successfully delete FAQ',
      })
      refetchFaqs()
    },
  })

  return (
    <div className="bg-transparent flex flex-col gap-3">
      <Text size="h4" className="font-bold">
        Manage FAQ
      </Text>
      <Action />
      <WrtcTable
        columns={[
          {
            title: 'Title',
            dataIndex: 'faq',
          },
          {
            title: 'Total Question',
            dataIndex: `total_question`,
          },
          {
            title: 'Action',
            dataIndex: 'id',
            render(value) {
              const optionAction = (
                <Menu>
                  <Menu.Item key="edit">
                    <Link
                      href={`/admin/manage-faq/edit/?id=${value}`}
                      className="hover:text-[#ff0000]"
                    >
                      Edit
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="qna">
                    <Link
                      href={`/admin/manage-qna/?id=${value}`}
                      className="hover:text-[#ff0000]"
                    >
                      Question And Answer
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="delete">
                    <Popconfirm
                      title="Delete"
                      description="Are you sure to delete this task?"
                      onConfirm={() => handleDelete.mutate(value)}
                      okText="Yes"
                      cancelText="No"
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
        ]}
        data={faqData?.data}
        pagination={{
          total: qFaq.totalData,
          current: qFaq.pagination.page,
          pageSize: qFaq.pagination.pageSize,
          onChange: qFaq.handlePaginationChange,
        }}
      />
    </div>
  )
}

export default ManagerFAQ
