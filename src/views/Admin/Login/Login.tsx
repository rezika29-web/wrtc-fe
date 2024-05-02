import React from 'react'
import Text from 'components/Text'
import { Form, Input } from 'antd'
import SimpleInput from 'components/Forms/Input/Inputs'
import { TextButton } from 'components/Buttons'
import Background from './Partials/Background'

function AdminLogin() {
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
              <Form layout="vertical">
                <Form.Item
                  label="Email or Username"
                  className="font-inter text-sm font-medium"
                >
                  <SimpleInput placeholder="Input your Email or Username" />
                </Form.Item>
                <Form.Item
                  label="Password"
                  className="font-inter text-sm font-medium"
                >
                  <Input.Password
                    className="h-14 font-normal"
                    placeholder="Input your password"
                  />
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
