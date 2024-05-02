import { Card } from 'antd'
import Text from 'components/Text'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type CardItemProps = {
  href?: string
  title: string
  icon: string
  image: string
  description: string
  className?: any
}

export default function CardInformation(props: CardItemProps) {
  const { href, image, title, icon, description, className, ...restProps } =
    props
  return (
    <Card
      {...restProps}
      className={twMerge(
        'border-none rounded-2xl pl-8 pt-8 shadow-sm',
        className,
      )}
    >
      <Text className="text-2xl text-[#5F5F70] font-rubik font-semibold mb-6">
        {title}
      </Text>
      <div className="flex items-start gap-x-3 mb-14">
        <Image src={icon} alt="icon" width={20} height={22} />
        <Text className="text-base text-[#5F5F70] font-inter font-medium pr-14">
          {description}
        </Text>
      </div>
      <div className="flex flex-col items-end">
        <Image
          src={image}
          alt="icon"
          width={100}
          height={94}
          className="rounded-e-2xl"
        />
      </div>
    </Card>
  )
}
