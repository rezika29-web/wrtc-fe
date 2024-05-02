import { Card, Form } from 'antd'
import PrimaryButton from 'components/Buttons'
import SimpleInput from 'components/Forms/Input/Inputs'
import Text from 'components/Text'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

function FormManageQNA() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const QNAId = searchParams.get('id')

  const isUpdateMode = pathname.includes('edit') && !!QNAId

  return (
    <div className="w-full">
      <Form name="manage-QNA" layout="vertical" className="mt-5">
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
        <Card className="w-2/4 p-5">
          <Text size="h6" className="font-medium">
            Form
          </Text>
          <div className="mt-5">
            <Form.Item label="Title" className="font-inter text-sm font-medium">
              <SimpleInput
                placeholder="Enter Title"
                className="h-14 font-normal"
              />
            </Form.Item>
            <Form.Item
              label="Total Question"
              className="font-inter text-sm font-medium"
            >
              <SimpleInput
                placeholder="Enter Total Question"
                className="h-14 font-normal"
              />
            </Form.Item>
          </div>
        </Card>
      </Form>
    </div>
  )
}

export default FormManageQNA
