import { Card, DatePicker, DatePickerProps, Form, Switch } from 'antd'
import SimpleInput, {
  InputNumbers,
  InputSelect,
} from 'components/Forms/Input/Inputs'
import Text from 'components/Text'
import React, { useState } from 'react'

function FormCategory() {
  const [showInputs, setShowInputs] = useState(false)
  const [showClassification, setShowClassification] = useState<boolean>(true)

  const onChangeSwitch = (checked) => {
    setShowInputs(checked)
  }
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    // console.log(date, dateString)
  }
  return (
    <div className="w-full">
      <Form name="manage-category" layout="vertical" className="mt-5">
        <div className="flex w-full justify-between items-center mb-5">
          <Text size="h5" className="font-medium">
            Detail Category
          </Text>
        </div>
        <Card className="w-full p-5 mb-5">
          <Text size="h6" className="font-medium">
            Form
          </Text>
          <div className="flex gap-5">
            <div className="my-5 w-full">
              <Form.Item
                label="Jenis Virtual"
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
                  placeholder="Pilih Jenis Virtual"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Jenis Kegiatan"
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
                  placeholder="Pilih Jenis Kegiatan"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Min Distance"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  disabled
                  placeholder="Masukkan Min Distance"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Team Virtual "
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
                  placeholder="Pilih Team Virtual "
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Sisa Kuota"
                className="font-inter text-sm font-medium"
              >
                <InputNumbers className="h-14 py-4" disabled />
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
                label="MasterEventLabelId"
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
                  placeholder="Pilih MasterEventLabelId"
                  className="h-14 font-normal"
                />
              </Form.Item>
            </div>
            <div className="mt-5 w-full">
              <Form.Item
                label="Event"
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
                  placeholder="Pilih Event"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Master Kategori "
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
                  placeholder="Pilih Master Kategori "
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Finisher Distance "
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  disabled
                  placeholder="Masukkan Finisher Distance "
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Harga"
                className="font-inter text-sm font-medium"
              >
                <SimpleInput
                  disabled
                  placeholder="Masukkan Harga"
                  className="h-14 font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Kuota"
                className="font-inter text-sm font-medium"
              >
                <InputNumbers className="h-14 py-4" disabled />
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
                label="Gender Tim"
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
                  placeholder="Pilih Gender Tim"
                  className="h-14 font-normal"
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
                  className="font-inter text-sm font-medium w-full h-14"
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
        </Card>
        <Card className="px-5 py-3 flex gap-5 mb-5">
          <Text className="font-inter text-sm font-bold mb-3">
            Gunakan Submit Activity
          </Text>
          <Switch />
        </Card>
        <Card className="px-5 py-3 flex gap-5 mb-5">
          <Text className="font-inter text-sm font-bold mb-3">
            Tampilkan BIB pada leaderboard
          </Text>
          <Switch />
        </Card>
        <Card className="px-5 py-3 flex gap-5 mb-5">
          <Text className="font-inter text-sm font-bold mb-3">
            Tampilkan klasifikasi pada leaderboard
          </Text>
          <Switch />
        </Card>
        <div className="mb-5">
          <Card className="px-5 py-3 flex gap-5 mb-5 ">
            <Text className="font-inter text-sm font-bold mb-3">
              Izinkan member submit data saat anggota tim belum lengkap
            </Text>
            <Switch
              checked={showClassification}
              onChange={() => setShowClassification(!showClassification)}
              disabled
            />
          </Card>
          <Text className="font-normal text-[#ff0000] italic">
            Tidak dapat mengubah regulasi tim karena event sudah berjalan atau
            berakhir
          </Text>
        </div>
        <div className="mb-5">
          <Card className="px-5 py-3 flex gap-5 mb-5 ">
            <Text className="font-inter text-sm font-bold mb-3">
              Izinkan penambahan anggota tim ketika sudah ada progres di dalam
              tim
            </Text>
            <Switch
              checked={showClassification}
              onChange={() => setShowClassification(!showClassification)}
              disabled
            />
          </Card>
          <Text className="font-normal text-[#ff0000] italic">
            Tidak dapat mengubah regulasi tim karena event sudah berakhir
          </Text>
        </div>
      </Form>
    </div>
  )
}

export default FormCategory
