import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  TikTokFilled,
  WhatsAppOutlined,
  CopyrightOutlined,
} from '@ant-design/icons'
import { Image } from 'antd'
import { IconButton, TextButton } from 'components/Buttons'
import Text from 'components/Text'
import React from 'react'

const partnerLogo = [
  {
    src: '/logo/beyondrun-white.png',
  },
  {
    src: '/logo/logo2-white.png',
  },
  {
    src: '/logo/factory-white.png',
  },
  {
    src: '/logo/ecompany-white.png',
  },
  {
    src: '/logo/bigdummy-white.png',
  },
]

const quickLinks = [
  {
    name: 'Event',
    href: '/',
  },
  {
    name: 'FAQ',
    href: '/',
  },
  {
    name: 'Contact Us',
    href: '/',
  },
]

const socialMedia = [
  {
    name: 'facebook',
    icon: <FacebookFilled className="text-white" />,
  },
  {
    name: 'tiktok',
    icon: <TikTokFilled className="text-white" />,
  },
  {
    name: 'whatsapp',
    icon: <WhatsAppOutlined className="text-white" />,
  },
  {
    name: 'youtube',
    icon: <YoutubeFilled className="text-white" />,
  },
  {
    name: 'instagram',
    icon: <InstagramFilled className="text-white" />,
  },
]

function Footer() {
  return (
    <div>
      <div
        className="bg-hover py-10 px-24 overflow-x-hidden min-[610px]:flex justify-center"
        style={{
          backgroundImage: "url('/images/BGFooter.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex-col min-[610px]:w-[33%]  ">
          <Image
            preview={false}
            src="/logo/WRTC-2.png"
            className="md:w-44 w-28"
          />
          <div className="mt-8">
            <Text className="text-[#AAD2EB] text-center min-[610px]:text-left">
              Powered By
            </Text>
            <div className="flex flex-wrap min-[610px]:justify-start justify-center">
              {partnerLogo.map((d) => (
                <Image
                  key={d.src}
                  preview={false}
                  className="w-[100px]"
                  src={d.src}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-col min-[610px]:w-[33%]  ">
          <div>
            <Text className="text-[#AAD2EB] text-center">Quicklinks</Text>
            <div className="flex flex-wrap justify-center mt-6">
              {quickLinks.map((d) => (
                <TextButton key={d.href} className="text-white text-lg">
                  {d.name}
                </TextButton>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-col min-[610px]:w-[33%] ">
          <div>
            <Text className="text-[#AAD2EB] text-center">Social Media</Text>
            <div className="flex flex-wrap justify-center mt-6 gap-5">
              {socialMedia.map((d) => (
                <div className="rounded-full shadow-md">
                  <IconButton
                    icon={d.icon}
                    className="border-none rounded-e-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" py-6">
        <Text className="text-[#AAD2EB] text-base text-center" size="h1">
          <CopyrightOutlined className="mr-3" /> Copyright 2024{' '}
          <Image
            preview={false}
            src="/images/Ellipse-203.png"
            style={{ width: 10, height: 10 }}
            className="mr-3 ml-3"
          />{' '}
          We Run The City
        </Text>
      </div>
    </div>
  )
}

export default Footer
