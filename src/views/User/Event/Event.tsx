import PrimaryButton from 'components/Buttons'
import CardEventRun from 'components/Cards'
import ContactUs from 'components/ContactUs'
import { Search } from 'components/Forms/Input/Search'
import PaginationButton from 'components/Pagination/PaginationButton'
import Text from 'components/Text'
import useEvents from 'data/useEvents'
import React from 'react'

function Event() {
  const { data } = useEvents({
    filtered: [{ id: 'nama', value: '' }],
  })

  // button search
  const handleSearch = (value) => {
    console.log('Search result:', value)
  }

  return (
    <div className="container md:py-20 py-8">
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
          {data?.map((e) => (
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
        <div className="flex justify-center md:mb-20 mb-8">
          <PaginationButton total={data?.lenght} />
        </div>
      </div>
      <div className="md:pt-20 py-8">
        <ContactUs />
      </div>
    </div>
  )
}
export default Event
