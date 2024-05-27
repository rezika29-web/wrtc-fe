import React, { useState } from 'react'
import { Pagination, PaginationProps, Select } from 'antd'
import { twMerge } from 'tailwind-merge'
import Text from 'components/Text'
import styles from './Paginati.module.scss'

function PaginationButton(
  props: PaginationProps & { customSizeCharger?: boolean },
) {
  const {
    className,
    customSizeCharger = false,
    pageSize,
    total,
    ...restprops
  } = props
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  return (
    <div
      className={
        customSizeCharger && 'md:flex items-center justify-between gap-y-6'
      }
    >
      {customSizeCharger && (
        <div className="flex items-center gap-x-5">
          <Select
            value="5"
            className="h-14 w-48"
            placeholder="Pilih Entri"
            options={[{ label: '5 Entri', value: '5' }]}
          />
          <Text size="body2" className="font-medium text-neutral80">
            Menampilkan 1 hingga 10 dari 100 entri
          </Text>
        </div>
      )}

      <div className="md:py-0 py-3 md:text-end text-center">
        <Pagination
          {...restprops}
          className={twMerge(
            styles.PaginationButton,
            ' font-inter ',
            className,
          )}
          current={currentPage}
          total={total}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  )
}

export default PaginationButton
