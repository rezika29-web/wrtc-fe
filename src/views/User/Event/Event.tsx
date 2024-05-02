import PrimaryButton from 'components/Buttons'
import Card from 'components/Cards'
import ContactUs from 'components/ContactUs'
import { Search } from 'components/Forms/Input/Search'
import PaginationButton from 'components/Pagination/PaginationButton'
import Text from 'components/Text'
import React from 'react'

function Event() {
  // button search
  const handleSearch = (value) => {
    console.log('Search result:', value)
  }
  return (
    <div className="md:px-[100px] md:py-20 px-5 py-8">
      {/* title event */}
      <div className="md:w-[840px] w-[320px] mx-auto text-center">
        <Text
          size="body1"
          className="md:text-lg md:mb-9 font-bold font-inter text-[#0079C4] mb-7"
        >
          All EVENT{' '}
        </Text>
        <Text
          size="body1"
          className="md:text-[44px] md:leading-[64px] text-[28px] leading-8 font-rubik font-semibold text-[#444458]"
        >
          Experience the thrill of running with Padang HM at our event.
        </Text>
        <Text
          size="body1"
          className="md:text-base md:my-12 text-sm font-normal my-8 text-[#777682] font-inter"
        >
          Are you ready to lace up your shoes and join the excitement? At Padang
          HM, We Run the City, we invite you to be a part of our thrilling
          running events that showcase the best of Padangs landscapes and
          community spirit.
        </Text>
      </div>

      {/* card event */}
      <div>
        <span className="flex md:gap-x-6 gap-3">
          <Search
            onSearch={handleSearch}
            placeholder="Search Event"
            className="py-3 px-4 rounded-lg h-14 text-base"
          />
          <PrimaryButton className="md:w-[187px] text-lg h-14 md:py-2 md:px-5 rounded-lg">
            Search
          </PrimaryButton>
        </span>
      </div>
      <div>
        <div className="md:flex md:flex-row md:justify-between md:my-12 md:gap-4 my-8 flex flex-col items-center p-0">
          {[
            { id: 1, title: 'Padang Half Marathon' },
            { id: 2, title: 'Padang Half Marathon' },
            { id: 3, title: 'Padang Half Marathon' },
            { id: 4, title: 'Padang Half Marathon' },
          ].map((e) => (
            <Card
              href={`/event/event-detail/?title=${e.title}&id=${e.id}`}
              key={e.id}
              className="mt-4 bg-white shadow-sm w-full"
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
        <div className="flex justify-center md:mb-20 mb-8">
          <PaginationButton />
        </div>
      </div>
      <div className="md:pt-20 py-8">
        <ContactUs />
      </div>
    </div>
  )
}
export default Event
