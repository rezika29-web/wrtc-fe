import React from 'react'
import Image from 'next/image'
import { LinkButton } from './Buttons'
import Text from './Text'

export default function ContactUs() {
  return (
    <div className="bg-[#F89D3C] md:p-12 p-8 flex flex-col justify-center md:rounded-xl rounded-2xl w-full">
      <div className="relative z-10">
        <Text
          size="body1"
          className="md:text-lg text-base font-inter font-bold mb-4"
          style={{ color: '#ffff' }}
        >
          HUBUNGI KAMI
        </Text>
        <Text
          size="h1"
          className="md:text-[44px] text-2xl font-rubik font-semibold md:mb-12 mb-6"
          style={{ color: '#FAFAFA' }}
        >
          Get in Touch with Us
        </Text>
        <Text
          size="body1"
          className="md:w-[903px] text-base md:mb-12 font-inter font-normal mb-6"
          style={{ color: '#FAFAFA' }}
        >
          Jangan ragu untuk menghubungi kami dan kami akan dengan senang hati
          membantu Anda dengan pertanyaan apa pun yang anda miliki mengenai We
          Run the City.
        </Text>
        <LinkButton className="text-[#F89D3C] md:text-lg md:h-14 md:w-52 md:mb-0 md:mx-0 text-lg h-14 w-full font-medium mx-auto">
          Contact Us
        </LinkButton>
      </div>

      <div className="relative md:items-center md:justify-between z-0">
        <div className="absolute md:-right-12 md:bottom-0 md:flex md:justify-end md:items-end">
          <Image
            src="/icons/vektor-1.svg"
            alt="img-faq"
            width={671}
            height={334}
            className="md:w-[740px] md:h-[389px] relative md:left-[36rem] md:top-[59px] -top-28 right-6  z-10"
          />
          <Image
            src="/icons/vektor-2.svg"
            alt="img-faq"
            width={673}
            height={335}
            className="md:w-[745px] md:h-[389px] relative md:-left-2 md:top-[59px] -top-[253px] left-8 rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}
