import React from 'react'
import WrtcTable from 'components/Table/WrtcTable'
import { Tabs, TabsProps } from 'antd'
import Text from 'components/Text'
import { columnSambut, dataSambut } from './data/sambutDataColumn'
import { columnPartner, dataPartner } from './data/partnersDataColumn'
import { columnKunjung, dataKunjung } from './data/kunjungDataColumn'
import { columnsAturan, dataAturan } from './data/aturanDataColumn'
import FormManageEvents from './FormManage/FormManageEvents'
import ActionSambutan from './Partials/ActionSambutan'
import ActionPartner from './Partials/ActionPartner'
import ActionKunjungan from './Partials/ActionKunjungan'
import ActionAturan from './Partials/ActionAturan'

const onChange = (key: string) => {
  // console.log(key)
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Section Event',
    children: (
      <div>
        <FormManageEvents />
      </div>
    ),
  },
  {
    key: '2',
    label: 'Section Sambutan',
    children: (
      <>
        <ActionSambutan />
        <WrtcTable
          columns={columnSambut}
          data={dataSambut}
          // initial
          pagination={{
            current: 1,
            pageSize: 10,
            total: 10,
            showSizeChanger: true,
          }}
          className="-mt-4"
        />
      </>
    ),
  },
  {
    key: '3',
    label: 'Section Partner',
    children: (
      <>
        <ActionPartner />
        <WrtcTable
          columns={columnPartner}
          data={dataPartner}
          // initial
          pagination={{
            current: 1,
            pageSize: 10,
            total: 10,
            showSizeChanger: true,
          }}
          className="-mt-4"
        />
      </>
    ),
  },
  {
    key: '4',
    label: 'Daftar Kunjungan',
    children: (
      <>
        <ActionKunjungan />
        <WrtcTable
          columns={columnKunjung}
          data={dataKunjung}
          // initial
          pagination={{
            current: 1,
            pageSize: 10,
            total: 10,
            showSizeChanger: true,
          }}
          className="-mt-4"
        />
      </>
    ),
  },
  {
    key: '5',
    label: 'Daftar Aturan',
    children: (
      <>
        <ActionAturan />
        <WrtcTable
          columns={columnsAturan}
          data={dataAturan}
          // initial
          pagination={{
            current: 1,
            pageSize: 10,
            total: 10,
            showSizeChanger: true,
          }}
          className="-mt-4"
        />
      </>
    ),
  },
]
function ManagerWRTC() {
  return (
    <div className="bg-transparent flex flex-col gap-3">
      <Text size="h4" className="font-bold">
        Manage We Run The City
      </Text>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        className="my-5"
      />
    </div>
  )
}

export default ManagerWRTC
