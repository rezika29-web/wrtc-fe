import React from 'react'
import WrtcTable from 'components/Table/WrtcTable'
import Text from 'components/Text'
import { columns, data } from './data/PesertaDataColumn'

function ManagerPeserta() {
  return (
    <div className="bg-transparent flex flex-col gap-3">
      <Text size="h4" className="font-bold">
        Manage Peserta
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

export default ManagerPeserta
