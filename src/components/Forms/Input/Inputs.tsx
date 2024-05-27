import { InboxOutlined, UploadOutlined } from '@ant-design/icons'
import {
  Input,
  InputNumber,
  InputNumberProps,
  InputProps,
  Select,
  SelectProps,
  Upload,
  UploadProps,
  message,
} from 'antd'
import PrimaryButton from 'components/Buttons'
import Text from 'components/Text'
import Image from 'next/image'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import styles from './InputNumber.module.scss'

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

interface InputSelectProps {
  options?: { value: string; label: string }[]
}

export function InputSelect(props: SelectProps & InputSelectProps) {
  const { className, options = [], placeholder, disabled } = props
  return (
    <div>
      <Select
        className={twMerge('font-inter', className)}
        showSearch
        placeholder={placeholder}
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '')
            .toLowerCase()
            .localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={options}
        disabled={disabled}
      />
    </div>
  )
}

export function UploadComponents(props: UploadProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { onChange, ...restProps } = props

  const handleChange = (info: any) => {
    if (onChange) {
      onChange(info)
    }
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
      if (info.file.response) {
        setSelectedImage(info.file.response.url)
      }
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }

  return (
    <div>
      {selectedImage && (
        <div style={{ marginTop: '10px' }}>
          <Image
            src={selectedImage}
            alt="Uploaded"
            className="max-w-full max-h-300"
          />
        </div>
      )}
      <Upload
        {...restProps}
        onChange={handleChange}
        className="text-center flex items-center"
      >
        <PrimaryButton icon={<UploadOutlined />}>Click to Upload</PrimaryButton>
      </Upload>
    </div>
  )
}

export function InputNumbers(props: InputNumberProps) {
  const {
    className,
    onChange,
    addonAfter,
    min,
    max,
    defaultValue,
    ...restProps
  } = props

  return (
    <InputNumber
      addonAfter={addonAfter}
      min={min !== undefined ? min : 1}
      max={max !== undefined ? max : 10}
      defaultValue={defaultValue !== undefined ? defaultValue : 3}
      onChange={onChange}
      className={twMerge(styles.InputNumber, ' font-inter w-full ', className)}
      {...restProps}
    />
  )
}

export function Uploads(props: UploadProps) {
  const { Dragger } = Upload

  const {
    name = 'file',
    multiple = true,
    action = 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange,
    onDrop,
    className,
  } = props

  return (
    <Dragger
      name={name}
      multiple={multiple}
      action={action}
      onChange={onChange}
      onDrop={onDrop}
      className={twMerge(className)}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </Dragger>
  )
}
