/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import PrimaryButton, { LinkButton, SecondaryButton } from 'components/Buttons'
import SimpleInput from 'components/Forms/Input/Inputs'
import Image from 'next/image'
import Text from 'components/Text'
import axios from 'axios'
import {
  Steps,
  Form,
  Input,
  DatePicker,
  Upload,
  message,
  Checkbox,
  Typography,
  Select,
  Space,
  Radio,
  Spin,
  Popconfirm,
} from 'antd'
import DashedLine from './DashedLine'
import ModalRegister from './ModalRegister'
// import { BASE_API_URL_LOCAL } from 'constant'

const { Modal } = require('antd')

const { Link } = Typography
const { Step } = Steps
interface DataRegisterType {
  dataFirst: {
    fullName: string
    email: string
    gender: string
  }
  dataSecond: {
    place_of_birth: string
    new_password: string
    confirm_new_password: string
    date_of_birth: {
      $d: string
    }
  }
}
function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [form] = Form.useForm()
  const [dataImage, setDataImage] = useState('')
  const [priviewTitle, setPriviewTitle] = useState('')
  const [dataRegister, setDataRegister] = useState<DataRegisterType>({
    dataFirst: {
      fullName: '',
      email: '',
      gender: '',
    },
    dataSecond: {
      place_of_birth: '',
      new_password: '',
      confirm_new_password: '',
      date_of_birth: {
        $d: '',
      },
    },
  })

  const [successModalVisible, setSuccessModalVisible] = useState(false)
  const sendData = async () => {
    const date = new Date(dataRegister.dataSecond.date_of_birth.$d)
    const tanggal = date.getDate()
    const bulan = date.getMonth()
    const tahun = date.getFullYear()
    const newDate = `${tahun}-${bulan + 1}-${tanggal}`
    try {
      const formData = new FormData()
      formData.append('fullname', dataRegister.dataFirst.fullName)
      formData.append('tempatLahir', dataRegister.dataSecond.place_of_birth)
      formData.append('tglLahir', newDate)
      formData.append('email', dataRegister.dataFirst.email)
      formData.append('MasterGenderId', dataRegister.dataFirst.gender)
      formData.append('password', dataRegister.dataSecond.new_password)
      formData.append(
        'confirmPassword',
        dataRegister.dataSecond.confirm_new_password,
      )
      formData.append('image', dataImage)
      const response = await axios.post(
        'http://localhost:5000/v1/auth/sign-up',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      setSuccessModalVisible(true)

      message.success('Registration completed!')
    } catch (error) {
      if (error.response) {
        console.log('Server response error:', error.response.data)
        message.error(
          error.response.data.message ||
            'Registration failed. Please try again.',
        )
      } else if (error.request) {
        console.error('No response received:', error.request)
        message.error(
          'No response received from the server. Please try again later.',
        )
      } else {
        console.error('Error:', error.message)
        message.error('Registration failed. Please try again.')
      }
    }
    setIsLoading(false)
  }
  const confirm = (e) => {
    setIsLoading(true)
    sendData()
  }
  const cancel = (e) => {
    console.log(e)
  }
  const handlePreview = async (file) => {
    const isLt2M = file.file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must be smaller than 2MB!')
    } else {
      setDataImage(file.file.originFileObj)
      setPriviewTitle(
        file.file.name || file.file.url.substring(file.url.lastIndexOf('/')),
      )
    }
  }
  const toggleModal = () => {
    setSuccessModalVisible(!successModalVisible)
  }
  const handleOk = () => {
    setSuccessModalVisible(!successModalVisible)
  }

  const handleCancel = () => {
    setSuccessModalVisible(!successModalVisible)
  }

  const onFinishStep1 = async (values) => {
    await setDataRegister((prevState) => ({
      ...prevState,
      dataFirst: values,
    }))
    setCurrentStep(1)
  }

  const onFinish = (values) => {
    setDataRegister((prevState) => ({
      ...prevState,
      dataSecond: values,
    }))
  }

  const customizeRequiredMark = (
    label: React.ReactNode,
    { required }: { required: boolean },
  ) => (
    <>
      {label}&nbsp;
      {required && <span style={{ color: 'red' }}>*</span>}
    </>
  )
  const steps = [
    {
      title: 'Basic',
      content: (
        <Form
          form={form}
          onFinish={onFinishStep1}
          layout="vertical"
          className="mt-12"
          requiredMark={customizeRequiredMark}
        >
          <Form.Item
            label="Nama Lengkap"
            name="fullName"
            rules={[{ required: true }]}
            colon={false}
            labelAlign="right"
          >
            <SimpleInput placeholder="Input your name" />
          </Form.Item>
          <Form.Item
            label="Alamat Email"
            name="email"
            rules={[{ required: true, type: 'email' }]}
          >
            <SimpleInput />
          </Form.Item>
          <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value="1">Pria</Radio>
              <Radio value="2">Wanita</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="terms"
            valuePropName="checked"
            rules={[
              { required: true, message: 'Please accept terms and conditions' },
            ]}
          >
            <Checkbox>
              {' '}
              Saya menyetujui{' '}
              <Link href="/register/persyaratan" target="_blank">
                persyaratan dan kebijakan
              </Link>{' '}
              yang berlaku untuk event We Run the City.
            </Checkbox>
          </Form.Item>

          <PrimaryButton
            type="primary"
            htmlType="submit"
            className="justify-center rounded-s w-full mb-12"
            style={{ height: '50px' }}
          >
            <Text className="text-[15px] text-inter font-semibold">Next</Text>
          </PrimaryButton>
          <DashedLine text="Atau" />
          <div className="flex flex-col rounded-xl w-full mb-10 mt-10">
            <LinkButton
              style={{
                height: '50px',
                width: '100%',
              }}
              className="custom-button"
            >
              <div className="flex-container">
                <img
                  src="/images/google.png"
                  alt="Google Icon"
                  className="icon-google"
                />
                <Text className="text-[15px] text-inter font-semibold">
                  Daftar dengan Google
                </Text>
              </div>
            </LinkButton>
          </div>
        </Form>
      ),
    },
    {
      title: 'Detail',
      content: (
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="mt-12"
          requiredMark={customizeRequiredMark}
        >
          <Form.Item
            label="Tempat Lahir"
            name="place_of_birth"
            rules={[{ required: true }]}
          >
            <SimpleInput placeholder="Input place of birth" />
          </Form.Item>
          <Form.Item
            label="Tanggal Lahir"
            name="date_of_birth"
            rules={[{ required: true }]}
          >
            <DatePicker style={{ width: '100%', height: '60px' }} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="new_password"
            rules={[
              {
                required: true,
                min: 8,
                message: 'Password must be at least 8 characters',
              },
            ]}
          >
            <Input.Password style={{ height: '60px' }} />
          </Form.Item>
          <Form.Item
            label="Konfirmasi Password"
            name="confirm_new_password"
            dependencies={['new_password']}
            rules={[
              { required: true, message: 'Please confirm your password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('new_password') === value) {
                    return Promise.resolve()
                  }
                  // eslint-disable-next-line prefer-promise-reject-errors
                  return Promise.reject('The two passwords do not match')
                },
              }),
            ]}
          >
            <Input.Password style={{ height: '60px' }} />
          </Form.Item>
          <Form.Item
            label="Profile Picture"
            name="profile"
            colon={false}
            labelAlign="right"
          >
            <Space.Compact style={{ width: '100%' }}>
              <SimpleInput value={priviewTitle} readOnly />
              <Upload
                // onPreview={handlePreview}
                onChange={handlePreview}
                maxCount={1}
                listType="picture"
                multiple={false}
                showUploadList={false}
              >
                <PrimaryButton style={{ height: '70px' }}>
                  <img
                    src="/images/Button.png"
                    alt="avatar"
                    style={{ width: '60px', height: '60px' }}
                  />
                </PrimaryButton>
              </Upload>
            </Space.Compact>
            <p>Maximum Size 2 MB</p>
          </Form.Item>
          <div className="flex rounded-xl w-full mb-12">
            <div className="rounded-xl w-6/12 relative">
              <SecondaryButton
                className="w-full border-0 bg-slate-300"
                onClick={() => setCurrentStep(currentStep - 1)}
                style={{ height: '50px' }}
              >
                <Text className="text-[15px] text-inter font-semibold">
                  Back
                </Text>
              </SecondaryButton>
            </div>

            <div className="rounded-xl w-6/12 ml-10 relative">
              <Popconfirm
                title="Check Data Anda!"
                description="Apakah Anda Yakin Data Anda Sudah Benar?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <PrimaryButton
                  type="primary"
                  htmlType="submit"
                  className="w-full"
                  style={{ height: '50px' }}
                >
                  <Text className="text-[15px] text-inter font-semibold">
                    Finish
                  </Text>
                </PrimaryButton>
              </Popconfirm>
            </div>
          </div>
        </Form>
      ),
    },
  ]
  const modalTitle = (
    <div style={{ textAlign: 'center', color: 'blue' }}>
      <h3 style={{ margin: 0 }}>Buat Akun Baru</h3>
    </div>
  )
  return (
    <Spin size="large" spinning={isLoading}>
      <div className="px-24 py-20">
        <div className="flex gap-x-12 justify-between mb-20 ml-20">
          <div className="w-[700px] ml-20 py-20">
            <Text
              size="h6"
              className=" py-3 font-bold mb-6"
              style={{ color: '#0079C4' }}
            >
              Buat Akun Baru
            </Text>
            <Text
              size="h1"
              className="mb-12 font-semibold"
              style={{ color: '#444458' }}
            >
              Join the Padang half marathon, We Run the City!{' '}
            </Text>
            <Steps current={currentStep} labelPlacement="vertical">
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">{steps[currentStep].content}</div>
          </div>
          <div className="relative w-[400px]">
            <Image
              src="/images/Wrapper-Right.png"
              alt="img-faq"
              fill
              className="w-[400px] rounded-tr-xl rounded-br-xl"
            />
          </div>
        </div>
        <div>
          <Modal
            title={modalTitle}
            open={successModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <ModalRegister onClose={toggleModal} />
          </Modal>
        </div>
      </div>
    </Spin>
  )
}

export default Register
