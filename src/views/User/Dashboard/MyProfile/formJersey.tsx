import React from 'react'
import { Card, Table, Row, Form } from 'antd'
import Text from 'components/Text'
import SimpleInput from 'components/Forms/Input/Inputs'

const { Meta } = Card

const dataSource = [
  {
    key: '1',
    name: 'Tinggi (cm)',
    xs: 66,
    s: 68,
    m: 70,
    l: 72,
    xl: 74,
    _2xl: 76,
    _3xl: 78,
    _4xl: 80,
  },
  {
    key: '2',
    name: 'Lebar (cm)',
    xs: 48,
    s: 50,
    m: 52,
    l: 54,
    xl: 56,
    _2xl: 58,
    _3xl: 60,
    _4xl: 62,
  },
]

const columns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'XS',
    dataIndex: 'xs',
    key: 'xs',
  },
  {
    title: 'S',
    dataIndex: 's',
    key: 'address',
  },
  {
    title: 'M',
    dataIndex: 'm',
    key: 'address',
  },
  {
    title: 'L',
    dataIndex: 'l',
    key: 'l',
  },
  {
    title: 'XL',
    dataIndex: 'xl',
    key: 'xl',
  },
  {
    title: '2XL',
    dataIndex: '_2xl',
    key: '2xl',
  },
  {
    title: '3XL',
    dataIndex: '_3xl',
    key: '3xl',
  },
  {
    title: '4XL',
    dataIndex: '_4xl',
    key: '4xl',
  },
]
const customizeRequiredMark = (
  label: React.ReactNode,
  { required }: { required: boolean },
) => (
  <>
    {label}&nbsp;
    {required && <span style={{ color: 'red' }}>*</span>}
  </>
)
const formJersey = () => {
  const [form] = Form.useForm()
  return (
    <>
      <div className="flex justify-center mb-10">
        <Card style={{ width: 600 }}>
          <div
            style={{
              background: 'blue',
              color: 'white',
              padding: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
            className="rounded-t-xl"
          >
            <Meta
              avatar={
                <img
                  src="/icons/Ellipse-199.png"
                  alt="avatar"
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    justifySelf: 'center',
                  }}
                />
              }
            />
            <Text size="body1">Size Cart</Text>
          </div>
          <div style={{ background: 'white', padding: 10 }}>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          </div>
        </Card>
      </div>
      <Form form={form} layout="vertical" requiredMark={customizeRequiredMark}>
        <Form.Item
          label="Ukuran Jersey"
          name="ukuran"
          rules={[{ required: true }]}
          colon={false}
          labelAlign="right"
        >
          <SimpleInput placeholder="Masukkan ukuran jersey" />
        </Form.Item>
      </Form>
    </>
  )
}
export default formJersey
