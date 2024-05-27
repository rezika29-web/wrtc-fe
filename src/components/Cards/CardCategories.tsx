import { Card, Modal } from 'antd'
import PrimaryButton from 'components/Buttons'
import MapsIcon from 'components/Icons/MapsIcon'
import Text from 'components/Text'
import Image from 'next/image'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

type CardCategoriesProps = {
  href?: string
  title: string
  price?: string
  subText?: string
  image: string
  description: string
  className?: any
}

export default function CardCategories(props: CardCategoriesProps) {
  const {
    href,
    title,
    price,
    subText,
    image,
    description,
    className,
    ...restProps
  } = props

  const [choose, setChoose] = useState<string>('Pilih Kategori')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const renderingBtn = !!subText

  return (
    <Card
      {...restProps}
      className={twMerge('bg-white p-8 border-none rounded-2xl', className)}
    >
      <Image
        src={image}
        alt="ilustration"
        width="332"
        height="220"
        className="mb-6"
      />
      <div className="flex justify-between">
        <Text className="font-rubik font-semibold text-xl leading-6 text-[#444458] mb-3">
          {title}
        </Text>
        <Text className="font-inter font-medium text-lg leading-6 text-bluemain mb-3">
          {price}
        </Text>
      </div>

      <Text className="font-inter font-normal text-sm leading-5 text-[#9999A4] mb-6">
        {description}
      </Text>
      {renderingBtn ? (
        <PrimaryButton
          className="w-full h-10 text-base font-medium flex gap-x-2 items-center text-center justify-center"
          onClick={showModal}
        >
          {subText}
          <MapsIcon />
        </PrimaryButton>
      ) : (
        <PrimaryButton
          className="w-full h-10 text-base font-medium flex gap-x-2 items-center text-center justify-center"
          onClick={() => setChoose('Terpilih')}
        >
          {choose}
        </PrimaryButton>
      )}
      <Modal
        className="w-[640px] top-5"
        styles={{
          content: {
            borderRadius: '24px',
          },
        }}
        title={
          <div className="flex flex-col items-center gap-6">
            <Text className="w-[100px] bg-[#EEF7FC] text-lg text-bluemain rounded-full py-1 px-6">
              Route
            </Text>
            <Text className="text-neutral80 text-3xl font-extrabold">
              Category (5K)
            </Text>
            <Text className="text-neutral60 text-lg font-medium">
              Padang Half Maathon
            </Text>
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        <iframe
          title="1"
          name="plotaroute_map_2589287"
          src="https://www.plotaroute.com/embedmap/2589287?units=km"
          className="w-full h-[300px] rounded-md"
        />
        <Text className="text-neutral60 text-xl font-semibold mt-8">
          Start/Finish
        </Text>
        <div className="flex items-center gap-2 mt-6">
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="6"
              cy="6.09082"
              r="6"
              fill="url(#paint0_linear_324_13076)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_324_13076"
                x1="0"
                y1="6.09082"
                x2="12"
                y2="6.09082"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EB0030" />
                <stop offset="1" stopColor="#0079C4" />
              </linearGradient>
            </defs>
          </svg>
          <Text className="text-neutral60 text-base">
            884 Katlyn Overpass, Asheville 67816-0181
          </Text>
        </div>

        <PrimaryButton
          className="w-full h-10 text-base font-medium mt-14"
          onClick={() => setIsModalOpen(false)}
        >
          Tutup
        </PrimaryButton>
      </Modal>
    </Card>
  )
}
