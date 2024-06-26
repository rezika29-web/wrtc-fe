import React from 'react'
import WrtcTable from 'components/Table/WrtcTable'
import Text from 'components/Text'
import Action from './Partials/Action'
import { columns, data } from './data/categoryDataColumn'

function ManageCategory() {
  return (
    <div className="bg-transparent flex flex-col gap-3">
      <Text size="h4" className="font-bold">
        Manage Category
      </Text>
      {/* <Action /> */}
      <WrtcTable
        columns={columns}
        data={data}
        // initial
        pagination={{
          current: 1,
          pageSize: 10,
          total: 10,
          showSizeChanger: true,
        }}
      />
    </div>
  )
}

export default ManageCategory
