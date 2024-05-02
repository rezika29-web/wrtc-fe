import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
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
    name: 'linkedin',
    icon: <LinkedinFilled className="text-white" />,
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
      <div className="bg-hover py-20 px-24 overflow-x-hidden min-[610px]:flex items-center justify-center">
        <div className="flex-col min-[610px]:w-[33%] mb-20">
          <Image
            preview={false}
            src="/logo/wrtc-white.png"
            className="md:w-44 w-28"
          />
          <div className="mt-8">
            <Text className="text-[#AAD2EB] text-center min-[610px]:text-left">
              Partner By
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

        <div className="flex-col min-[610px]:w-[33%] mb-20">
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

        <div className="flex-col min-[610px]:w-[33%] mb-20">
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
      <div className="bg-primary py-6">
        <Text className="text-[#AAD2EB] text-base text-center">
          Copyright 2024 Pirate ipsum arrgh bounty warp jack{' '}
        </Text>
      </div>
    </div>
  )
}

export default Footer
