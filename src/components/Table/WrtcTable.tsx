import React from 'react'
import { Table as AntTable, TablePaginationConfig, TableProps } from 'antd'
import Text from 'components/Text'
import Style from './WrtcTableStyle.module.scss'
import Action from '../../views/Admin/ManageUser/Partials/Action'

interface WrtcTableProps extends TableProps<any> {
  data?: any[]
  columns?: any[]
  loading?: boolean
  pagination?: TablePaginationConfig
}

function WrtcTable(props: WrtcTableProps) {
  const { data, columns, loading, pagination, ...restProps } = props

  return (
    <div className={Style.table}>
      <AntTable
        className={Style.table}
        rowClassName={Style.row}
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={pagination}
        {...restProps}
      />
    </div>
  )
}

export default WrtcTable
