import React from 'react'
import { Breadcrumb } from 'antd'
import { twMerge } from 'tailwind-merge'

interface BreadcrumbItem {
  key: string
  title: string
  href?: string
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function CustomBreadcrumb(props: CustomBreadcrumbProps) {
  const { items, className, ...restProps } = props
  return (
    <Breadcrumb
      separator="/"
      {...restProps}
      className={twMerge(
        'text-[#777682] text-lg text-inter font-medium',
        className,
      )}
    >
      {items.map((item, index) => (
        <Breadcrumb.Item
          key={item.key}
          className="text-lg font-medium px-3 py-2"
        >
          {index === items.length - 1 ? (
            <a className="text-[#0079C4]" href={item.href}>
              {item.title}
            </a>
          ) : (
            <a className="text-[#777682]" href={item.href}>
              {item.title}
            </a>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}
