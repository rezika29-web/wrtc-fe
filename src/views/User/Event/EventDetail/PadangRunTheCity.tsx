import CustomBreadcrumb from 'components/Breadcrumb'
import CardCategories from 'components/Cards/CardCategories'
import CardInformation from 'components/Cards/CardInformation'
import CardPrice from 'components/Cards/CardPrice'
import ContactUs from 'components/ContactUs'
import SegmentedComponent from 'components/Segmented'
import Text from 'components/Text'
import useAdditionalEventsCategory from 'data/useAdditionalEventsCategory'
import useEventsById from 'data/useEventById'
import moment from 'moment'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import PaymentMethod from './Partials/PaymentMethod'

const itemsData = [
  { id: '1', title: 'Distance 5K', price: 'Rp. 100.000' },
  { id: '2', title: 'Distance 10K', price: 'Rp. 150.000' },
  { id: '3', title: 'Distance 21K', price: 'Rp. 250.000' },
]

function PadangRunTheCity() {
  const router = useRouter()
  const eventPathname = router.query?.title as string

  const { data } = useEventsById(router.query?.id as string)

  const { data: eventsCategory } = useAdditionalEventsCategory({
    filtered: [{ id: 'event_category_id', value: '386' }],
  })

  const breadcrumbItems = [
    {
      key: '1.0',
      title: 'Event',
      href: '/event',
    },
    {
      key: '2.0',
      title: eventPathname,
    },
  ]

  return (
    <div className="container md:py-16 py-8">
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
              link: router.pathname,
            },
            {
              label: 'Padang Explore',
              link: router.pathname,
            },
          ]}
          className="px-12 py-2"
        />
        <Text className="md:text-[44px] text-[28px] mx-auto md:w-full w-72 md:my-12 mb-8 font-semibold text-[#444458] font-rubik">
          {data?.nama}
        </Text>
      </div>
      {/* img */}
      <div className="md:flex md:gap-6">
        <div className="md:max-w-[820px] md:gap-x-6 gap-2 mb-6">
          <Image
            src={`https://api-prod-new2.beyondrun.com/v1/uploads/${data?.filename}`}
            alt=""
            width="261"
            height="0"
            className="rounded-lg w-full h-auto"
            crossOrigin="anonymous"
          />
          {/* <span className="flex md:gap-6 gap-2 mt-5">
          <Image
            src="/images/run.jpg"
            alt=""
            width="82"
            height="81"
            className="rounded-lg md:w-[292px] md:h-[292px]"
          />

          <Image
            src="/images/alone.png"
            alt=""
            width="292"
            height="292"
            className="rounded-lg"
          />
        </span> */}
        </div>

        <div className="max-w-[397px]">
          <PaymentMethod />
        </div>
      </div>

      {/* description */}
      <div className="md:max-w-[820px]">
        <div className="md:mt-24 md:mb-12 mb-8 ">
          <Text className="text-[#444458] mb-6 md:text-[44px] text-[28px] font-semibold font-rubik">
            Description
          </Text>
          <Text
            className="text-base font-inter text-[#444458] leading-6 mb-12"
            dangerouslySetInnerHTML={{ __html: data?.deskripsi }}
          />
        </div>
        {/* Card information */}
        <div className="md:flex-row md:gap-x-6 md:mb-20 md:justify-between flex flex-col items-center w-full">
          <CardInformation
            title="Registration Period"
            icon="/icons/calendar.svg"
            description={`${moment(data?.tglBukaPendaftaran).format(
              'DD MMMM YYYY',
            )} - ${moment(data?.tglTutupPendaftaran).format('DD MMMM YYYY')}`}
            image="/icons/frame.svg"
            className="bg-white md:w-[292px] w-full mb-6"
          />
          <CardInformation
            title="Tanggal Event"
            icon="/icons/calendar.svg"
            description={`${moment(data?.tglEventMulai).format(
              'DD MMMM YYYY',
            )}`}
            image="/icons/frame.svg"
            className="bg-white md:w-[292px] w-full mb-6"
          />
          <CardInformation
            title="Lokasi Event"
            icon="/icons/calendar.svg"
            description={data?.City.nama}
            image="/icons/frame.svg"
            className="bg-white md:w-[292px] w-full mb-6"
          />
        </div>
        {/* Categories */}
        <div className="flex flex-col text-center py-8 px-5 md:py-20 md:px-[100px] items-center">
          <Text
            size="body1"
            className="md:text-lg md:mb-6 mb-7 font-bold font-inter text-[#0079C4]"
          >
            CATEGORIES
          </Text>
          <Text
            size="h4"
            className="md:text-[44px] md:mb-12 mb-8 font-semibold text-[#444458] font-rubik leading-8"
          >
            Explore Different Running Experiences
          </Text>
          <Text
            size="body2"
            className="md:text-center md:text-base md:mb-12 font-normal text-[#777682] font-rubik md:w-[840px] w-[400px]"
          >
            Discover the various running categories offered by Padang HM, We Run
            the City, catering to runners of all levels and interests.
          </Text>
        </div>
        <div className="flex flex-col items-center md:flex-row md:gap-x-6 md:mb-20 md:justify-center">
          {eventsCategory?.map((e) => (
            <CardCategories
              key={e.id}
              image={e.image.path}
              title={e.title}
              description={e.description}
              subText="Route
        Details
        on
        Map"
              className=" w-[396px]"
            />
          ))}
        </div>
        {/* PRICE LIST */}
        <div className="flex flex-col text-center py-20 md:px-[100px] items-center">
          <Text
            size="body1"
            className="md:text-lg md:mb-6 mb-7 font-bold font-inter text-[#0079C4]"
          >
            PRICE LIST
          </Text>
          <Text
            size="h4"
            className="md:text-[44px] md:mb-12 mb-8 font-semibold text-[#444458] font-rubik md:w-full w-[350px] leading-8"
          >
            Padang Night Run Price List{' '}
          </Text>
          <Text className="md:text-center md:text-base md:mb-12 mb-8 font-normal text-[#777682] font-rubik md:w-[840px]  w-[350px]leading-7">
            Explore the registration fees for different categories of We Run the
            City events. Whether youre a participant or a spectator, find the
            pricing information you need below:
          </Text>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-6 md:justify-between md:14">
          <CardPrice
            title="Super Early Bird"
            date="Expires 31 January 2023"
            items={data?.categoryDiscount?.['Super Early Bird']}
            className="md:w-[396px] h-[398px] shadow-sm w-[350px]"
          />
        </div>
      </div>

      <div className="pt-16 pb-20">
        <ContactUs />
      </div>
    </div>
  )
}

export default PadangRunTheCity
