import { Alert, Card, DatePicker, DatePickerProps, Form, Switch } from 'antd'
import SimpleInput, {
  InputNumbers,
  InputSelect,
  UploadComponents,
} from 'components/Forms/Input/Inputs'
import Text from 'components/Text'
import TinyMCE from 'components/TinyMCE/TinyMCE'
import React, { useState } from 'react'

function FormManageEvent() {
  const [showInputs, setShowInputs] = useState(false)
  const [showSelect, setShowSelect] = useState(false)

  const onChangeSwitch = (checked) => {
    setShowInputs(checked)
  }
  const onChangeSelect = (checked) => {
    setShowSelect(checked)
  }
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    // console.log(date, dateString)
  }
  return (
    <div className="w-full">
      <Form name="manage-event" layout="vertical" className="mt-5">
        <div className="flex w-full justify-between items-center mb-5">
          <Text size="h5" className="font-medium">
            Detail Event
          </Text>
        </div>
        <Card className="w-full p-5 mb-5">
          <Text size="h6" className="font-medium">
            Form
          </Text>
          <div className="flex gap-5">
            <div className="my-5 w-full">
              <Form.Item
                label="Company"
                className="font-inter text-sm font-medium"
              >
                <InputSelect
                  disabled
                  options={[
                    {
                      value: '1',
                      label: 'Not Identified',
                    },
                    {
                      value: '2',
                      label: 'Closed',
                    },
                    {
                      value: '3',
                      label: 'Communicated',
                    },
                  ]}
                  placeholder="Pilih Company"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="ID Alias"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  disabled
                  placeholder="Masukkan ID Alias"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Kode"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  disabled
                  placeholder="Masukkan Kode"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Tanggal Buka"
                className="font-inter text-sm font-medium"
              >
                <DatePicker
                  disabled
                  onChange={onChange}
                  className="h-14 font-normal w-full"
                />
              </Form.Item>
              <Form.Item
                label="Tanggal Mulai Event"
                className="font-inter text-sm font-medium"
              >
                <DatePicker
                  disabled
                  onChange={onChange}
                  className="h-14 font-normal w-full"
                />
              </Form.Item>
              <Form.Item
                label="MasterEventLabelId"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  disabled
                  placeholder="Masukkan MasterEventLabelId"
                  className="h-14 font-normal"
                />
              </Form.Item>
            </div>
            <div className="mt-5 w-full">
              <Form.Item
                label="Nama"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  disabled
                  placeholder="Masukkan Nama"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Referral"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  disabled
                  placeholder="Masukkan Referral"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Lokasi"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  disabled
                  placeholder="Masukkan Lokasi"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Tanggal Tutup"
                className="font-inter text-sm font-medium"
              >
                <DatePicker
                  disabled
                  onChange={onChange}
                  className="h-14 font-normal w-full"
                />
              </Form.Item>
              <Form.Item
                label="Tanggal Selesai Event"
                className="font-inter text-sm font-medium"
              >
                <DatePicker
                  disabled
                  onChange={onChange}
                  className="h-14 font-normal w-full"
                />
              </Form.Item>
            </div>
          </div>
          <div className="mb-7">
            <div className="w-full flex gap-5 mb-5">
              <Text className="font-inter text-sm font-bold">
                Batasi submit activity
              </Text>
              <Switch defaultChecked={showInputs} onChange={onChangeSwitch} />
            </div>
            {showInputs && (
              <div className="flex gap-5 w-full">
                <Form.Item
                  label="Jumlah activity maksimal"
                  className="font-inter text-sm font-medium w-full"
                >
                  <SimpleInput
                    disabled
                    placeholder="Masukkan Jumlah activity maksimal"
                    className="h-14 font-normal"
                  />
                </Form.Item>
                <Form.Item
                  label="Periode reset (hari)"
                  className="font-inter text-sm font-medium w-full"
                >
                  <InputNumbers addonAfter={<Text>Hari</Text>} disabled />
                </Form.Item>
                <Form.Item
                  label="Perhitungan tanggal awal reset"
                  className="font-inter text-sm font-medium w-full"
                >
                  <DatePicker
                    disabled
                    onChange={onChange}
                    className="h-14 font-normal w-full mb-3"
                  />
                  <Text className="font-normal text-[#ff0000] italic">
                    *Sistem memerlukan tanggal awal untuk mereset submit data
                  </Text>
                </Form.Item>
              </div>
            )}
          </div>
          <div>
            <div className="w-full flex gap-5 mb-5">
              <Text className="font-inter text-sm font-bold">
                Aktifkan Opsi Pembayaran
              </Text>

              <Switch defaultChecked={showSelect} onChange={onChangeSelect} />
            </div>
            <div className="relative mb-5">
              <Alert
                message="Mengaktifkan opsi pembayaran akan mengfilter daftar channel pembayaran yang dapat digunakan oleh pengguna. Biarkan disable jika ingin menampilkan semua opsi payment channel"
                type="info"
                showIcon
                className="relative py-4 pl-5"
              />
              <div className="bg-blue-500 rounded-l-2xl absolute left-0 top-0 p-1 h-full" />
            </div>
            {showSelect && (
              <Form.Item
                label="Pilih Channel Pembayaran"
                className="font-inter text-sm font-medium"
              >
                <InputSelect
                  disabled
                  options={[
                    {
                      value: '1',
                      label: 'Not Identified',
                    },
                  ]}
                  placeholder="Pilih Channel Pembayaran"
                  className="h-14 font-normal"
                />
              </Form.Item>
            )}
          </div>
          <div>
            <TinyMCE />
          </div>
        </Card>
        <Card className="p-5 mb-5">
          <span className="flex mb-5 gap-5">
            <UploadComponents />
            <UploadComponents />
          </span>
          <UploadComponents />
        </Card>
        <Card className="px-5 py-3 flex gap-5 mb-5">
          <Text className="font-inter text-sm font-bold mb-3">
            Gunakan Submit Activity
          </Text>
          <Switch />
        </Card>
        <Card className="px-5 py-3 flex gap-5 mb-5">
          <Text className="font-inter text-sm font-bold mb-3">
            Gunakan Leaderboard
          </Text>
          <Switch />
        </Card>
        <Card className="px-5 py-3 flex gap-5 mb-5">
          <Text className="font-inter text-sm font-bold mb-3">
            Aktifkan download BIB
          </Text>
          <Switch />
        </Card>
        <Card className="px-5 py-3 flex gap-5 mb-5">
          <Text className="font-inter text-sm font-bold mb-3">
            Izinkan non-finisher untuk download sertifikat
          </Text>
          <Switch />
        </Card>
        <Card className="px-5 py-3 flex gap-5 mb-5">
          <Text className="font-inter text-sm font-bold mb-3">
            Custom Terms of Service
          </Text>
          <Switch />
        </Card>
      </Form>
    </div>
  )
}

export default FormManageEvent
