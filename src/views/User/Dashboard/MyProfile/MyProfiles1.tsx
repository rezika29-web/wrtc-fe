import Text from 'components/Text'
import React from 'react'
import SegmentedComponent from 'components/Segmented'
import CardDashboard from 'components/Cards/CardDashboard'
import ContactUs from 'components/ContactUs'

function MyProfile() {
  return (
    <div className="md:px-[100px] md:py-20">
      <div className="md:w-[840px] md:pb-24 w-[320px] mx-auto text-center flex justify-center flex-col items-center">
        <Text
          size="body1"
          className="md:text-lg md:w-[253px] md:mb-6 md:py-3 font-bold font-inter text-[#0079C4] bg-[#FFFFFF] rounded-full"
        >
          SELAMAT DATANG 👋
        </Text>
        <Text
          size="body1"
          className="md:text-[38px] md:leading-[52px] mb-12 font-rubik font-extrabold text-[#444458]"
        >
          Alexander Supatramp
        </Text>
        <SegmentedComponent
          options={[
            { label: 'Dashboard', link: '/' },
            { label: 'Padang Explorer', link: '/' },
            { label: 'Gallery', link: '/' },
            { label: 'Riwayat Pembayaran', link: '/dashboard/paymenthistory' },
          ]}
          className="px-12 py-2"
        />
      </div>
      <div className="mb-10">
        {[1, 2, 3, 4].map((idx) => (
          <CardDashboard
            key={idx}
            image="/images/dashboard-wrapper.png"
            title="My Event"
            description=" We Run the City, we are passionate about promoting a healthy and
            active lifestyle through running. Founded with the goal of fostering
            a strong sense of community and camaraderie among runners in Padang,
            we organize exhilarating running events that bring people together
            from all walks of life. Join us as we lace up our shoes, hit the
            pavement, and embark on a journey of fitness, friendship, and fun.
            Together, let's continue to run the city and inspire others to
            embrace the joy of running."
            namePage="Event Saya"
          />
        ))}
      </div>
      <ContactUs />
    </div>
  )
}

export default MyProfile
