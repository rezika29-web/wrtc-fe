import React from 'react'
import Text from 'components/Text'
import router from 'next/router'
import PrimaryButton from 'components/Buttons'
import { Form, Input } from 'antd'
import CallAPI from 'services/CallAPI'
import { useMutation } from 'react-query'

type EditPasswordPayload = {
  isChangePassword: boolean
  oldPassword: string
  newPassword: string
  confirmNewPassword: string
}
function ModalPassword({ dataUser, onClose, deleteToken }) {
  const [form] = Form.useForm()
  const customizeRequiredMark = (
    label: React.ReactNode,
    { required }: { required: boolean },
  ) => (
    <>
      {label}&nbsp;
      {required && <span style={{ color: 'red' }}>*</span>}
    </>
  )
  const userEditPassword = useMutation({
    mutationFn: (fieldValues: EditPasswordPayload) =>
      CallAPI.editProfile({
        isChangePassword: true,
        oldPassword: fieldValues.oldPassword,
        newPassword: fieldValues.newPassword,
        confirmNewPassword: fieldValues.confirmNewPassword,
        MasterIdentityCardId: dataUser?.MasterIdentityCardId,
        noIdentitas: dataUser?.noIdentitas,
        fullname: dataUser?.fullname,
        telp: dataUser?.telp,
        tempatLahir: dataUser?.tempatLahir,
        tglLahir: dataUser?.tglLahir,
        MasterGenderId: dataUser?.MasterGenderId,
        MasterBloodId: dataUser?.MasterBloodId,
        MasterCountryId: dataUser?.MasterCountryId,
        CityId: dataUser?.CityId,
        MasterShirtSizeId: dataUser?.MasterShirtSizeId,
        namaTelpDarurat: dataUser?.namaTelpDarurat,
        noTelpDarurat: dataUser?.noTelpDarurat,
        alamat: dataUser?.alamat,
        AthleteDiseaseHistories: [dataUser?.AthleteDiseaseHistories],
        emergencyContactRelation: dataUser?.emergencyContactRelation,
        wni: dataUser?.wni,
      }),
    onSuccess(data, variables, context) {
      deleteToken()
      router.push('/').then(() => {
        window.location.reload()
      })
      onClose()
    },
  })
  return (
    <div>
      <Text size="h6" className=" py-3 font-bold" style={{ color: '#0079C4' }}>
        CHANGE PASSWORD
      </Text>
      <Text size="h4" className=" py-3 font-bold">
        UBAH PASSWORD AKUN
      </Text>
      <Form
        form={form}
        onFinish={(fieldValues) => {
          userEditPassword.mutate(fieldValues)
        }}
        layout="vertical"
        className="mt-12"
        requiredMark={customizeRequiredMark}
      >
        <Form.Item
          label="Password Lama"
          name="oldPassword"
          rules={[
            {
              required: true,
              min: 8,
              message: 'Password must be at least 8 characters',
            },
          ]}
        >
          <Input.Password
            placeholder="Masukkan password lama"
            style={{ height: '60px' }}
          />
        </Form.Item>
        <Form.Item
          label="Password Baru"
          name="newPassword"
          rules={[
            {
              required: true,
              min: 8,
              message: 'Password must be at least 8 characters',
            },
          ]}
        >
          <Input.Password
            placeholder="Masukkan password baru"
            style={{ height: '60px' }}
          />
        </Form.Item>
        <Form.Item
          label="Konfirmasi Password Baru"
          name="confirmNewPassword"
          dependencies={['newPassword']}
          rules={[
            { required: true, message: 'Please confirm your password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  new Error('The two passwords do not match'),
                )
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Masukkan konfirmasi password baru"
            style={{ height: '60px' }}
          />
        </Form.Item>
        <PrimaryButton
          type="primary"
          htmlType="submit"
          className="w-full"
          style={{ height: '50px' }}
        >
          <Text className="text-[15px] text-inter font-semibold">Login</Text>
        </PrimaryButton>
      </Form>
    </div>
  )
}
export default ModalPassword
