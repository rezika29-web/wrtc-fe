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

  const router = useRouter()

  const activeButton = (option) => {
    return option.link === router.pathname
      ? 'bg-primary text-[#FFFFFF] h-16'
      : 'bg-[#EBEBEB] text-[#B4B4BC] h-14'
  }

  return (
    <div className="m-0 justify-center flex items-center px-5">
      {options.map((option) => {
        if (!hrefSegmented) {
          return (
            <PrimaryButton
              {...restProps}
              onClick={onClick}
              className={twMerge(
                activeButton(option),
                `flex items-center font-inter justify-center text-center font-medium border-none rounded-lg cursor-pointer select-none hover:h-16 hover:bg-[#1088C8] hover:text-[#FFFFFF]`,
                className,
              )}
              key={option.label}
              style={{ whiteSpace: 'normal' }}
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
                'flex items-center font-inter justify-center text-center  text-xs md:text-base font-medium border-none rounded-lg cursor-pointer select-none hover:h-16 hover:bg-[#1088C8] hover:text-[#FFFFFF] whitespace-normal md:whitespace-nowrap',
                className,
              )}
              key={option.label}
            >
              <span className="block"> {option.label}</span>
            </PrimaryButton>
          </Link>
        )
      })}
    </div>
  )
}
