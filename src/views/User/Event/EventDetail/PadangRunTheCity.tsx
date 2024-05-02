import CustomBreadcrumb from 'components/Breadcrumb'
import { LinkButton } from 'components/Buttons'
import CardCategories from 'components/Cards/CardCategories'
import CardInformation from 'components/Cards/CardInformation'
import CardPrice from 'components/Cards/CardPrice'
import ContactUs from 'components/ContactUs'
import SegmentedComponent from 'components/Segmented'
import Text from 'components/Text'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const itemsData = [
  { id: '1', distanceLabel: 'Distance 5K', price: 'Rp. 100.000' },
  { id: '2', distanceLabel: 'Distance 10K', price: 'Rp. 150.000' },
  { id: '3', distanceLabel: 'Distance 21K', price: 'Rp. 250.000' },
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

function PadangRunTheCity() {
  const router = useRouter()
  const eventPathname = router.query?.title as string

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
      {/* img */}
      <div className="flex md:gap-x-6 gap-2 items-center justify-center mb-6">
        <Image
          src="/images/padang.png"
          alt=""
          width="261"
          height="170"
          className="rounded-lg md:w-[924px] md:h-[608px]"
        />
        <span className="flex flex-col md:gap-y-6 gap-y-2">
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
        </span>
      </div>

      {/* description */}
      <div className="md:mt-24 md:mb-12 mb-8 ">
        <Text className="text-[#444458] mb-6 md:text-[44px] text-[28px] font-semibold font-rubik">
          Description
        </Text>
        <Text className="text-base font-inter text-[#444458] leading-6 mb-12">
          Join us for an electrifying adventure as we light up the streets of
          Padang in the Padang Midnight Glow Run. Under the shimmering glow of
          the city lights and the twinkling stars above, runners will embark on
          a nocturnal journey through the heart of Padang. <br />
          <br /> This unique event offers participants the opportunity to
          experience the city in a whole new light, as they navigate illuminated
          pathways and iconic landmarks. Whether youre a seasoned night runner
          or new to the scene, the Padang Midnight Glow Run promises an
          unforgettable experience for all. With music filling the air and the
          energy of fellow runners propelling you forward, embrace the magic of
          the night as you dash through the city streets. Bring your glow
          sticks, don your neon attire, and get ready to shine bright as you
          run, dance, and celebrate under the stars. <br />
          <br /> Dont miss your chance to be a part of this luminous spectacle
          and make memories that will last a lifetime. Register now for the
          Padang Midnight Glow Run and illuminate the night with your every
          stride!
        </Text>
      </div>
      {/* Card information */}
      <div className="md:flex-row md:gap-x-6 md:mb-20 md:justify-between flex flex-col items-center w-full">
        {[1, 2, 3, 4].map((idx) => (
          <CardInformation
            key={idx}
            title="Registration Period"
            icon="/icons/calendar.svg"
            description="1 September 2023 - 31 October 2023"
            image="/icons/frame.svg"
            className="bg-white md:w-[292px] w-full mb-6"
          />
        ))}
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
        {[1, 2, 3].map((idx) => (
          <CardCategories
            key={idx}
            image="/images/categories.png"
            title="Full Marathon "
            description="Ready for the ultimate challenge?  Run the full 42 km for an epic
        experience."
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
        {[1, 2, 3].map((idx) => (
          <CardPrice
            key={idx}
            title="Super Early Bird"
            date="Expires 31 January 2023"
            items={itemsData}
            className="md:w-[396px] h-[398px] shadow-sm w-[350px]"
          />
        ))}
      </div>
      <div className="flex mt-16 mb-20 justify-center py-6">
        <LinkButton
          href="/"
          className="h-14 px-14 text-lg font-medium bg-primary text-white"
          style={{
            boxShadow: '0px 4px 24px 0px rgba(5, 110, 206, 0.2)',
          }}
        >
          Register Now
        </LinkButton>
      </div>

      <div className="pt-16 pb-20">
        <ContactUs />
      </div>
    </div>
  )
}

export default PadangRunTheCity
