import React from 'react'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PrimaryButton from './Buttons'

interface SegmentedComponentProps {
  options: { label: string; link?: string }[]
  className?: string
  activeSegment?: string | string[]
  onClick?: () => void
  hrefSegmented?: boolean
}

export default function SegmentedComponent(props: SegmentedComponentProps) {
  const {
    options,
    className,
    activeSegment,
    onClick,
    hrefSegmented,
    ...restProps
  } = props

  const activeButton = (option) => {
    return activeSegment === option.label
      ? 'bg-primary text-[#FFFFFF] h-16'
      : 'bg-[#EBEBEB] text-[#B4B4BC] h-14'
  }

  return (
    <div className="m-0 justify-center flex items-center">
      {options.map((option) => {
        if (!hrefSegmented) {
          return (
            <PrimaryButton
              {...restProps}
              onClick={onClick}
              className={twMerge(
                activeButton(option),
                'flex items-center font-inter justify-center text-center font-medium border-none rounded-lg cursor-pointer select-none hover:h-16 hover:bg-[#1088C8] hover:text-[#FFFFFF] ',
                className,
              )}
              key={option.label}
              style={{ whiteSpace: 'nowrap' }}
            >
              {option.label}
            </PrimaryButton>
          )
        }
        return (
          <Link href={option.link}>
            <PrimaryButton
              {...restProps}
              onClick={onClick}
              className={twMerge(
                activeButton(option),
                'flex items-center font-inter justify-center text-center font-medium border-none rounded-lg cursor-pointer select-none hover:h-16 hover:bg-[#1088C8] hover:text-[#FFFFFF] ',
                className,
              )}
              key={option.label}
              style={{ whiteSpace: 'nowrap' }}
            >
              {option.label}
            </PrimaryButton>
          </Link>
        )
      })}
    </div>
  )
}
