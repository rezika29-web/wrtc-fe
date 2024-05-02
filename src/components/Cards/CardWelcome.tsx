import { Card } from 'antd'
import QuoteIcon from 'components/Icons/QuoteIcon'
import Text from 'components/Text'
import Image from 'next/image'
import React from 'react'

interface CardWelcomeProps {
  comment: string
  imageProfile: string
  username: string
  description: string
}

function CardWelcome(props: CardWelcomeProps) {
  const { comment, description, imageProfile, username } = props

  return (
    <Card className="w-96 md:p-8 p-4" bordered={false}>
      <QuoteIcon />
      <Text size="body2" className="line-clamp-3 text-neutral60 md:my-8 my-4">
        {comment}
      </Text>
      <div className="flex items-center gap-x-4">
        <Image
          className="rounded-sm"
          alt="profile-user"
          src={imageProfile}
          width={48}
          height={48}
        />
        <div>
          <Text size="body1" className="text-primary font-bold">
            {username}
          </Text>
          <Text size="body2" className="font-medium text-neutral50">
            {description}
          </Text>
        </div>
      </div>
    </Card>
  )
}

export default CardWelcome
