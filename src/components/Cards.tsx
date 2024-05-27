import { Card as AntCard, Image, Tag, Typography, CardProps } from 'antd'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import moment from 'moment'
import CalendarIcon from './Icons/CalendarIcon'
import Text from './Text'
import { LinkButton } from './Buttons'

type CardEventRunType = CardProps & {
  href: string
  title: string
  imageUrl: string
  publishAt: string
  description: string
  categoryName?: string
}

const { Paragraph } = Typography

function CardEventRun(props: CardEventRunType) {
  const {
    href,
    title,
    imageUrl,
    publishAt,
    description,
    categoryName,
    className,
  } = props

  return (
    <AntCard
      bordered={false}
      className={twMerge([
        'w-72 m-0 overflow-hidden p-4 shadow-none',
        className,
      ])}
      cover={
        <div className="h-56 overflow-hidden rounded-lg relative">
          <Image
            src={`https://api-prod-new2.beyondrun.com/v1/uploads/${imageUrl}`}
            preview={false}
            className="w-full"
            crossOrigin="anonymous"
          />
          <Tag
            className="font-inter text-xs font-semibold p-2 absolute top-3 left-3"
            color="#00ACA2"
          >
            {categoryName}
          </Tag>
          <div className="top-0 right-0 absolute">
            <Image
              preview={false}
              src="/images/Subtract.png"
              className="w-11 opacity-50"
            />
          </div>
        </div>
      }
    >
      <div>
        <div className="flex pt-4 pb-3 gap-x-2 font-semibold text-xs items-center text-[#9999A4]">
          <CalendarIcon />
          <Text>{moment(publishAt).format('DD MMMM YYYY')}</Text>
        </div>
        <Text size="body1" className="text-[#444458] text-base font-semibold">
          {title}
        </Text>
        <div className="py-3">
          <Paragraph className="text-neutral50 text-sm" ellipsis={{ rows: 2 }}>
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </Paragraph>
        </div>

        <LinkButton href={href || '/'} className="w-full h-10">
          Detail
        </LinkButton>
      </div>
    </AntCard>
  )
}

export function FallbackCardEventRun(props: CardEventRunType) {
  const {
    href,
    title,
    imageUrl,
    publishAt,
    description,
    categoryName,
    className,
  } = props

  return (
    <div
      className={twMerge([
        'bg-white min-w-[350px] md:max-w-[1200px]   md:flex justify-between p-4 md:p-12 gap-12 rounded-2xl m-auto',
        className,
      ])}
    >
      <div className="relative flex">
        <Image
          src={`https://api-prod-new2.beyondrun.com/v1/uploads/${imageUrl}`}
          preview={false}
          crossOrigin="anonymous"
          className="w-[373px] h-[231px] object-cover rounded-2xl"
        />
        <Tag
          className="font-inter text-xs font-semibold p-2 absolute top-3 left-3"
          color="#00ACA2"
        >
          {categoryName}
        </Tag>
      </div>
      <div className="max-w-[723px] flex flex-col">
        <div className="flex pt-4 gap-x-2 font-semibold text-xs items-center text-[#9999A4]">
          <CalendarIcon />
          <Text>{moment(publishAt).format('DD MMMM YYYY')}</Text>
        </div>
        <Text
          size="body1"
          className="text-[#444458] text-base font-semibold my-3"
        >
          {title}
        </Text>
        <Paragraph className="text-neutral50 text-sm" ellipsis={{ rows: 3 }}>
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </Paragraph>
        <div className="w-full mt-auto">
          <LinkButton href={href || '/'} className="w-full h-10">
            Detail
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

export default CardEventRun
