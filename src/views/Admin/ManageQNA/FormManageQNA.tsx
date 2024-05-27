import { Card, Form, notification } from 'antd'
import PrimaryButton from 'components/Buttons'
import SimpleInput from 'components/Forms/Input/Inputs'
import Text from 'components/Text'
import useFaqs from 'data/useFaqs'
import useQna from 'data/useQnas'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import CallAPI from 'services/CallAPI'
import { qnaPayload } from 'services/PayloadTypes'

function FormManageQNA() {
  const qFaq = useFaqs()
  const qQna = useQna()

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const QNAId = searchParams.get('id')
  const faqId = searchParams.get('faq_id')
  const router = useRouter()
  const [form] = Form.useForm<qnaPayload>()
  const [previousFaqId, setPreviousFaqId] = useState(QNAId || '')

  useEffect(() => {
    setPreviousFaqId(QNAId || '')
  }, [QNAId])

  const fDataQna = qQna.data?.data.find((qna) => qna.id === QNAId)
  const isUpdateMode = pathname.includes('edit') && !!QNAId

  const generateAutoIncrementOrder = () => {
    const highestOrder = Math.max(
      ...(qFaq.data?.data.map((faq) => faq.order) || [0]),
    )
    return highestOrder + 1
  }

  const createQna = useMutation({
    mutationFn: (fieldValues: qnaPayload) => {
      return CallAPI.createQna(fieldValues)
    },
    onSuccess() {
      notification.success({
        message: 'Success!',
        description: 'QNA successfully added',
      })
      form.resetFields()
      router.push(`/admin/manage-qna/?id=${QNAId}`)
    },
  })

  const updateQna = useMutation({
    mutationFn: (fieldValues: qnaPayload) => {
      return CallAPI.updateQna(QNAId || '', fieldValues)
    },
    onSuccess() {
      notification.success({
        message: 'Updated!',
        description: 'QNA successfully updated',
      })
      form.resetFields()
      router.push(`/admin/manage-qna/?id=${QNAId}`)
    },
  })

  useEffect(() => {
    if (isUpdateMode && fDataQna) {
      form.setFieldsValue({
        question: fDataQna.question,
        order: fDataQna.order,
        answer: fDataQna.answer,
        faq_id: QNAId,
      })
    } else {
      form.setFieldsValue({
        order: generateAutoIncrementOrder(),
        faq_id: QNAId,
      })
    }
  }, [fDataQna, faqId, isUpdateMode])

  return (
    <div className="w-full">
      <Form
        form={form}
        name="manage-QNA"
        layout="vertical"
        className="mt-5"
        onFinish={(fv) => {
          if (isUpdateMode) {
            updateQna.mutate(fv)
          } else {
            createQna.mutate(fv)
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
              name="question"
              label="Question"
              className="font-inter text-sm font-medium"
            >
              <SimpleInput
                placeholder="Enter Question"
                className="h-14 font-normal"
              />
            </Form.Item>
            <Form.Item
              name="answer"
              label="Answer"
              className="font-inter text-sm font-medium"
            >
              <SimpleInput
                placeholder="Enter Answer"
                className="h-14 font-normal"
              />
            </Form.Item>
            <Form.Item name="order" style={{ display: 'none' }} />
            <Form.Item name="faq_id" style={{ display: 'none' }} />
          </div>
        </Card>
      </Form>
    </div>
  )
}

export default FormManageQNA
