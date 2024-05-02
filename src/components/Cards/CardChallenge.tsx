import { Card } from 'antd'
import Text from 'components/Text'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ChallengeCardProps {
  point: number
  imageIllustration: string
  title: string
  description: string
  className: string
}

function ChallengeCard(props: ChallengeCardProps) {
  const { className, point, title, description, imageIllustration } = props

  return (
    <Card className={twMerge([className, 'w-[600px] p-12 rounded-2xl'])}>
      <div className="flex justify-between">
        <Text size="subtitle" className="font-bold text-white">
          {point || 0} Point
        </Text>
        <Image alt="itenary" src={imageIllustration} width={264} height={264} />
      </div>
      <div className="mt-24">
        <Text size="h1" className="font-bold text-white">
          {title}
        </Text>
        <Text size="body1" className="font-medium text-white mt-6">
          {description}
        </Text>
      </div>
    </Card>
  )
}

export default ChallengeCard
