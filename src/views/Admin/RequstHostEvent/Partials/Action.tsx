import { LinkButton } from 'components/Buttons'
import { Search } from 'components/Forms/Input/Search'
import React from 'react'

function Action() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2 w-1/4">
        <Search
          onSearch={() => {}}
          placeholder="Search by username"
          className="h-10"
        />
      </div>
    </div>
  )
}

export default Action
