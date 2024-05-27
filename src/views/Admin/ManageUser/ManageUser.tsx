import WrtcTable from 'components/Table/WrtcTable'
import React from 'react'
import Text from 'components/Text'
import Action from 'views/Admin/ManageUser/Partials/Action'
import useUsers from 'data/useUsers'
import { useMutation } from 'react-query'
import CallAPI from 'services/CallAPI'
import { Tag, notification } from 'antd'
import { IconButton } from 'components/Buttons'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import Link from 'next/link'

function ManagerUser() {
  const { data: usersData, refetch: refetchUsers } = useUsers()

  const handleDelete = useMutation({
    mutationFn: (id: string) => {
      return CallAPI.deleteUsers(id)
    },
    onSuccess() {
      notification.success({
        message: 'Deleted!',
        description: 'Successfully delete User',
      })
      refetchUsers()
    },
  })
  return (
    <div className="bg-transparent flex flex-col gap-3">
      <Text size="h4" className="font-bold">
        Manage Users
      </Text>
      <Action />
      <WrtcTable
        columns={[
          {
            title: 'Name',
            dataIndex: 'fullname',
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
            render(value) {
              return (
                <Tag color={value ? 'green' : 'red'}>
                  {value ? 'Active' : 'Inactive'}
                </Tag>
              )
            },
          },
          {
            title: 'Action',
            dataIndex: 'id',
            render(value) {
              return (
                <div className="flex">
                  <IconButton
                    titlePopUp="Delete"
                    withPopOverConfirm
                    icon={<DeleteOutlined />}
                    onConfirm={() => handleDelete.mutate(value)}
                    className="rounded-none border-none"
                    descriptionPopUp="Are you sure want to delete this data?"
                  />
                  <Link href={`/admin/manage-user/edit/?id=${value}`}>
                    <IconButton
                      className="rounded-none border-none"
                      icon={<EditOutlined />}
                    />
                  </Link>
                </div>
              )
            },
          },
        ]}
        data={usersData?.data}
        // initial
        pagination={{
          current: 1,
          pageSize: 10,
          total: 10,
          showSizeChanger: true,
        }}
      />
    </div>
  )
}

export default ManagerUser
