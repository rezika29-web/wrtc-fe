import { Card, Form, Input } from 'antd'
import PrimaryButton from 'components/Buttons'
import SimpleInput, { Uploads } from 'components/Forms/Input/Inputs'
import Text from 'components/Text'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

function FormEditCategory() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const editcategoryId = searchParams.get('id')

  const isUpdateMode = pathname.includes('edit') && !!editcategoryId

  const { TextArea } = Input

  return (
    <div className="w-full">
      <Form name="manage-edit-category" layout="vertical" className="my-10">
        <div className="flex w-full justify-between items-center mb-5">
          <Text size="h5" className="font-medium">
            {isUpdateMode ? 'Edit' : 'Add'}
          </Text>
        </div>
        <div className="flex gap-5">
          <Card className="w-2/4 p-5">
            <Text size="h6" className="font-medium">
              Form
            </Text>
            <div className="mt-5">
              <Form.Item
                label="Title"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  disabled
                  placeholder="Masukkan Title"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Description"
                className="font-inter text-sm font-medium"
              >
                <TextArea
                  rows={4}
                  placeholder="Masukan Description"
                  maxLength={6}
                  disabled
                />
              </Form.Item>
              <Form.Item
                label="Link plotarute"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  disabled
                  placeholder="Link plotarute"
                  className="h-14 font-normal"
                />
              </Form.Item>
            </div>
          </Card>
          <Card className="w-2/4 p-5">
            <Text size="h6" className="font-medium mb-12">
              Attachment
            </Text>
            {/* Upload foto component */}
            <Uploads />
          </Card>
        </div>
      </Form>
      <PrimaryButton className="h-14 w-full font-medium text-base">
        Submit
      </PrimaryButton>
    </div>
  )
}

export default FormEditCategory
