import Text from 'components/Text'
import React, { useEffect, useState } from 'react'
import PrimaryButton, { TextButton } from 'components/Buttons'
import { twMerge } from 'tailwind-merge'
import { FloatButton, Form, Modal, Select } from 'antd'
import CardEventRun, { FallbackCardEventRun } from 'components/Cards'
import Heading from 'components/Heading'
import SimpleInput from 'components/Forms/Input/Inputs'
import ContactUs from 'components/ContactUs'
import { ArrowUpOutlined, WhatsAppOutlined } from '@ant-design/icons'
import Carousel from 'components/Carousel/Carousel'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import useEvents from 'data/useEvents'
import useCities from 'data/useCities'
import { useMutation } from 'react-query'
import CallAPI from 'services/CallAPI'
import router from 'next/router'
import ModalEvent from './ModalEvent'

type requestHostEventPayload = {
  email: string
  city: string
}
const bannerData = [
  {
    banner: '/images/BG.png',
    title: 'Discover the Heart of Padang: Join Us for an Epic Run!',
    description:
      'Dive into the vibrant streets of Padang with our exhilarating running event. Experience the thrill of the city as you join fellow runners in a journey through its heart. Register now for an unforgettable adventure!',
  },
  {
    banner: '/images/BG.png',
    title: 'Discover the Heart of Padang: Join Us for an Epic Run!',
    description:
      'Dive into the vibrant streets of Padang with our exhilarating running event. Experience the thrill of the city as you join fellow runners in a journey through its heart. Register now for an unforgettable adventure!',
  },
  {
    banner: '/images/BG.png',
    title: 'Discover the Heart of Padang: Join Us for an Epic Run!',
    description:
      'Dive into the vibrant streets of Padang with our exhilarating running event. Experience the thrill of the city as you join fellow runners in a journey through its heart. Register now for an unforgettable adventure!',
  },
]

