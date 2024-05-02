import React from 'react'
import SimpleInput from 'components/Forms/Input/Inputs'
import { Form, Radio, Input } from 'antd'

const { TextArea } = Input

const customizeRequiredMark = (
  label: React.ReactNode,
  { required }: { required: boolean },
) => (
  <>
    {label}&nbsp;
    {required && <span style={{ color: 'red' }}>*</span>}
  </>
)

function FormKesehatan() {
  const [form] = Form.useForm()

  return (
    <Form form={form} layout="vertical" requiredMark={customizeRequiredMark}>
      <Form.Item
        label="Kontak Darurat"
        name="kontak"
        rules={[{ required: true }]}
        colon={false}
        labelAlign="right"
      >
        <SimpleInput placeholder="Masukkan nomor kontak darurat" />
      </Form.Item>
      <Form.Item
        label="Atas Nama"
        name="kontak_name"
        rules={[{ required: true }]}
        colon={false}
        labelAlign="right"
      >
        <SimpleInput placeholder="Masukkan nama orang sebagai kontak darurat" />
      </Form.Item>
      <Form.Item
        label="Hubungan dengan Kontak Darurat"
        name="kontak_hubungan"
        rules={[{ required: true }]}
        colon={false}
        labelAlign="right"
      >
        <SimpleInput placeholder="Masukkan hubungan dengan kontak darurat" />
      </Form.Item>
      <Form.Item label="Golongan Darah" name="gol" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value="AB" style={{ marginRight: '30px' }}>
            AB
          </Radio>
          <Radio value="A" style={{ marginRight: '30px' }}>
            A
          </Radio>
          <Radio value="B" style={{ marginRight: '30px' }}>
            B
          </Radio>
          <Radio value="O" style={{ marginRight: '30px' }}>
            O
          </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Daftar Riwayat Penyakit"
        name="alamat"
        rules={[{ required: true }]}
      >
        <TextArea placeholder="Masukkan riwayat penyakit" />
      </Form.Item>
    </Form>
  )
}
export default FormKesehatan
