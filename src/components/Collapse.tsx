import { Collapse } from 'antd'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import ArrowDownIcon from './Icons/ArrowDownIcon'
import Text from './Text'

function CustomCollapse({
  children,
  label,
  className,
}: {
  children: ReactNode
  label: string
  className?: string
}) {
  return (
    <Collapse
      className={twMerge('bg-[#EEF7FC] border-none', className)}
      defaultActiveKey={1}
      size="large"
      ghost
      expandIcon={({ isActive }) => (
        <ArrowDownIcon
          className={`text-bluemain ${isActive ? 'rotate-0' : 'rotate-180'}`}
        />
      )}
      expandIconPosition="end"
      items={[
        {
          key: '1',
          label: (
            <Text className="text-neutral80 text-lg font-bold">{label}</Text>
          ),
          headerClass: 'bg-[#EEF7FC] rounded-t-lg px-12 py-6',
          children: <div className="px-6 py-12">{children}</div>,
          className: 'bg-white',
        },
      ]}
    />
  )
}

export default CustomCollapse
