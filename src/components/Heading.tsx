import React from 'react'
import Text from './Text'

interface HeadingProps {
  sectionName: string
  headingTitle: string
  headingDescription: string | React.ReactNode
}

function Heading(props: HeadingProps) {
  const { sectionName, headingTitle, headingDescription } = props

  return (
    <div className="text-center">
      <Text className="text-primary font-bold md:text-lg">
        {sectionName || 'Section name'}
      </Text>
      <Text size="h1" className="md:px-52 font-bold text-[#444458] my-5">
        {headingTitle || 'Heading Title'}
      </Text>
      <Text className="md:px-36 text-[#777682] text-base">
        {headingDescription || ''}
      </Text>
    </div>
  )
}

export default Heading
