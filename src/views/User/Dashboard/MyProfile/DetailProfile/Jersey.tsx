import React from 'react'
import Text from 'components/Text'

function Jersey() {
  return (
    <div className="flex flex-row w-full px-10">
      <div className="md:w-[50%] flex flex-row">
        <div className="md:w-[50% w-full">
          <Text size="subtitle">Ukuran Jersey</Text>
        </div>
        <div className="md:w-[50% w-full">
          <Text size="h6">XL</Text>
        </div>
      </div>
    </div>
  )
}
export default Jersey
