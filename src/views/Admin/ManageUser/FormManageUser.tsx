import { Card, Form, Input } from 'antd'
import PrimaryButton from 'components/Buttons'
import SimpleInput from 'components/Forms/Input/Inputs'
import Text from 'components/Text'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

function FormManageUser() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const userId = searchParams.get('id')

  const isUpdateMode = pathname.includes('edit') && !!userId

  return (
    <div className="w-full">
      <Form name="manage-user" layout="vertical" className="mt-5">
        <div className="flex w-full justify-between items-center mb-5">
          <Text size="h5" className="font-medium">
            {isUpdateMode ? 'Edit' : 'Add'}
          </Text>
          <div>
            <PrimaryButton className="h-10 px-8">
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
                label="Nama Lengkap"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  placeholder="Masukkan Nama Lengkap"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Username"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  placeholder="Masukkan Username"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Email"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  placeholder="Masukkan Email"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                className="font-inter text-sm font-medium"
              >
                <Input.Password
                  className="h-14 font-normal"
                  placeholder="Masukkan Password"
                />
              </Form.Item>
              <Form.Item
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
