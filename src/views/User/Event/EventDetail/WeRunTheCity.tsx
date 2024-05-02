import { Badge, Card, Grid, Select, Tag } from 'antd'
import PrimaryButton, { TextButton } from 'components/Buttons'
import Carousel from 'components/Carousel/Carousel'
import Text from 'components/Text'
import Image from 'next/image'
import React, { useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import Heading from 'components/Heading'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
import { Search } from 'components/Forms/Input/Search'
import WrtcTable from 'components/Table/WrtcTable'
import SegmentedComponent from 'components/Segmented'
import { useRouter } from 'next/router'
import CustomBreadcrumb from 'components/Breadcrumb'
import PaginationButton from 'components/Pagination/PaginationButton'
import CardChallenge from 'components/Cards/CardChallenge'
import QuoteIcon from 'components/Icons/QuoteIcon'
import CardWelcome from 'components/Cards/CardWelcome'
import ContactUs from 'components/ContactUs'
import RulesRegulation from './Partials/RulesRegulation'
import { columns, data } from './data/UserDataColumn'

const { useBreakpoint } = Grid

const dummyData = [
  {
    question: 'What is Padang HM, We Run the City?',
    answer:
      'Yes, we offer training programs and resources to help participants prepare for our events. Whether youre a beginner looking to start running or a seasoned athlete aiming to improve your performance, our training programs cater to all levels and goals.',
    panelKey: '1',
  },
  {
    question: 'Who can participate in Padang HM events?',
    answer:
      'Yes, we offer training programs and resources to help participants prepare for our events. Whether youre a beginner looking to start running or a seasoned athlete aiming to improve your performance, our training programs cater to all levels and goals.',
    panelKey: '2',
  },
  {
    question: 'How do I register for a Padang HM event?',
    answer:
      'Yes, we offer training programs and resources to help participants prepare for our events. Whether youre a beginner looking to start running or a seasoned athlete aiming to improve your performance, our training programs cater to all levels and goals.',
    panelKey: '3',
  },
  {
    question: 'What are the registration fees for Padang HM events?',
    answer:
      'Yes, we offer training programs and resources to help participants prepare for our events. Whether youre a beginner looking to start running or a seasoned athlete aiming to improve your performance, our training programs cater to all levels and goals.',
    panelKey: '4',
  },
  {
    question: 'Are there any training programs available for Padang HM events?',
    answer:
      'Yes, we offer training programs and resources to help participants prepare for our events. Whether youre a beginner looking to start running or a seasoned athlete aiming to improve your performance, our training programs cater to all levels and goals.',
    panelKey: '5',
  },
  {
    question: 'What safety measures are in place during Padang HM events?',
    answer:
      'Yes, we offer training programs and resources to help participants prepare for our events. Whether youre a beginner looking to start running or a seasoned athlete aiming to improve your performance, our training programs cater to all levels and goals.',
    panelKey: '6',
  },
  {
    question: 'Can I volunteer to help at Padang HM events?',
    answer:
      'Yes, we offer training programs and resources to help participants prepare for our events. Whether youre a beginner looking to start running or a seasoned athlete aiming to improve your performance, our training programs cater to all levels and goals.',
    panelKey: '7',
  },
  {
    question: 'Are pets allowed at Padang HM events?',
    answer:
      'Yes, we offer training programs and resources to help participants prepare for our events. Whether youre a beginner looking to start running or a seasoned athlete aiming to improve your performance, our training programs cater to all levels and goals.',
    panelKey: '8',
  },
  {
    question: 'What safety measures are in place during Padang HM events?',
    answer:
      'Yes, we offer training programs and resources to help participants prepare for our events. Whether youre a beginner looking to start running or a seasoned athlete aiming to improve your performance, our training programs cater to all levels and goals.',
    panelKey: '9',
  },
  {
    question: 'Can I volunteer to help at Padang HM events?',
    answer:
      'Yes, we offer training programs and resources to help participants prepare for our events. Whether youre a beginner looking to start running or a seasoned athlete aiming to improve your performance, our training programs cater to all levels and goals.',
    panelKey: '10',
  },
  {
    question: 'Are pets allowed at Padang HM events?',
    answer:
      'Yes, we offer training programs and resources to help participants prepare for our events. Whether youre a beginner looking to start running or a seasoned athlete aiming to improve your performance, our training programs cater to all levels and goals.',
    panelKey: '11',
  },
]
const bannerData = [
  {
    banner: '/images/image-event-banner.png',
    eventName: 'Siti Nurbaya Bridge',
  },
  {
    banner: '/images/image-event-banner.png',
    eventName: 'Siti Nurbaya Bridge',
  },
  {
    banner: '/images/image-event-banner.png',
    eventName: 'Siti Nurbaya Bridge',
  },
  {
    banner: '/images/image-event-banner.png',
    eventName: 'Siti Nurbaya Bridge',
  },
]
const challengeData = [
  {
    id: 1,
    color: 'bg-bluemain',
    point: 45,
    title: 'ITENARY',
    description:
      'Dapatkan informasi terbaru tentang jadwal acara dan kegiatandengan kartu Rencana Perjalanan. Rencanakan hari Anda dan maksimalkan pengalaman We Run the City Anda.',
    imageIllustration: '/images/itenary-illustration.png',
  },
  {
    id: 2,
    color: 'bg-yellowmain',
    point: 45,
    title: 'MINI GAMES',
    description:
      'Dapatkan informasi terbaru tentang jadwal acara dan kegiatandengan kartu Rencana Perjalanan. Rencanakan hari Anda dan maksimalkan pengalaman We Run the City Anda.',
    imageIllustration: '/images/mini-games-illustration.png',
  },
  {
    id: 3,
    color: 'bg-redmain',
    point: 45,
    title: 'TREASURE HUNT',
    description:
      'Dapatkan informasi terbaru tentang jadwal acara dan kegiatandengan kartu Rencana Perjalanan. Rencanakan hari Anda dan maksimalkan pengalaman We Run the City Anda.',
    imageIllustration: '/images/treasure-hunt-illustration.png',
  },
  {
    id: 4,
    color: 'bg-toscamain',
    point: 45,
    title: 'VIRTUAL RUN',
    description:
      'Dapatkan informasi terbaru tentang jadwal acara dan kegiatandengan kartu Rencana Perjalanan. Rencanakan hari Anda dan maksimalkan pengalaman We Run the City Anda.',
    imageIllustration: '/images/virtual-run-illustration.png',
  },
]
const welcomeData = [
  {
    id: 1,
    comment:
      'Atas nama masyarakat Padang, saya mengucapkan selamat datang kepada seluruh peserta We Run the City. Antusiasme dan dedikasi Anda terhadap kesehatan dan kebugaran menginspirasi kita semua. Semoga acara ini sukses dan berkesan!',
    username: 'Sam Kris',
    description: 'Wali Kota Padang',
    profileImage: '/images/run.jpg',
  },
  {
    id: 2,
    comment:
      'Atas nama masyarakat Padang, saya mengucapkan selamat datang kepada seluruh peserta We Run the City. Antusiasme dan dedikasi Anda terhadap kesehatan dan kebugaran menginspirasi kita semua. Semoga acara ini sukses dan berkesan!',
    username: 'Sam Kris',
    description: 'Wali Kota Padang',
    profileImage: '/images/run.jpg',
  },
  {
    id: 3,
    comment:
      'Atas nama masyarakat Padang, saya mengucapkan selamat datang kepada seluruh peserta We Run the City. Antusiasme dan dedikasi Anda terhadap kesehatan dan kebugaran menginspirasi kita semua. Semoga acara ini sukses dan berkesan!',
    username: 'Sam Kris',
    description: 'Wali Kota Padang',
    profileImage: '/images/run.jpg',
  },
  {
    id: 3,
    comment:
      'Atas nama masyarakat Padang, saya mengucapkan selamat datang kepada seluruh peserta We Run the City. Antusiasme dan dedikasi Anda terhadap kesehatan dan kebugaran menginspirasi kita semua. Semoga acara ini sukses dan berkesan!',
    username: 'Sam Kris',
    description: 'Wali Kota Padang',
    profileImage: '/images/run.jpg',
  },
  {
    id: 3,
    comment:
      'Atas nama masyarakat Padang, saya mengucapkan selamat datang kepada seluruh peserta We Run the City. Antusiasme dan dedikasi Anda terhadap kesehatan dan kebugaran menginspirasi kita semua. Semoga acara ini sukses dan berkesan!',
    username: 'Sam Kris',
    description: 'Wali Kota Padang',
    profileImage: '/images/run.jpg',
  },
  {
    id: 3,
    comment:
      'Atas nama masyarakat Padang, saya mengucapkan selamat datang kepada seluruh peserta We Run the City. Antusiasme dan dedikasi Anda terhadap kesehatan dan kebugaran menginspirasi kita semua. Semoga acara ini sukses dan berkesan!',
    username: 'Sam Kris',
    description: 'Wali Kota Padang',
    profileImage: '/images/run.jpg',
  },
]
const collaborationData = [
  { src: '/logo/first-media-logo.png' },
  { src: '/logo/bethsaida-logo.png' },
  { src: '/logo/fitbar-logo.png' },
  { src: '/logo/pertamina-logo.png' },
  { src: '/logo/hoka-logo.png' },
  { src: '/logo/strive-logo.png' },
  { src: '/logo/beyondrun-logo.png' },
  { src: '/logo/pocari-logo.png' },
  { src: '/logo/media-logo.png' },
]

const breadcrumbItems = [
  {
    key: '1.0',
    title: 'Event',
    href: '/event',
  },
  {
    key: '2.0',
    title: 'Padang Run The City',
    href: '/padang-run-the-city',
  },
]

function RenderButtonRadio(props: {
  filterTotal: string
  setFilterTotal: (e) => void
}) {
  const { filterTotal, setFilterTotal } = props

  const activeButtonClass = 'bg-primary text-white hover:bg-primary'
  const inActiveButtonClass =
    'bg-white text-neutral50 hover:bg-primary hover:text-white'

  const buttonFilter = [
    {
      name: '5K Umum',
    },
    {
      name: '10K Umum',
    },
    {
      name: '21K Umum & Master',
    },
    {
      name: '5K Pelajar',
    },
  ]

  return (
    <div className="flex gap-x-2">
      {buttonFilter?.map((d) => (
        <TextButton
          className={twMerge([
            'h-12',
            filterTotal === d.name ? activeButtonClass : inActiveButtonClass,
          ])}
          onClick={() => setFilterTotal(d.name)}
        >
          {d.name}
        </TextButton>
      ))}
    </div>
  )
}

function WeRunTheCity() {
  const router = useRouter()
  const eventPathname = router.query?.title as string

  const size = useBreakpoint()

  const [filterTotal, setFilterTotal] = useState('5K Umum')
  const [showItems, setShowItems] = useState(5)

  const displayedItems = dummyData.slice(0, showItems)

  return (
    <div className="md:px-[100px] md:py-16 px-5 py-8">
      <CustomBreadcrumb
        items={breadcrumbItems}
        className="md:mb-10 md:block hidden"
      />
      <div className="md:w-[840px] w-[350px] mx-auto text-center">
        <Text
          size="body1"
          className="md:text-lg md:my-12 font-bold font-inter text-[#0079C4]"
        >
          EVENT{' '}
        </Text>
        <SegmentedComponent
          hrefSegmented
          activeSegment={eventPathname}
          options={[
            {
              label: 'Padang Half Marathon',
              link: `/event/event-detail/?title=Padang Half Marathon&?id=1`,
            },
            {
              label: 'Padang Explore',
              link: `/event/event-explore/?title=Padang Explore&/?id=1`,
            },
          ]}
          className="px-12 py-2"
        />
        <Text className="md:text-[44px] text-[28px] mx-auto md:w-full w-72 md:my-12 mb-8 font-semibold text-[#444458] font-rubik">
          Padang We Run the City
        </Text>
      </div>

      <div className="text-center w-full flex justify-center">
        <Text
          size="body2"
          className="md:text-center md:text-base md:mb-12 font-normal text-[#777682] font-rubik md:w-[840px] w-[400px]"
        >
          Discover the must-visit places in Padang while you&apos;re in town for
          the We Run the City events. From scenic landmarks to cultural
          hotspots, Padang offers a variety of attractions for visitors to
          explore:
        </Text>
      </div>

      <div className="md:pb-20 pb-8">
        <Carousel slidePerView={3} navigation={!size.xs}>
          {bannerData?.map((d, idx) => (
            <SwiperSlide
              className="rounded-none flex items-center justify-center"
              key={d.banner}
            >
              <div>
                <Image src={d.banner} alt="Banner 1" width={999} height={390} />
                <div className="flex items-center mt-4">
                  <Tag
                    className="rounded-full bg-primary text-white"
                    bordered={false}
                  >
                    {idx + 1}
                  </Tag>
                  <Text size="body1" className="font-medium text-neutral60">
                    {d.eventName}
                  </Text>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </div>

      <div className="px-5 md:px-[200px] md:py-20 py-8">
        <Heading
          sectionName="ATURAN & PEDOMAN"
          headingTitle="Important Information for Participants"
          headingDescription="Before participating in We Run the City events, please familiarize
          yourself with the following rules and guidelines to ensure a safe
          and enjoyable experience:"
        />
        <div className="flex items-center gap-x-3 pt-8 md:pt-20">
          <Text size="body1" className="font-medium text-neutral60">
            Rules & Regulation
          </Text>
          <Badge showZero count={dummyData.length || 0} color="#0079C4" />
        </div>
        <Text size="h4" className="font-semibold text-neutral80 mt-6 mb-12">
          2024 TCS London Marathon
        </Text>
        {displayedItems.map((d, idx) => (
          <RulesRegulation
            key={d.question}
            panelKey={d.panelKey}
            question={d.question}
            answer={d.answer}
          />
        ))}
        <div className="flex justify-center">
          {showItems < dummyData.length && (
            <PrimaryButton
              onClick={() => setShowItems(dummyData.length)}
              className="md:w-56 rounded-lg py-2 w-full h-14 text-lg"
            >
              See more
            </PrimaryButton>
          )}
        </div>
      </div>

      <div className="md:py-20 py-8">
        <Heading
          sectionName="LEADERBOARD"
          headingTitle="We Run The City"
          headingDescription="Lihat klasemen papan peringkat terbaru untuk acara We Run the City dan lihat peringkat Anda di antara sesama peserta"
        />

        <div className="flex items-center justify-center md:py-12 py-6">
          <SegmentedComponent
            activeSegment="Run Leaderboard"
            options={[
              {
                label: 'Run Leaderboard',
              },
              { label: 'Point Leaderboard' },
            ]}
            className="md:my-0 my-6"
          />
        </div>

        <div className="flex flex-col gap-y-4 md:py-20 py-8">
          <RenderButtonRadio
            filterTotal={filterTotal}
            setFilterTotal={(e) => setFilterTotal(e)}
          />
          <div className="flex gap-x-6 h-14">
            <Select
              className="h-full w-full"
              options={[{ label: 'Test', value: 'Test' }]}
              placeholder="Pilih Waktu"
            />
            <Select
              className="h-full w-full"
              options={[{ label: 'Test', value: 'Test' }]}
              placeholder="Pilih Gender"
            />
            <Select
              className="h-full w-full"
              options={[{ label: 'Test', value: 'Test' }]}
              placeholder="Pilih Komunitas"
            />
            <PrimaryButton className="h-full px-6">Reset</PrimaryButton>
          </div>
          <div className="h-14 flex gap-6">
            <Search placeholder="Cari nama peserta" onSearch={() => {}} />
            <PrimaryButton className="h-full px-5">Search</PrimaryButton>
          </div>
          <WrtcTable columns={columns} data={data} />
          <PaginationButton customSizeCharger />
        </div>

        <div className="md:py-20 py-8">
          <Heading
            sectionName="CHALLANGE POINT"
            headingTitle="Earn Rewards for Your Achievements"
            headingDescription="Berpartisipasilah dalam acara We Run the City dan benamkan diri Anda dalam dunia yang penuh dengan tantangan dan pencapaian. Dapatkan Poin Tantangan yang berharga saat Anda mendorong batas kemampuan Anda untuk mencapai prestasi terbaik."
          />
          <div className="md:mt-12 mt-7 flex flex-wrap justify-center gap-6">
            {challengeData?.map((d) => {
              return (
                <CardChallenge
                  key={d.id}
                  point={d.point}
                  title={d.title}
                  className={d.color}
                  description={d.description}
                  imageIllustration={d.imageIllustration}
                />
              )
            })}
          </div>
        </div>

        <div className="md:py-20 py-8">
          <Heading
            sectionName="SAMBUTAN"
            headingTitle="Warm Welcome from We Run the City and Local Government"
            headingDescription="Bergabunglah bersama kami untuk menyampaikan salam dan apresiasi yang tulus kepada seluruh peserta, sukarelawan, dan pendukung We Run the City. Kami merasa terhormat mendapat dukungan dan kemitraan dari para pejabat pemerintah daerah yang telah berkontribusi dalam menyukseskan acara ini. Berikut beberapa salam hangat dari mereka"
          />
          <div className="gap-x-6 justify-center">
            <Carousel
              slidePerView={size.xs ? 1 : 3}
              pagination
              className="pt-12 md:pb-20 pb-20"
            >
              {welcomeData?.map((d) => (
                <SwiperSlide key={d.id}>
                  <CardWelcome
                    comment={d.comment}
                    username={d.username}
                    description={d.description}
                    imageProfile={d.profileImage}
                  />
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="md:py-20 py-8">
          <Heading
            sectionName="PARTNER KAMI"
            headingTitle="Celebrating Collaboration and Support"
            headingDescription=""
          />

          <div className="flex flex-wrap items-center justify-center gap-6">
            {collaborationData?.map((d) => (
              <div className="w-[220px] h-[220px]">
                <Image
                  key={d.src}
                  alt="collaboration"
                  src={d.src}
                  width={220}
                  height={220}
                />
              </div>
            ))}
          </div>
        </div>

        <ContactUs />
      </div>
    </div>
  )
}

export default WeRunTheCity
