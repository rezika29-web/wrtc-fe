import { LinkButton } from 'components/Buttons'
import { Search } from 'components/Forms/Input/Search'
import useFaqs from 'data/useFaqs'
import React, { useEffect, useState } from 'react'
import { Select } from 'antd'

function Action({ selectedId }) {
  const qFaq = useFaqs()
  const fData = qFaq.data?.data || []
  const [previousId, setPreviousId] = useState(selectedId)

  useEffect(() => {
    if (selectedId !== previousId) {
      setPreviousId(selectedId)
    }
  }, [selectedId, previousId])

  const click = () => {
    console.log('FAQ Data:', fData)
    console.log('Selected ID:', selectedId)
    console.log('Previous ID:', previousId)
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2 w-1/4">
        <Search
          onSearch={() => {}}
          placeholder="Search by username"
          className="h-10"
        />
      </div>
      <div className="flex items-center gap-4">
        <LinkButton
          classType="primary"
          className="h-10 px-8"
          onClick={click}
          href={previousId ? `/admin/manage-qna/add/?id=${previousId}` : '#'}
        >
          Create new
        </LinkButton>
      </div>
    </div>
  )
}

export default Action
