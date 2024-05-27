import { Card, Form } from 'antd'
import PrimaryButton from 'components/Buttons'
import SimpleInput, { Uploads } from 'components/Forms/Input/Inputs'
import Text from 'components/Text'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

function FormManageKunjungan() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const kunjunganId = searchParams.get('id')

  const isUpdateMode = pathname.includes('edit') && !!kunjunganId

  return (
    <div className="w-full">
      <Form name="manage-kunjungan" layout="vertical" className="mt-5">
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
                label="Tempat Kunjungan"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  placeholder="Masukkan Tempat Kunjungan"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Urutan"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  placeholder="Masukkan Urutan"
                  className="h-14 font-normal"
                />
              </Form.Item>
            </div>
          </Card>
          <Card className="w-2/4 p-5">
            <Text size="h6" className="font-medium mb-10">
              Attachment
            </Text>
            {/* Upload foto component */}
            <Uploads />
          </Card>
        </div>
        <div className="my-9">
          <PrimaryButton className="h-14 w-full font-medium text-base">
            Submit
          </PrimaryButton>
        </div>
      </Form>
    </div>
  )
}

export default FormManageKunjungan
