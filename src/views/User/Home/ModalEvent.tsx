import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import { CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons'
import Text from 'components/Text'
import PrimaryButton from 'components/Buttons'

function ModalEvent({ onClose }) {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])
  const HandleonClose = () => {
    onClose()
  }
  return (
    <div className="text-center">
      <Text size="h3" className="mb-4 font-bold">
        City Registration Successful!
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
        Selamat! Pendaftaran kota Anda telah berhasil diajukan. Tim kami akan
        segera menghubungi Anda melalui email untuk membahas langkah
        selanjutnya.
      </Text>
      <PrimaryButton
        type="primary"
        htmlType="submit"
        className="w-full"
        style={{ height: '50px' }}
        onClick={HandleonClose}
      >
        <Text className="text-[15px] text-inter font-semibold">Tutup</Text>
      </PrimaryButton>
    </div>
  )
}
export default ModalEvent
