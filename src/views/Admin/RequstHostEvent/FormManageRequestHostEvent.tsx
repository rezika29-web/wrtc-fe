import { Card, Form, notification } from 'antd'
import PrimaryButton from 'components/Buttons'
import SimpleInput from 'components/Forms/Input/Inputs'
import Text from 'components/Text'
import useRequestHostEvent from 'data/useRequestHostEvent'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useMutation } from 'react-query'
import CallAPI from 'services/CallAPI'

type FormFieldDataTypes = {
  email: string
  city: string
}

function FormManageRequestHostEvent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const ReqHostEventID = searchParams.get('id')
  const qReqHostEvent = useRequestHostEvent()
  const fData = qReqHostEvent.data?.data[0]

  const isUpdateMode = pathname.includes('edit') && !!ReqHostEventID
  const [form] = Form.useForm<FormFieldDataTypes>()

  const createRequestHostEvent = useMutation({
    mutationFn: (fieldValues: FormFieldDataTypes) => {
      return CallAPI.createRequestHostEvent(fieldValues)
    },
    onSuccess() {
      notification.success({
        message: 'Success!',
        description: 'User successfully added',
      })
      form.resetFields()
      router.push('/admin/manage-request-host-event')
    },
  })

  useEffect(() => {
    if (isUpdateMode) {
      if (fData) {
        form.setFieldsValue({
          email: fData.email,
          city: fData.city,
        })
      }
    }
  }, [fData])

  return (
    <div className="w-full">
      <Form
        form={form}
        name="manage-FAQ"
        layout="vertical"
        className="mt-5"
        onFinish={(fv) => {
          createRequestHostEvent.mutate(fv)
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
        <Card className="w-2/4 p-5">
          <Text size="h6" className="font-medium">
            Form
          </Text>
          <div className="mt-5">
            <Form.Item
              label="Email"
              name="email"
              className="font-inter text-sm font-medium"
            >
              <SimpleInput
                placeholder="Enter Email"
                className="h-14 font-normal"
              />
            </Form.Item>
            <Form.Item
              label="City"
              name="city"
              className="font-inter text-sm font-medium"
            >
              <SimpleInput
                placeholder="Enter City"
                className="h-14 font-normal"
              />
            </Form.Item>
          </div>
        </Card>
      </Form>
    </div>
  )
}

export default FormManageRequestHostEvent
