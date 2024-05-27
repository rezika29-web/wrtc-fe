import React from 'react'
import Text from 'components/Text'
import { Form, Input } from 'antd'
import SimpleInput from 'components/Forms/Input/Inputs'
import PrimaryButton, { TextButton } from 'components/Buttons'
import useTokenHandler from 'hooks/useTokenHandler'
import { useRouter } from 'next/navigation'
import { useMutation } from 'react-query'
import CallAPI from 'services/CallAPI'
import Background from './Partials/Background'

type LoginAdminPayload = {
  email: string
  password: string
  longitude: string
  latitude: string
}

function AdminLogin() {
  const router = useRouter()
  const { saveToken, token } = useTokenHandler('apiToken')
  const [form] = Form.useForm<LoginAdminPayload>()
  const useLogin = useMutation({
    mutationFn: (fieldValues: LoginAdminPayload) =>
      CallAPI.loginAdmin({
        email: fieldValues.email,
        password: fieldValues.password,
        longitude: fieldValues.longitude,
        latitude: fieldValues.latitude,
      }),
    onSuccess(data) {
      saveToken(data?.data?.accessToken)
      router.push('/admin')
    },
  })
  return (
    <div className="flex min-h-screen">
      <div className="bg-white flex rounded-lg p-5 w-full justify-center">
        <div className="flex h-full">
          <div className="flex flex-col justify-between my-10">
            <Text className="text-primary font-bold text-lg text-center">
              ADMIN
            </Text>

            <div>
              <Text
                className="text-[#444458] font-semibold w-[80%] md:my-6 my-4"
                size="h1"
              >
                Login, Admin We Run The City
              </Text>
              <Form
                layout="vertical"
                form={form}
                onFinish={(fieldValues) => {
                  useLogin.mutate(fieldValues)
                }}
              >
                <Form.Item
                  name="email"
                  label="Email or Username"
                  className="font-inter text-sm font-medium"
                >
                  <SimpleInput placeholder="Input your Email or Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  className="font-inter text-sm font-medium"
                >
                  <Input.Password
                    className="h-14 font-normal"
                    placeholder="Input your password"
                  />
                </Form.Item>
                <Form.Item
                  name="latitude"
                  initialValue="123"
                  style={{ display: 'none' }}
                />
                <Form.Item
                  name="longitude"
                  initialValue="123"
                  style={{ display: 'none' }}
                />

                <Form.Item className="w-full mt-8">
                  <PrimaryButton htmlType="submit" className="w-full h-14">
                    Login
                  </PrimaryButton>
                </Form.Item>
              </Form>
            </div>

            <TextButton className="p-0 text-primary">
              Forgot Password?
            </TextButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
