import { Input, InputProps } from 'antd'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function SimpleInput(props: InputProps) {
  const { value, onChange, placeholder, className, ...restProps } = props
  return (
    <Input
      {...restProps}
      className={twMerge('font-inter, text-[#9DA2AD], p-4', className)}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
