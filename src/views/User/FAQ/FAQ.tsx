import PrimaryButton from 'components/Buttons'
import ContactUs from 'components/ContactUs'
import SimpleInput from 'components/Forms/Input/Inputs'
import GeneralQuestions from 'views/User/FAQ/Partials/GeneralQuestions'
import Text from 'components/Text'
import Image from 'next/image'
import { Search } from 'components/Forms/Input/Search'
import { useState } from 'react'

interface TableItem {
  question: String
  answer: String
  panelKey: String
}

const dummyData: TableItem[] = [
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

function FAQ() {
  // button search
  const handleSearch = (value) => {
    console.log('Search result:', value)
  }

  // button see more
  const [showItems, setShowItems] = useState(8)
  const displayedItems = dummyData.slice(0, showItems)

  return (
    <div className="md:px-24 md:py-20 px-5 py-8 ">
      {/* Frequently Asked Questions */}
      <div className="md:flex md:gap-x-12 md:justify-between md:mb-20 mb-8">
        <div className="relative w-[500px]">
          <Image
            src="/images/wrapper-left.png"
            alt="img-faq"
            fill
            className="w-[500px] object-contain md:block hidden"
          />
        </div>
        <div className="md:w-[692px] w-[350px]">
          <Text
            size="body1"
            className="md:text-lg md:py-3 md:mb-6 mb-4 px-8 py-2 font-bold"
            style={{ color: '#0079C4' }}
          >
            FAQ
          </Text>
          <Text
            size="h4"
            className="md:text-[44px] md:mb-12 font-semibold mb-8"
            style={{ color: '#444458' }}
          >
            Frequently Asked Questions
          </Text>
          <Text className="md:mb-12 md:text-base text-sm text-[#777682]  mb-8">
            Get all the essential information you need about Padang HM events,
            from registration to safety measures and more. Whether youre a
            seasoned runner or new to the scene, find quick answers to common
            questions and join us for an unforgettable running experience in
            Padang!
          </Text>
          <span className="flex gap-3 md:gap-6">
            <Search
              onSearch={handleSearch}
              placeholder="Search your questions"
              className="px-4 rounded-md"
            />
            <PrimaryButton className="h-14 w-44 font-medium text-lg rounded-lg">
              Search
            </PrimaryButton>
          </span>
        </div>
      </div>

      {/*  Q&A List */}
      <div className="mb-20">
        <Text
          size="h4"
          className="md:mb-12 mb-8 font-semibold "
          style={{ color: '#444458' }}
        >
          General Questions
        </Text>
        <div className="w-full">
          {displayedItems.map((item) => (
            <GeneralQuestions
              key={item.question}
              panelKey={item.panelKey}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
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

      {/* Contact Us */}
      <ContactUs />
    </div>
  )
}

export default FAQ
