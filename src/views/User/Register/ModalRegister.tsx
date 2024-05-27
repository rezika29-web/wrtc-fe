import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import { CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons'
import Text from 'components/Text'
import PrimaryButton from 'components/Buttons'
import router from 'next/router'

function ModalRegister({ onClose }) {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])
  const HandleonClose = () => {
    onClose()
    router.reload()
  }
  return (
    <div className="text-center">
      <Text size="h3" className="mb-4 font-bold">
        Create account Successful!
      </Text>
      {isLoading ? (
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 35 }} spin />}
          size="large"
          style={{ marginBottom: 20 }}
        />
      ) : (
        <CheckCircleOutlined
          style={{ fontSize: 35, color: '#52c41a', marginBottom: 20 }}
        />
      )}
      <Text className="mb-6">
        Selamat! Pendaftaran Anda untuk acara We Run The City telah berhasil
        diselesaikan. Kami sangat antusias menyambut kehadiran Anda dalam event
        ini.
      </Text>
      <PrimaryButton
        type="primary"
        htmlType="submit"
        className="w-full"
        style={{ height: '50px' }}
        onClick={HandleonClose}
      >
        <Text className="text-[15px] text-inter font-semibold">
          Runner Portal
        </Text>
      </PrimaryButton>
    </div>
  )
}
export default ModalRegister
