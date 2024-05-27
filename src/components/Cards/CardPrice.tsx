import { Card, Divider } from 'antd'
import PrimaryButton from 'components/Buttons'
import DollarIcon from 'components/Icons/DollarIcon'
import Text from 'components/Text'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type CardPriceProps = {
  href?: string
  title: string
  date: string
  items: { id: string; title: string; price: string }[]
  className?: any
}

export default function CardPrice(props: CardPriceProps) {
  const { title, date, items, className, ...restProps } = props

  const formatPrice = (price) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price)
  return (
    <Card
      {...restProps}
      className={twMerge('bg-white border-none rounded-2xl p-8', className)}
    >
      <div className="flex items-center gap-x-6 mb-12">
        <PrimaryButton className="w-[52px] h-[52px] flex items-center justify-center">
          <DollarIcon />
        </PrimaryButton>
        <div>
          <Text className="font-rubik font-semibold text-xl leading-6 text-[#444458] mb-2">
            {title}
          </Text>
          <Text className="font-inter font-medium text-sm leading-5 text-[#777682]">
            {date}
          </Text>
        </div>
      </div>

      {/* distance category */}
      {items?.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <Text className="font-inter font-medium text-sm leading-5 text-[#444458]">
            {item.title}
          </Text>
          <div className="md:w-32 w-24">
            <Divider dashed style={{ borderColor: '#B5DAEE' }} />
          </div>
          <Text className="font-inter font-semibold text-sm leading-5 text-[#1088C8]">
            {formatPrice(item.price)}
          </Text>
        </div>
      ))}
    </Card>
  )
}
