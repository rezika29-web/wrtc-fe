import React, { useEffect, useState } from 'react'
import Text from 'components/Text'
import ContactUs from 'components/ContactUs'
import Image from 'next/image'
import { Avatar, Button, Collapse, Form, Spin } from 'antd'
import moment from 'moment'
import PrimaryButton, { LinkButton } from 'components/Buttons'
import { UserOutlined } from '@ant-design/icons'
import router from 'next/router'
import { useMutation } from 'react-query'
import useAthlete from 'data/useAthlete'
import useActivation from 'data/useActivation'
import useTokenHandler from 'hooks/useTokenHandler'
import CallAPI from 'services/CallAPI'
import FormProfile from './formProfile'
import FormJersey from './formJersey'
import FormKesehatan from './FormKesehatan'
import ModalPassword from './ModalPassword'

const { Modal } = require('antd')

const urlImages = 'https://api-prod-new2.beyondrun.com/v1/uploads/'

type EditPayload = {
  fullname: string
  telp: string
  MasterBloodId: string
  MasterShirtSizeId: string
  noTelpDarurat: string
  MasterGenderId: string
  MasterCountryId: string
  CityId: string
  MasterIdentityCardId: string
  alamat: string
  emergencyContactRelation: string
  namaTelpDarurat: string
  noIdentitas: string
  tempatLahir: string
  tglLahir: any
  AthleteDiseaseHistories: any
}

