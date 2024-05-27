/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import PrimaryButton, { LinkButton, SecondaryButton } from 'components/Buttons'
import SimpleInput from 'components/Forms/Input/Inputs'
import Image from 'next/image'
import Text from 'components/Text'
import {
  Steps,
  Form,
  Input,
  DatePicker,
  Upload,
  message,
  Checkbox,
  Typography,
  Space,
  Radio,
  Spin,
  Popconfirm,
  Divider,
} from 'antd'
import Compress from 'react-image-file-resizer'
import BlobToFile from 'helpers/BlobToFile'
import SizeImageCompressor from 'constants/SizeImageCompressor'
import CallAPI from 'services/CallAPI'
import GoogleIcon from 'components/Icons/GoogleIcon'
import moment from 'moment'
import ModalRegister from './ModalRegister'

const { Modal } = require('antd')

const { Link } = Typography
const { Step } = Steps
const { Dragger } = Upload

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
// const BlobToFile = (blob, name) => {
//   return new File([blob], name, { type: blob.type })
// }

function Register() {
  const today = moment()
  const maxDate = today.clone().subtract(7, 'years')

  const [isLoading, setIsLoading] = useState(false)
  const [successModalVisible, setSuccessModalVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [form] = Form.useForm()
  const [dataImage, setDataImage] = useState(null)
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState([])
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

  const disabledDate = (current) => {
    if (!current) {
      return false
    }
    return current.isAfter(maxDate, 'day')
  }
  const handleImage = (image) => {
    setDataImage(image)
  }

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
      const response = await CallAPI.register(formData)
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
    console.log('image', dataImage)
    setIsLoading(true)
    sendData()
  }
  const cancel = (e) => {
    console.log(e)
  }
  const handlePreview = async (file) => {
    console.log('handle', file.file.originFileObj)

    const isLt2M = file.file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must be smaller than 2MB!')
    } else {
      setDataImage(file.file.originFileObj)
      setPreviewTitle(
        file.file.name || file.file.url.substring(file.url.lastIndexOf('/')),
      )
    }
  }
  const handleChange = (info) => {
    const { status } = info.file
    const isLt2M = info.file.size / 1024 / 1024 < 2

    if (!isLt2M) {
      message.error('Image must be smaller than 2MB!')
      setFileList([])
      return
    }

    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }

    if (status === 'done' || status === 'uploading') {
      setFileList([info.file])
      setPreviewTitle(info.file.name)
      setDataImage(info.file.originFileObj)
      message.success(`${info.file.name} file processed successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }
  const beforeUpload = async (file) => {
    const isJpgOrPng =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/jpg'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
      return Upload.LIST_IGNORE
    }
    try {
      const resizedImage = await new Promise((resolve, reject) => {
        Compress.imageFileResizer(
          file,
          SizeImageCompressor.width,
          SizeImageCompressor.height,
          file?.name?.split('.').pop() ?? 'JPG',
          SizeImageCompressor.quality,
          SizeImageCompressor.rotation,
          (uri) => {
            resolve(uri)
          },
          'blob',
        )
      })
      const newSize = Math.round((newFile.size / 1024 / 1024) * 100) / 100

      if (newSize > SizeImageCompressor.limitServer) {
        Modal.warning({
          title: 'Ukuran foto terlalu besar',
          content:
            'File foto anda terlalu besar, file foto melebihi 2 MB harap upload kembali',
          closable: false,
        })
        return false
      }
    } catch (error) {
      message.error('Failed to resize image!')
      return false
    }
    return false
  }
  const props = {
    name: 'file',
    multiple: false,
    onChange: (info) => {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
        setFileList([info.file])
      }
      console.log(fileList)
    },

    fileList,
    onRemove: () => {
      setFileList([])
    },
    onDrop: (e) => {
      console.log('Dropped files', e.dataTransfer.files)
    },
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
            <SimpleInput placeholder="Masukkan nama anda" />
          </Form.Item>
          <Form.Item
            label="Alamat Email"
            name="email"
            rules={[{ required: true, type: 'email' }]}
          >
            <SimpleInput placeholder="Masukkan email anda" />
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
          <Form.Item className="w-full mt-8">
            <PrimaryButton htmlType="submit" className="w-full h-14 text-lg">
              Next
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
              Daftar dengan Google
            </Text>
          </SecondaryButton>
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
            <SimpleInput placeholder="Masukkan tempat lahir" />
          </Form.Item>
          <Form.Item
            label="Tanggal Lahir"
            name="date_of_birth"
            rules={[{ required: true }]}
          >
            <DatePicker
              style={{ width: '100%', height: '60px' }}
              placeholder="Pilih tanggal"
              disabledDate={disabledDate}
            />
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
            <Input.Password
              style={{ height: '60px' }}
              placeholder="Masukkan password"
            />
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
            <Input.Password
              style={{ height: '60px' }}
              placeholder="Masukkan password"
            />
          </Form.Item>
          {/* <Form.Item
            label="Gambar Profile"
            name="profile"
            colon={false}
            labelAlign="right"
          >
            <Space.Compact style={{ width: '100%' }}>
              <SimpleInput value={priviewTitle} readOnly />
              <Upload
                // onPreview={handlePreview}
                beforeUpload={beforeUpload}
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
            <p>Ukuran maksimal 2 MB</p>
          </Form.Item> */}
          <Form.Item
            label="Gambar Profile"
            name="profile"
            colon={false}
            labelAlign="right"
          >
            <Dragger
              {...props}
              accept="image/png, image/jpeg, image/jpg"
              // eslint-disable-next-line consistent-return
              beforeUpload={(file) => {
                console.log('origin', file)

                const isJpgOrPng =
                  file.type === 'image/jpeg' ||
                  file.type === 'image/png' ||
                  file.type === 'image/jpg'
                if (!isJpgOrPng) {
                  message.error('You can only upload JPG/PNG file!')
                  return Upload.LIST_IGNORE
                }
                Compress.imageFileResizer(
                  file,
                  SizeImageCompressor.width,
                  SizeImageCompressor.height,
                  'JPG',
                  SizeImageCompressor.quality,
                  SizeImageCompressor.rotation,
                  // eslint-disable-next-line consistent-return
                  (uri) => {
                    console.log('uri', uri.size)

                    handleImage({
                      url: URL.createObjectURL(uri),
                      size: uri.size,
                      type: uri.type,
                    })
                    const newFile = BlobToFile(uri as Blob, file.name)
                    const newSize =
                      Math.round((newFile.size / 1024 / 1024) * 100) / 100
                    if (newSize > SizeImageCompressor.limitServer) {
                      Modal.warning({
                        title: 'Ukuran foto terlalu besar',
                        content:
                          'File foto anda terlalu besar, file foto melebihi 2 MB harap upload kembali',
                        closable: false,
                      })
                      return false
                    }
                    // setFileList([newFile])

                    // setDataImage(newFile)

                    // console.log('new', newFile)
                    // const imageURL = URL.createObjectURL(newFile)
                    // localStorage.setItem('uploadedImage', imageURL)
                    // const link = document.createElement('a')
                    // link.href = imageURL
                    // link.download = file.name
                    // document.body.appendChild(link)
                    // link.click()
                    // document.body.removeChild(link)

                    // setFieldValue('image', newFile)
                    // setFieldValue('imagePreview', URL.createObjectURL(newFile))
                  },
                  'blob',
                  400,
                  400,
                )
              }}
              onRemove={() => {
                setFileList([])
                setDataImage('')

                // setFieldValue('imagePreview', null)
                // setFieldValue('image', null)
              }}
              onChange={handlePreview}
            >
              {/* <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p> */}
              <p className="ant-upload-text">Drop file here</p>
              <p className="ant-upload-hint">or</p>
              <PrimaryButton type="primary" htmlType="submit">
                <Text className="text-[15px] text-inter font-semibold">
                  Select File
                </Text>
              </PrimaryButton>
            </Dragger>
            <p>Ukuran maksimal 2 MB</p>
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
      <div className="container px-4 py-4  md:py-20  md:w-[80%] ">
        <div className="md:flex flex-col gap-y-12 md:flex-row md:gap-x-12 justify-center mb-20 md:px-10 ">
          <div className="w-full md:w-[70%] py-10 md:py-20 ">
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
              Join the Padang Half Marathon, We Run the City!{' '}
            </Text>
            <Steps current={currentStep} labelPlacement="vertical">
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">{steps[currentStep].content}</div>
          </div>
          <div className="md:relative w-full md:w-[40%] h-70 md:h-auto ">
            <Image
              src="/images/Wrapper-Right.png"
              alt="img-Wrapper-Right"
              fill
              className="md:w-[100%] w-full relative md:rounded-tr-xl md:rounded-br-xl rounded-xl"
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
