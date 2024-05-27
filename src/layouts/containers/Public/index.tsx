import React, { useState } from 'react'
import Footer from 'layouts/containers/Public/Footer'
import { Divider, Form, Input, Modal, Tag } from 'antd'
import Text from 'components/Text'
import SimpleInput from 'components/Forms/Input/Inputs'
import PrimaryButton, { SecondaryButton } from 'components/Buttons'
import LinkText from 'components/LinkText'
import GoogleIcon from 'components/Icons/GoogleIcon'
import { useMutation } from 'react-query'
import CallAPI from 'services/CallAPI'
import useTokenHandler from 'hooks/useTokenHandler'
import { useRouter } from 'next/router'
import Header from './Header'

type LoginPayload = {
  email: string
  password: string
}

interface IProps {
  Component: any
  pageProps: any
}

interface ModalLoginProps {
  modalLogin: boolean
  setModalLogin: () => void
}

function ModalLogin(props: ModalLoginProps) {
  const { modalLogin, setModalLogin } = props

  const router = useRouter()
  const { saveToken, token } = useTokenHandler('userToken')

  const useLogin = useMutation({
    mutationFn: (fieldValues: LoginPayload) =>
      CallAPI.login({
        email: fieldValues.email,
        password: fieldValues.password,
      }),
    onSuccess(data, variables, context) {
      saveToken(data?.data?.token)
      router.push('/dashboard/my-profile').then(() => {
        window.location.reload()
      })
    },
  })

  return (
    <Modal
      width={640}
      footer={[]}
      destroyOnClose
      open={modalLogin}
      onCancel={setModalLogin}
      title={<Text className="text-primary text-lg font-bold mb-6">LOGIN</Text>}
    >
      <Text size="h3" className="font-bold text-[#444458]">
        Login to Your We Run the City Account
      </Text>
      <Form
        name="login"
        layout="vertical"
        className="mt-8"
        requiredMark={false}
        onFinish={(fieldValues) => {
          useLogin.mutate(fieldValues)
        }}
      >
        <Form.Item
          name="email"
          label="Email"
          className="font-inter text-sm font-medium"
          rules={[{ required: true, message: 'Tidak boleh kosong!' }]}
        >
          <SimpleInput className="font-normal" placeholder="Masukkan email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          className="font-inter text-sm font-medium"
          rules={[{ required: true, message: 'Tidak boleh kosong!' }]}
        >
          <Input.Password
            className="h-14 font-normal"
            placeholder="Masukkan password"
          />
        </Form.Item>
        <div className="flex justify-end">
          <LinkText href="/forgot-password">
            <Text className="text-primary">Lupa Password</Text>
          </LinkText>
        </div>
        <Form.Item className="w-full mt-8">
          <PrimaryButton htmlType="submit" className="w-full h-14">
            Login
          </PrimaryButton>
        </Form.Item>
        <Divider dashed>
          <Text className="font-medium text-[#616161]" size="body1">
            Atau
          </Text>
        </Divider>
        <SecondaryButton className="relative h-14 shadow-sm border-none hover:bg-transparent hover:text-none flex items-center w-full justify-center">
          <span className="absolute left-5">
            <GoogleIcon />
          </span>
          <Text className="text-[#444458] text-base font-semibold text-center">
            Login dengan Google
          </Text>
        </SecondaryButton>
        <div className="flex items-center w-full text-center justify-center gap-x-1 mt-8">
          <Text size="body1" className="font-medium text-[#616161]">
            Tidak mempunyai akun
          </Text>
          <LinkText
            onClick={setModalLogin}
            href="/register"
            className="text-base font-medium text-primary"
          >
            Buat Akun Sekarang
          </LinkText>
        </div>
      </Form>
    </Modal>
  )
}

function PublicContainer(props: IProps) {
  const { Component, pageProps } = props

  const [modalLogin, setModalLogin] = useState(false)
  const { token } = useTokenHandler('userToken')

  return (
    <>
      <ModalLogin
        modalLogin={modalLogin}
        setModalLogin={() => setModalLogin(!modalLogin)}
      />
      <Header setModalLogin={() => setModalLogin(!modalLogin)} />
      <div className="min-h-screen overflow-x-hidden bg-neutral">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default PublicContainer
