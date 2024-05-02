import React from 'react'
import { Divider } from 'antd'
import Text from 'components/Text'

type DistancePriceItemProps = {
  distanceLabel: string
  price: string
}

export default function DistancePriceItem(props: DistancePriceItemProps) {
  const { distanceLabel, price } = props
  return (
    <div className="flex justify-between items-center">
      <Text className="font-inter font-medium text-sm leading-5 text-[#444458]">
        {distanceLabel}
      </Text>
      <div className="w-32">
        <Divider dashed style={{ borderColor: '#B5DAEE' }} />
      </div>
      <Text className="font-inter font-semibold text-sm leading-5 text-[#1088C8]">
        {price}
      </Text>
    </div>
  )
}