function MyProfile() {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(true)
  const [changePassword, setChangePassword] = useState(false)
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const { token, deleteToken } = useTokenHandler('userToken')
  const [valueWni, setValueWni] = useState(null)
  useEffect(() => {
    setIsAuth(!!token)
  }, [])

  const { data: dataActivation } = useActivation(isAuth) || {}
  const { data: dataUser } = useAthlete(isAuth) || {}
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true)
      if (!dataUser) {
        router.push('/')
      } else {
        setIsLoading(false)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [dataUser, router])

  const ChangePassword = () => {
    setChangePassword(true)
  }
  const handleCancel = () => {
    setChangePassword(!changePassword)
  }
  const useEdit = useMutation({
    mutationFn: (fieldValues: EditPayload) =>
      CallAPI.editProfile({
        fullname: fieldValues.fullname,
        telp: fieldValues.telp,
        wni: valueWni,
        MasterBloodId: fieldValues.MasterBloodId,
        MasterShirtSizeId: fieldValues.MasterShirtSizeId,
        noTelpDarurat: fieldValues.noTelpDarurat,
        MasterGenderId: fieldValues.MasterGenderId,
        CityId: fieldValues.CityId,
        MasterIdentityCardId: fieldValues.MasterIdentityCardId,
        alamat: fieldValues.alamat,
        emergencyContactRelation: fieldValues.emergencyContactRelation,
        namaTelpDarurat: fieldValues.namaTelpDarurat,
        noIdentitas: fieldValues.noIdentitas,
        tempatLahir: fieldValues.tempatLahir,
        MasterCountryId: fieldValues.MasterCountryId,
        AthleteDiseaseHistories: [fieldValues.AthleteDiseaseHistories],
        tglLahir: moment(fieldValues.tglLahir),
        isChangePassword: false,
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      }),
    onSuccess(data, variables, context) {
      router.push('/dashboard/my-profile/detail-profile')
    },
    onError(error, variables, context) {
      alert(`Edit profile failed: ${error}`)
    },
  })
  const customizeRequiredMark = (
    label: React.ReactNode,
    { required }: { required: boolean },
  ) => (
    <>
      {label}&nbsp;
      {required && <span style={{ color: 'red' }}>*</span>}
    </>
  )
  return (
    <Spin size="large" spinning={isLoading}>
      <div className="md:px-[100px] md:py-20">
        <div className="md:w-[840px] md:pb-24 w-[320px] mx-auto text-center flex justify-center flex-col items-center">
          <Text
            size="body1"
            className="md:text-lg md:w-[253px] md:mb-6 md:py-3 font-bold font-inter text-[#0079C4] bg-[#FFFFFF] rounded-full"
          >
            SELAMAT DATANG 👋
          </Text>
          <Text
            size="body1"
            className="md:text-[38px] md:leading-[52px] mb-12 font-rubik font-extrabold text-[#444458]"
          >
            Alexander Supatramp
          </Text>
        </div>
        <div className="bg-white flex flex-col justify-center md:rounded-xl rounded-2xl w-full mb-20">
          <div
            className="md:flex md:items-start rounded-t-xl justify-end"
            style={{
              background: 'linear-gradient(90deg, #1088c6 0%, #1286c9 100%)',
            }}
          >
            <Image
              src="/images/rectangle1.png"
              alt="img-faq"
              width={740}
              height={389}
              className="flex justify-items-end rounded-tr-xl"
            />
          </div>
          <div
            className="flex z-2"
            style={{
              padding: '10px 40px',
            }}
          >
            <div className="flex flex-row md:w-full ">
              <div
                style={{
                  position: 'relative',
                  top: '-100px',
                  minWidth: '200px',
                }}
              >
                <Avatar
                  size={200}
                  icon={<UserOutlined />}
                  src={urlImages + (dataUser?.photoAthlete?.file || '')}
                />
              </div>
              <div
                style={{
                  position: 'relative',
                  top: '-50px',
                  width: '100%',
                  padding: '0px 30px',
                }}
              >
                <Text
                  size="body1"
                  className="md:text-lg text-base font-inter font-bold mb-4"
                  style={{ color: '#ffff' }}
                >
                  My Profile
                </Text>
                <div
                  className="flex flex-row mb-6 "
                  style={{
                    gap: 20,
                    marginTop: 30,
                  }}
                >
                  <div
                    style={{
                      width: 'calc(100% / 2)',
                    }}
                  >
                    <div className="md:w-[50%] w-full mb-6">
                      <Text size="subtitle">Email</Text>
                    </div>
                    <div
                      className="md:w-[50%] w-full"
                      style={{
                        borderBottom: '1px solid black',
                        marginBottom: '0px',
                        marginTop: '0px',
                      }}
                    >
                      <Text size="h6">{dataUser?.email}</Text>
                    </div>
                  </div>
                  <div
                    style={{
                      width: 'calc(100% / 2)',
                    }}
                  >
                    <div className="md:w-[50%] w-full mb-6">
                      <Text size="subtitle">Password</Text>
                    </div>
                    <div
                      className="flex flex-row w-full "
                      style={{
                        borderBottom: '1px solid black',
                        marginBottom: '0px',
                        marginTop: '0px',
                      }}
                    >
                      <Text size="h6" className="md:w-[50%] flex ">
                        ********
                      </Text>
                      <Button
                        onClick={ChangePassword}
                        target="_blank"
                        style={{
                          textDecoration: 'underline',
                          border: 'none',
                          color: 'blue',
                        }}
                        className="md:w-[50%] "
                      >
                        <b>Ubah Password</b>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Modal
                      open={changePassword}
                      onCancel={handleCancel}
                      footer={null}
                    >
                      <ModalPassword
                        dataUser={dataUser}
                        onClose={handleCancel}
                        deleteToken={deleteToken}
                      />
                    </Modal>
                  </div>
                </div>
                <Text
                  className="mb-6"
                  size="body1"
                  style={{ color: '#777682' }}
                >
                  Status
                </Text>
                <span
                  style={{
                    backgroundColor: '#92F28C',
                    color: '#1F9E3D',
                    width: '100px',
                    display: 'inline-block',
                    border: '1px solid',
                  }}
                  className="rounded-md text-center"
                >
                  {dataActivation?.isActive === true
                    ? 'Verification'
                    : 'Not Verification'}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <Text
            className="text-2xl font-extrabold leading-9 font-rubik text-[#444458] mb-6 pl-9"
            style={{ borderLeft: '5px solid #007bff' }}
          >
            Detail
          </Text>
          <Form
            form={form}
            onFinish={(fieldValues) => {
              useEdit.mutate(fieldValues)
            }}
            layout="vertical"
            requiredMark={customizeRequiredMark}
          >
            <div className="mb-10">
              <div className="flex flex-row w-full md:gap-x-6 gap-3">
                <div className="md:w-[60%] ">
                  <Collapse
                    size="large"
                    items={[
                      {
                        key: '1',
                        label: 'Informasi Profile',
                        children: (
                          <FormProfile
                            dataUser={dataUser}
                            valueWni={valueWni}
                            setValueWni={setValueWni}
                          />
                        ),
                      },
                    ]}
                    expandIconPosition="right"
                  />
                </div>
                <div className="md:w-[40%] w-full relative bg-white  ">
                  <Collapse
                    size="large"
                    className="mb-10"
                    items={[
                      {
                        key: '1',
                        label: 'Informasi Jersey',
                        children: FormJersey(dataUser),
                      },
                    ]}
                    expandIconPosition="right"
                  />
                  <Collapse
                    size="large"
                    items={[
                      {
                        key: '1',
                        label: 'Data Kesehatan & Kontak Darurat',
                        children: FormKesehatan(dataUser),
                      },
                    ]}
                    expandIconPosition="right"
                  />
                </div>
              </div>
            </div>
            <div className="mb-10 flex justify-end">
              <PrimaryButton
                type="primary"
                htmlType="submit"
                // onClick={saveEdit}
                className="justify-center rounded-lg md:w-[15%] w-20% mb-12"
                style={{ height: '50px' }}
              >
                <Text className="text-[15px] text-inter font-semibold">
                  Edit
                </Text>
              </PrimaryButton>
            </div>
          </Form>
        </div>
        <ContactUs />
      </div>
    </Spin>
  )
}

export default MyProfile
