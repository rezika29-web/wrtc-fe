import { Card, Typography } from 'antd'
import Text from 'components/Text'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ChallengeCardProps {
  point: number
  imageIllustration: string
  title: string
  description: string
  className: string
  status?: string
  periode?: string
  to?: string
  href?: string
}

const { Paragraph } = Typography

function LabelStatus({ status }: { status?: string }) {
  return (
    <div className="relative bg-[#F0FAF9] flex items-center gap-2 p-[2px] pr-4 mt-3 md:mt-8 rounded-full shadow-[0_4px_4px_0px_rgba(35,35,35,0.06)]">
      <Image
        src={
          status === 'Selesai' ? '/icons/checklist.svg' : '/icons/waiting.svg'
        }
        alt=""
        className="w-full h-7 md:w-9 md:h-9"
        width={0}
        height={0}
      />
      <span
        className="text-xs md:text-sm font-bold"
        style={
          status === 'Selesai' ? { color: '#00ACA2' } : { color: '#F89D3C' }
        }
      >
        {status === 'Selesai' ? 'Selesai' : 'Menunggu'}
      </span>
    </div>
  )
}

function ChallengeCard(props: ChallengeCardProps) {
  const {
    className,
    point,
    title,
    description,
    imageIllustration,
    status,
    periode,
    to,
    href,
  } = props

  return (
    <Card
      className={twMerge([
        className,
        'max-w-[600px] p-8 md:p-12 rounded-2xl my-8',
      ])}
    >
      <div className="flex justify-between">
        <div>
          <Text
            size="subtitle"
            className="font-bold text-white text-sm md:text-base"
          >
            {point || 0} POINT
          </Text>
          <LabelStatus status={status} />
        </div>

        <Image
          className="w-[132px] md:w-[264px]"
          alt="itenary"
          src={imageIllustration}
          width={264}
          height={264}
        />
      </div>
      <div>
        <Text size="h1" className="font-bold text-white">
          {title}
        </Text>
        <div className="mt-2 flex gap-3">
          <Image
            src="/icons/u_calendar-alt.svg"
            alt="calendar-icon"
            width={20}
            height={20}
          />
          <Text className="font-medium text-white">{`Periode ${periode} to ${to}`}</Text>
        </div>

        <Paragraph
          ellipsis={{ rows: 3 }}
          className="font-medium text-white mt-6"
        >
          {description}
        </Paragraph>
      </div>
      <div className="flex mt-6">
        <Link className="ms-auto" href={href || ''}>
          <Image
            src="/icons/arrow_right_alt.svg"
            alt="calendar-icon"
            width={48}
            height={48}
          />
        </Link>
      </div>
    </Card>
  )
}

export default ChallengeCard
