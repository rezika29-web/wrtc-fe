import React, { useState } from 'react'
import PrimaryButton from 'components/Buttons'
import ContactUs from 'components/ContactUs'
import GeneralQuestions from 'views/User/FAQ/Partials/GeneralQuestions'
import Text from 'components/Text'
import Image from 'next/image'
import { Search } from 'components/Forms/Input/Search'
import useFaqs from 'data/useFaqs'

function FAQ() {
  const [showAllQuestions, setShowAllQuestions] = useState(false)

  const qFaq = useFaqs()
  const faqData = qFaq?.data?.data

  const initialQuestions =
    faqData?.flatMap((faq) => faq.QnAs)?.slice(0, 3) || []
  const allQuestions = faqData?.flatMap((faq) => faq.QnAs) || []

  const handleSearch = (value) => {
    console.log('Search result:', value)
  }
  return (
    <div className="md:px-24 md:py-20 px-5 py-8 ">
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
            Temukan jawaban cepat untuk pertanyaan-pertanyaan umum dan
            bergabunglah bersama kami untuk pengalaman lari yang tak terlupakan
            di Padang!
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

      {/* Q&A List */}
      <div className="mb-20">
        <Text
          size="h4"
          className="md:mb-12 mb-8 font-semibold"
          style={{ color: '#444458' }}
        >
          Pertanyaan Umum
        </Text>
        <div className="w-full">
          {showAllQuestions
            ? allQuestions?.map((qna) => (
                <GeneralQuestions
                  key={qna.id}
                  panelKey={qna.id}
                  question={qna.question}
                  answer={qna.answer}
                />
              ))
            : initialQuestions.map((qna) => (
                <GeneralQuestions
                  key={qna.id}
                  panelKey={qna.id}
                  question={qna.question}
                  answer={qna.answer}
                />
              ))}
        </div>

        <div className="flex justify-center">
          {!showAllQuestions && (
            <PrimaryButton
              onClick={() => setShowAllQuestions(true)}
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
