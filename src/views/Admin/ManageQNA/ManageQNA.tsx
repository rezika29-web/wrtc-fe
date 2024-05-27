import React, { useEffect, useState } from 'react'
import WrtcTable from 'components/Table/WrtcTable'
import Text from 'components/Text'
import useQna from 'data/useQnas'
import CallAPI from 'services/CallAPI'
import { useMutation } from 'react-query'
import { Dropdown, Menu, Popconfirm, Tag, notification } from 'antd'
import Link from 'next/link'
import { IconButton } from 'components/Buttons'
import { EllipsisOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import Action from './Partials/Action'

function ManagerQNA() {
  const router = useRouter()
  const [faqId, setFaqId] = useState(null)
  const { refetch: refetchQnas } = useQna()
  const qQna = useQna({ filtered: [{ id: 'faq_id', value: faqId || '' }] })
  const fQnaData = qQna.data?.data
  useEffect(() => {
    const { id } = router.query
    setFaqId(id)
  }, [router.query])

  const handleDelete = useMutation({
    mutationFn: (id: string) => {
      return CallAPI.deleteQna(id)
    },
    onSuccess() {
      notification.success({
        message: 'Deleted!',
        description: 'Successfully delete QNA',
      })
      refetchQnas()
    },
  })
  const filteredQnaData =
    faqId && fQnaData ? fQnaData.filter((qna) => qna.faq_id === faqId) : []

  return (
    <div className="bg-transparent flex flex-col gap-3">
      <Text size="h4" className="font-bold">
        Frequently Asked Questions for ODC Service
      </Text>
      <Action selectedId={faqId} />
      <WrtcTable
        columns={[
          {
            title: 'Question',
            dataIndex: 'question',
          },
          {
            title: 'Status',
            dataIndex: 'status',
            render(value) {
              return (
                <Tag color={value ? 'green' : 'red'}>
                  {value ? 'published' : 'unpublished'}
                </Tag>
              )
            },
          },
          {
            title: 'Action',
            dataIndex: 'id',
            render(value) {
              const optionAction = (
                <Menu>
                  <Menu.Item key="edit">
                    <Link
                      href={`/admin/manage-qna/edit/?id=${value}`}
                      className="text-[#ff0000]"
                    >
                      Edit
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
        data={filteredQnaData}
        pagination={{
          total: qQna.totalData,
          current: qQna.pagination.page,
          pageSize: qQna.pagination.pageSize,
          onChange: qQna.handlePaginationChange,
        }}
      />
    </div>
  )
}

export default ManagerQNA
