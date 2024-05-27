import { Card, Form, InputNumber, notification } from 'antd'
import PrimaryButton from 'components/Buttons'
import SimpleInput from 'components/Forms/Input/Inputs'
import Text from 'components/Text'
import useFaqs from 'data/useFaqs'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useMutation } from 'react-query'
import CallAPI from 'services/CallAPI'

type FormFieldDataTypes = {
  faq: string
  order: number
}

function FormManageFAQ() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const FAQId = searchParams.get('id')
  const router = useRouter()
  const isUpdateMode = pathname.includes('edit') && !!FAQId
  const [form] = Form.useForm<FormFieldDataTypes>()

  const qFaq = useFaqs({
    filtered: [{ id: 'id', value: FAQId || '' }],
  })
  const fData = qFaq.data?.data[0]

  const generateAutoIncrementOrder = () => {
    const highestOrder = Math.max(
      ...(qFaq.data?.data.map((faq) => faq.order) || [0]),
    )
    return highestOrder + 1
  }

  const createFaq = useMutation({
    mutationFn: (fieldValues: FormFieldDataTypes) => {
      const valuesWithAutoIncrementOrder = {
        ...fieldValues,
        order: generateAutoIncrementOrder(),
      }
      return CallAPI.createFaq(valuesWithAutoIncrementOrder)
    },
    onSuccess() {
      notification.success({
        message: 'Success!',
        description: 'FAQ successfully added',
      })
      form.resetFields()
      router.push('/admin/manage-faq')
    },
  })
  const updateFaq = useMutation({
    mutationFn: (fieldValues: FormFieldDataTypes) => {
      return CallAPI.updateFaq(FAQId || '', fieldValues)
    },
    onSuccess() {
      notification.success({
        message: 'Updated!',
        description: 'FAQ successfully updated',
      })
      form.resetFields()
      qFaq.remove()
      router.push('/admin/manage-faq')
    },
  })
  useEffect(() => {
    if (isUpdateMode) {
      if (fData) {
        form.setFieldsValue({
          faq: fData.faq,
          order: fData.order,
        })
      }
    } else {
      form.setFieldsValue({
        order: generateAutoIncrementOrder(),
      })
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
          if (isUpdateMode) {
            const updatedValues = isUpdateMode
              ? { ...fv, order: fData.order }
              : fv
            updateFaq.mutate(updatedValues)
          } else {
            createFaq.mutate(fv)
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
        <Card className="w-2/4 p-5">
          <Text size="h6" className="font-medium">
            Form
          </Text>
          <div className="mt-5">
            <Form.Item
              label="Title"
              className="font-inter text-sm font-medium"
              name="faq"
            >
              <SimpleInput
                placeholder="Enter Title"
                className="h-14 font-normal"
              />
            </Form.Item>
            <Form.Item
              initialValue={generateAutoIncrementOrder()}
              className="font-inter text-sm font-medium"
              name="order"
            />
          </div>
        </Card>
      </Form>
    </div>
  )
}

export default FormManageFAQ
