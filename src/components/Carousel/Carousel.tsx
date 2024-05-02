import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { IconButton } from 'components/Buttons'
import React, { useRef } from 'react'

import { Swiper } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { twMerge } from 'tailwind-merge'

interface CarouselProps {
  children: React.ReactNode
  slidePerView?: number
  className?: string
  pagination?: boolean
  navigation?: boolean
}

function Carousel(props: CarouselProps) {
  const {
    children,
    className,
    pagination,
    navigation,
    slidePerView = 1,
  } = props

  const swiperRef = useRef(null)

  return (
    <div className="relative">
      {navigation && (
        <IconButton
          onClick={() => swiperRef?.current?.swiper?.slidePrev()}
          className="opacity-50 absolute bg-white border-none hover:bg-gray-400 md:w-12 md:h-12 w-10 h-10 flex items-center justify-center z-[99] md:left-10 left-5 top-2/4"
          icon={<LeftOutlined />}
        />
      )}
      <Swiper
        ref={swiperRef}
        className={twMerge(['mySwiper', className])}
        navigation
        {...(pagination && { pagination: { clickable: true } })}
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={slidePerView}
      >
        {children}
      </Swiper>
      {navigation && (
        <IconButton
          onClick={() => swiperRef?.current?.swiper?.slideNext()}
          className="opacity-50 absolute bg-white border-none hover:bg-gray-400 md:w-12 md:h-12 w-10 h-10 flex items-center justify-center z-[99] md:right-10 right-5 top-2/4"
          icon={<RightOutlined />}
        />
      )}
    </div>
  )
}

export default Carousel
