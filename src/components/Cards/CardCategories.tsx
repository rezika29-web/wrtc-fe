import { Card } from 'antd'
import PrimaryButton from 'components/Buttons'
import MapsIcon from 'components/Icons/MapsIcon'
import Text from 'components/Text'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type CardCategoriesProps = {
  href?: string
  title: string
  subText: string
  image: string
  description: string
  className?: any
}

export default function CardCategories(props: CardCategoriesProps) {
  const { href, title, subText, image, description, className, ...restProps } =
    props
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
      <Text className="font-rubik font-semibold text-xl leading-6 text-[#444458] mb-3">
        {title}
      </Text>
      <Text className="font-inter font-normal text-sm leading-5 text-[#9999A4] mb-6">
        {description}
      </Text>
      <PrimaryButton className="w-full h-10 text-base font-medium flex gap-x-2 items-center text-center justify-center">
        {subText}
        <MapsIcon />
      </PrimaryButton>
    </Card>
  )
}
