import PrimaryButton from 'components/Buttons'
import ArrowRightIcon from 'components/Icons/ArrowRightIcon'
import Text from 'components/Text'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type CardDashboardProps = {
  href?: string
  title: string
  image: string
  description: string
  className?: any
  namePage?: string
}
export default function CardDashboard(props: CardDashboardProps) {
  const { href, title, image, description, className, namePage, ...restProps } =
    props
  return (
    <div {...restProps} className={twMerge('p-12', className)}>
      <a className="flex gap-16 items-center" href={href}>
        <Image
          src={image}
          alt="dashboard-wrapper"
          width={280}
          height={280}
          objectFit="contain"
        />
        <div className="w-[800px]">
          <Text className="text-2xl font-extrabold leading-9 font-rubik text-[#444458] mb-6">
            {title}
          </Text>
          <Text className="text-base font-normal leading-6 font-rubik text-[#777682] mb-6">
            {description}
          </Text>
          <PrimaryButton className="w-full h-14 rounded-lg flex justify-center text-center items-center gap-2">
            Pergi ke Halaman {namePage}
            <ArrowRightIcon />
          </PrimaryButton>
        </div>
      </a>
    </div>
  )
}
