import Text from 'components/Text'
import React, { useState } from 'react'
import PrimaryButton, { TextButton } from 'components/Buttons'
import { twMerge } from 'tailwind-merge'
import { FloatButton, Form } from 'antd'
import CardEventRun from 'components/Cards'
import Heading from 'components/Heading'
import SimpleInput from 'components/Forms/Input/Inputs'
import ContactUs from 'components/ContactUs'
import { ArrowUpOutlined, WhatsAppOutlined } from '@ant-design/icons'
import Carousel from 'components/Carousel/Carousel'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'

const bannerData = [
  {
    banner: '/images/banner-sample.png',
    title: 'Discover the Heart of Padang: Join Us for an Epic Run!',
    description:
      'Dive into the vibrant streets of Padang with our exhilarating running event. Experience the thrill of the city as you join fellow runners in a journey through its heart. Register now for an unforgettable adventure!',
  },
  {
    banner: '/images/banner-sample.png',
    title: 'Discover the Heart of Padang: Join Us for an Epic Run!',
    description:
      'Dive into the vibrant streets of Padang with our exhilarating running event. Experience the thrill of the city as you join fellow runners in a journey through its heart. Register now for an unforgettable adventure!',
  },
  {
    banner: '/images/banner-sample.png',
    title: 'Discover the Heart of Padang: Join Us for an Epic Run!',
    description:
      'Dive into the vibrant streets of Padang with our exhilarating running event. Experience the thrill of the city as you join fellow runners in a journey through its heart. Register now for an unforgettable adventure!',
  },
]

function Home() {
  const [ellipsis, setEllipsis] = useState(false)
  return (
    <div className="min-h-screen md:px-24 md:py-20 px-4 py-5">
      <Carousel className="rounded-2xl" pagination navigation>
        {bannerData?.map((d) => (
          <SwiperSlide className="rounded-2xl" key={d.banner}>
            <div className="relative h-52 md:h-[520px] rounded-2xl overflow-hidden">
              <Image
                src={d.banner}
                alt="Banner 1"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 flex flex-col md:px-20 md:py-24 px-4 py-5">
                <div className="bg-gradient-to-r from-[#EB0030B2] via-[#AA215980] to-[#0079C46D] opacity-40 w-full h-full absolute top-0 left-0" />
                <div className="relative z-10 max-w-[680px]">
                  <Text size="h1" className="font-semibold text-white">
                    {d.title}
                  </Text>
                  <Text size="body1" className="text-white font-normal mt-6">
                    {d.description}
                  </Text>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
      <div className="md:flex w-full gap-x-12 md:pt-20 md:pb-40 pt-8 pb-8">
        <div className="md:w-[55%] w-full">
          <Text className="text-primary font-bold text-lg">ABOUT US</Text>
          <div>
            <Text
              className="text-[#444458] font-semibold w-[80%] md:my-6 my-4"
              size="h1"
            >
              Celebrating the Spirit of Running in Padang
            </Text>
            <Text className="text-[#777682] text-base">
              At Padang HM, We Run the City, we are passionate about promoting a
              healthy and active lifestyle through running. Founded with the
              goal of fostering a strong sense of community and camaraderie
              among runners in Padang, we organize exhilarating running events
              that bring people together from all walks of life. Join us as we
              lace up our shoes, hit the pavement, and embark on a journey of
              fitness, friendship, and fun. Together, lets continue to run the
              city and inspire others to embrace the joy of running.
            </Text>
            {!ellipsis && (
              <ul className="list-disc list-inside text-[#777682] my-6 flex flex-col gap-6 ml-2">
                <li>
                  <Text className="inline">Our Mission</Text>
                  <Text className="mx-6">
                    At Padang HM, our mission is to promote health and fitness
                    while fostering a sense of unity and camaraderie among
                    participants. We believe in the power of running to bring
                    people together and create positive change in our community.
                  </Text>
                </li>
                <li>
                  <Text className="inline">Our Values</Text>
                  <Text className="mx-6">
                    We are committed to inclusivity, respect, and excellence in
                    all that we do. Our events are designed to cater to
                    participants of all ages, abilities, and backgrounds,
                    creating an environment where everyone feels welcome and
                    supported.
                  </Text>
                </li>
              </ul>
            )}
          </div>
          <TextButton
            onClick={() => setEllipsis(!ellipsis)}
            className={twMerge([
              'font-medium text-lg text-primary p-0',
              ellipsis && 'pt-6',
            ])}
          >
            Show {ellipsis ? 'More' : 'Less'} About Us
          </TextButton>
        </div>
        <div className="md:w-[40%] w-full relative">
          <div className="md:absolute md:-top-6 flex flex-col items-center">
            <Image
              src="/images/about-us.png"
              alt="about-us"
              className="object-contain"
              width={500}
              height={450}
            />
          </div>
        </div>
      </div>
      <div className="md:py-20 py-8 w-full">
        <Heading
          sectionName="OUR EVENT"
          headingTitle="Experience the thrill of running with Padang HM at our event."
          headingDescription="Are you ready to lace up your shoes and join the excitement? At
          Padang HM, We Run the City, we invite you to be a part of our
          thrilling running events that showcase the best of Padangs
          landscapes and community spirit."
        />
        <div className="flex justify-center gap-x-6 w-full items-center">
          <div className="md:flex md:py-12">
            {[1, 2, 3, 4].map((idx) => (
              <CardEventRun
                href="/"
                key={idx}
                className="mt-4"
                categoryName="Fun Run"
                publishAt="12 Jan 2024"
                title="Padang HM Family Fun Run"
                imageUrl="/images/image-banner-example.png"
                description="Gather your loved ones and join us for the Padang HM
                Family Fun Run, a delightful event designed for all ages
                to enjoy together. Experience the joy of running as a
                family while creating cherished memories that will last a
                lifetime!"
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <PrimaryButton className="h-14 px-12">See All Event</PrimaryButton>
        </div>
      </div>
      <div className="md:py-20 py-10">
        <Heading
          sectionName="Register Your City"
          headingTitle="Make Your City the Host of Our Even"
          headingDescription="Take the first step by registering your city to become a potential host for our exciting running event. By doing so, you're not just opening doors to a memorable event for your community, but also contributing to the overall growth and diversity of our running community."
        />
        <Form layout="horizontal" className="flex gap-x-6 mt-12">
          <SimpleInput placeholder="Your Email Address" />
          <SimpleInput placeholder="Your Email Address" />
          <PrimaryButton className="h-14 px-20">Submit</PrimaryButton>
        </Form>
      </div>
      <ContactUs />
      <FloatButton.BackTop
        type="primary"
        className="w-12 h-12"
        style={{ bottom: 120 }}
        icon={<ArrowUpOutlined className="text-white w-8 h-8" />}
      />
      <FloatButton
        type="default"
        className="w-12 h-12 bg-green-500"
        icon={<WhatsAppOutlined className="text-white" />}
      />
    </div>
  )
}

export default Home