function Home() {
  const params = {
    pageSize: 999,
  }
  const [ellipsis, setEllipsis] = useState(false)
  const { data: dataCities } = useCities(params) || {}
  const [masterCities, setMasterCities] = useState([])
  const [successModalVisible, setSuccessModalVisible] = useState(false)

  useEffect(() => {
    if (dataCities) {
      setMasterCities(dataCities)
    }
  }, [dataCities])
  const optionCities = masterCities.map((cities) => ({
    label: cities.nama,
    value: cities.id.toString(),
  }))
  const { data } = useEvents()

  const requestHostEvent = useMutation({
    mutationFn: (fieldValues: requestHostEventPayload) =>
      CallAPI.requestHostEvent({
        email: fieldValues.email,
        city: fieldValues.city,
      }),
    onSuccess(variables, context) {
      setSuccessModalVisible(true)
    },
  })
  const handleCancel = () => {
    setSuccessModalVisible(!successModalVisible)
  }
  const onClose = () => {
    setSuccessModalVisible(!successModalVisible)
    router.reload()
  }
  const modalTitle = (
    <div style={{ textAlign: 'center', color: 'blue' }}>
      <h3 style={{ margin: 0 }}>DAFTARKAN KOTA ANDA</h3>
    </div>
  )
  return (
    <>
      <div className="min-h-screen md:px-24 md:py-20 px-4 py-5">
        <Carousel className="rounded-2xl" pagination navigation>
          {bannerData?.map((d) => (
            <SwiperSlide className="rounded-2xl" key={d.banner}>
              <div className="flex h-52 md:h-[520px] rounded-2xl overflow-hidden">
                <Image
                  src={d.banner}
                  alt="Banner 1"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 flex flex-col md:px-20 md:py-24 px-4 py-5">
                  <div className="bg-gradient-to-r from-[#EB0030B2] via-[#AA215980] to-[#0079C46D] opacity-40 w-full h-full absolute top-0 left-0" />
                  <div className="md:flex md:items-start rounded-t-xl justify-center absolute top-6 left-6 bottom-6 right-8 ">
                    <Image
                      src="/images/Atribute.png"
                      alt="img-atribute"
                      width={0}
                      height={0}
                      className="w-full h-full"
                    />
                  </div>
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
            <Text className="text-primary font-bold text-lg">TENTANG KAMI</Text>
            <div>
              <Text
                className="text-[#444458] font-semibold w-[80%] md:my-6 my-4"
                size="h1"
              >
                Celebrating the Spirit of Running in Padang
              </Text>
              <Text className="text-[#777682] text-base">
                At Padang HM, We Run the City, we are passionate about promoting
                a healthy and active lifestyle through running. Founded with the
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
                      people together and create positive change in our
                      community.
                    </Text>
                  </li>
                  <li>
                    <Text className="inline">Our Values</Text>
                    <Text className="mx-6">
                      We are committed to inclusivity, respect, and excellence
                      in all that we do. Our events are designed to cater to
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
              Show {ellipsis ? 'More' : 'Less'}
            </TextButton>
          </div>
          <div className="md:w-[40%] w-full relative">
            <div className="md:absolute md:-top-6 flex flex-col items-center">
              <Image
                src="/images/Wrapper-Kanan.png"
                alt="about-us"
                className="object-contain"
                width={500}
                height={450}
              />
            </div>
          </div>
        </div>
        <div className="md:py-10 py-8 w-full">
          <Heading
            sectionName="EVENT KAMI"
            headingTitle="Experience the thrill of running with Padang HM at our event."
            headingDescription="Are you ready to lace up your shoes and join the excitement? At
          Padang HM, We Run the City, we invite you to be a part of our
          thrilling running events that showcase the best of Padangs
          landscapes and community spirit."
          />

          {data?.length === 1 &&
            data?.map((e) => (
              <FallbackCardEventRun
                key={e.id}
                imageUrl={e.filename}
                href={`/event/event-detail/?title=${e.nama}&id=${e.id}`}
                description={e.deskripsi}
                publishAt={e.createdAt}
                title={e.nama}
                categoryName="Event"
                className="my-8 md:my-12"
              />
            ))}
          <div className="flex justify-center gap-x-6 w-full items-center">
            <div className="md:flex md:py-12">
              {data?.length > 1 &&
                data?.map((e) => (
                  <CardEventRun
                    key={e.id}
                    imageUrl={e.filename}
                    href={`/event/event-detail/?title=${e.nama}&id=${e.id}`}
                    description={e.deskripsi}
                    publishAt={e.createdAt}
                    title={e.nama}
                    categoryName="Event"
                    className="my-8 md:my-12"
                  />
                ))}
            </div>
          </div>
          <div className="flex justify-center">
            {data?.length > 1 && (
              <PrimaryButton className="h-14 px-12">
                See All Event
              </PrimaryButton>
            )}
          </div>
        </div>
        <div className="md:mb-20">
          <Heading
            sectionName="DAFTARKAN KOTA ANDA"
            headingTitle="Make Your City the Host of Our Even"
            headingDescription="Take the first step by registering your city to become a potential host for our exciting running event. By doing so, you're not just opening doors to a memorable event for your community, but also contributing to the overall growth and diversity of our running community."
          />
          <Form
            name="reques-host-event"
            layout="horizontal"
            className="flex gap-x-6 mt-12 "
            requiredMark={false}
            onFinish={(fieldValues) => {
              requestHostEvent.mutate(fieldValues)
            }}
          >
            <Form.Item name="email" className="md:w-[40%]">
              <SimpleInput
                className="font-normal"
                placeholder="Masukkan email"
                style={{ width: '100%', height: '60px' }}
              />
            </Form.Item>
            <Form.Item name="city" className="md:w-[40%]">
              <Select
                placeholder="Pilih Kota"
                style={{ width: '100%', height: '60px' }}
                options={optionCities}
              />
            </Form.Item>
            <Form.Item className="md:w-[20%]">
              <PrimaryButton
                htmlType="submit"
                className="h-14 w-[80%]"
                style={{ height: '60px' }}
              >
                Submit
              </PrimaryButton>
            </Form.Item>
          </Form>
        </div>
        <div>
          <Modal title={modalTitle} onCancel={handleCancel} footer={null}>
            <ModalEvent onClose={onClose} />
          </Modal>
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
    </>
  )
}

export default Home
