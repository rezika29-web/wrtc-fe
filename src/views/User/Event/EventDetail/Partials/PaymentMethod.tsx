import { Col, Divider, Row } from 'antd'
import { LinkButton } from 'components/Buttons'
import Text from 'components/Text'
import Image from 'next/image'
import React from 'react'

function PaymentMethod() {
  return (
    <div className="bg-white px-6 py-12 rounded-2xl text-neutral80">
      <Row>
        <Col span={8}>
          <Text className="text-base font-medium">Nama Event</Text>
        </Col>
        <Col span={8} offset={4}>
          <Text className="font-semibold text-base">Padang Half Mention</Text>
        </Col>
      </Row>
      <Divider dashed style={{ borderColor: '#B5DAEE' }} />
      <Row>
        <Col span={8}>
          <Text className="text-base font-medium">Tipe Event</Text>
        </Col>
        <Col span={8} offset={4}>
          <Text className="font-semibold text-base">Offline</Text>
        </Col>
      </Row>
      <Divider dashed style={{ borderColor: '#B5DAEE' }} />
      <Row>
        <Col span={7}>
          <Text className="text-base font-medium">Tanggal Pelaksanaan</Text>
        </Col>
        <Col span={9} offset={5}>
          <Text className="font-bold text-base">1 Januari 2025</Text>
        </Col>
      </Row>
      <Divider dashed style={{ borderColor: '#B5DAEE' }} />
      <Row>
        <Col span={9}>
          <Text className="text-base font-medium">Kategori Event</Text>
        </Col>
        <Col className="flex flex-wrap gap-3" span={13} offset={2}>
          <Text className="bg-[#EEF7FC] text-xs font-bold py-1 px-3 border-2 border-[#B5DAEE] text-bluemain rounded-md">
            Half Maraton
          </Text>
          <Text className="bg-[#EEF7FC] text-xs font-bold py-1 px-3 border-2 border-[#B5DAEE] text-bluemain rounded-md">
            5K
          </Text>
          <Text className="bg-[#EEF7FC] text-xs font-bold py-1 px-3 border-2 border-[#B5DAEE] text-bluemain rounded-md">
            3K
          </Text>
        </Col>
      </Row>
      <Divider dashed style={{ borderColor: '#B5DAEE' }} />
      <Row>
        <Col span={24}>
          <LinkButton
            href="register-event/step-one"
            className="w-full h-14 px-14 mt-6 text-lg font-medium bg-primary text-white"
            style={{
              boxShadow: '0px 4px 24px 0px rgba(5, 110, 206, 0.2)',
            }}
          >
            Daftar Event
          </LinkButton>
        </Col>
        <Col className="flex flex-wrap justify-center gap-6 mt-12" span={24}>
          <Image
            src="/logo/mastercard-logo.png"
            alt="logo"
            width={41}
            height={0}
            className="w-[41px] object-contain"
          />
          <Image
            src="/logo/bri-logo.png"
            alt="logo"
            width={41}
            height={0}
            className="w-[102px] object-contain"
          />
          <Image
            src="/logo/gopay-logo.png"
            alt="logo"
            width={41}
            height={0}
            className="w-[102px] object-contain"
          />
          <Image
            src="/logo/dana-logo.png"
            alt="logo"
            width={41}
            height={0}
            className="w-[82px] object-contain"
          />
        </Col>
      </Row>
    </div>
  )
}

export default PaymentMethod
