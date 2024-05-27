import { Card, Form, Input, notification } from 'antd'
import PrimaryButton from 'components/Buttons'
import SimpleInput from 'components/Forms/Input/Inputs'
import Text from 'components/Text'
import useUsers from 'data/useUsers'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useMutation } from 'react-query'
import CallAPI from 'services/CallAPI'
import { userPayload } from 'services/PayloadTypes'

function FormManageUser() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const qUser = useUsers()
  const fData = qUser.data?.data[0]

  const userId = searchParams.get('id')
  const router = useRouter()
  const isUpdateMode = pathname.includes('edit') && !!userId
  const [form] = Form.useForm<userPayload>()

  const createUser = useMutation({
    mutationFn: (fieldValues: userPayload) => {
      return CallAPI.createUsers(fieldValues)
    },
    onSuccess() {
      notification.success({
        message: 'Success!',
        description: 'User successfully added',
      })
      form.resetFields()
      router.push('/admin')
    },
  })

  const updateUser = useMutation({
    mutationFn: (fieldValues: userPayload) => {
      return CallAPI.updateUser(userId || '', fieldValues)
    },
    onSuccess() {
      notification.success({
        message: 'Updated!',
        description: 'User successfully updated',
      })
      form.resetFields()
      router.push(`/admin`)
    },
  })

  useEffect(() => {
    if (isUpdateMode) {
      if (fData) {
        form.setFieldsValue({
          fullname: fData.fullname,
          email: fData.email,
          username: fData.username,
          new_password: fData.new_password,
          confirm_new_password: fData.confirm_new_password,
        })
      }
    }
  }, [fData])
  return (
    <div className="w-full">
      <Form
        form={form}
        name="manage-user"
        layout="vertical"
        className="mt-5"
        onFinish={(fv) => {
          if (isUpdateMode) {
            updateUser.mutate(fv)
          } else {
            createUser.mutate(fv)
          }
        }}
      >
        <div className="flex w-full justify-between items-center mb-5">
          <Text size="h5" className="font-medium">
            {isUpdateMode ? 'Edit' : 'Add'}
          </Text>
          <div>
            <PrimaryButton className="h-10 px-8" onClick={form.submit}>
              {isUpdateMode ? 'Update' : 'Create'}
            </PrimaryButton>
          </div>
        </div>
        <div className="flex gap-5">
          <Card className="w-2/4 p-5">
            <Text size="h6" className="font-medium">
              Form
            </Text>
            <div className="mt-5">
              <Form.Item
                name="fullname"
                label="Nama Lengkap"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  placeholder="Masukkan Nama Lengkap"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                name="username"
                label="Username"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  placeholder="Masukkan Username"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  placeholder="Masukkan Email"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                name="new_password"
                label="Password"
                className="font-inter text-sm font-medium"
              >
                <Input.Password
                  className="h-14 font-normal"
                  placeholder="Masukkan Password"
                />
              </Form.Item>
              <Form.Item
                name="confirm_new_password"
                label="Confirm Password"
                className="font-inter text-sm font-medium"
              >
                <Input.Password
                  className="h-14 font-normal"
                  placeholder="Confirm Password"
                />
              </Form.Item>
            </div>
          </Card>
          <Card className="w-2/4 p-5">
            <Text size="h6" className="font-medium">
              Attachment
            </Text>
            {/* Upload foto component */}
          </Card>
        </div>
      </Form>
    </div>
  )
}

export default FormManageUser
