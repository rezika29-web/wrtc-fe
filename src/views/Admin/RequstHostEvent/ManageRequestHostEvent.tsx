import React from 'react'
import WrtcTable from 'components/Table/WrtcTable'
import Text from 'components/Text'
import useRequestHostEvent from 'data/useRequestHostEvent'
import { Dropdown, Menu, Popconfirm, notification } from 'antd'
import Link from 'next/link'
import { IconButton } from 'components/Buttons'
import { EllipsisOutlined } from '@ant-design/icons'
import { useMutation } from 'react-query'
import CallAPI from 'services/CallAPI'
import dayjs from 'dayjs'
import Action from './Partials/Action'

function ManagerRequestHostEvent() {
  const { data: reqHostEventData, refetch: refetchReqHostEvent } =
    useRequestHostEvent()
  const qReqHostEventData = useRequestHostEvent()
  const handleDelete = useMutation({
    mutationFn: (id: string) => {
      return CallAPI.deleteRequstHostEvent(id)
    },
    onSuccess() {
      notification.success({
        message: 'Deleted!',
        description: 'Successfully delete User',
      })
      refetchReqHostEvent()
    },
  })
  console.log(reqHostEventData)

  return (
    <div className="bg-transparent flex flex-col gap-3">
      <Text size="h4" className="font-bold">
        Manage Request Host Event
      </Text>
      <Action />
      <WrtcTable
        columns={[
          {
            title: 'Email',
            dataIndex: 'email',
          },
          {
            title: 'City',
            dataIndex: `city`,
          },
          {
            title: 'Created At',
            dataIndex: `created_at`,
            render: (text) => dayjs(text).format('DD-MM-YYYY'),
          },
          {
            title: 'Action',
            dataIndex: 'id',
            render(value) {
              const optionAction = (
                <Menu>
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
        data={reqHostEventData?.data}
        // initial
        pagination={{
          total: qReqHostEventData.totalData,
          current: qReqHostEventData.pagination.page,
          pageSize: qReqHostEventData.pagination.pageSize,
          onChange: qReqHostEventData.handlePaginationChange,
        }}
      />
    </div>
  )
}

export default ManagerRequestHostEvent
