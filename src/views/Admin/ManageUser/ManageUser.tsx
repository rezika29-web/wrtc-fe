import WrtcTable from 'components/Table/WrtcTable'
import React from 'react'
import Text from 'components/Text'
import Action from 'views/Admin/ManageUser/Partials/Action'
import { columns, data } from './data/UserDataColumn'

function ManagerUser() {
  return (
    <div className="bg-transparent flex flex-col gap-3">
      <Text size="h4" className="font-bold">
        Manage Users
      </Text>
      <Action />
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

export default ManagerUser
