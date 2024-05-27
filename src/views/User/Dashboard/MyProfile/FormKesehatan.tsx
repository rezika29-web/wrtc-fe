import React, { useEffect, useState } from 'react'
import SimpleInput from 'components/Forms/Input/Inputs'
import { Form, Radio, Input } from 'antd'
import useBloods from 'data/useBloods'

const { TextArea } = Input

function FormKesehatan(dataUser) {
  const { data: dataMasterBlood } = useBloods() || {}
  const dataBloods = dataUser?.MasterBloodId
  const [masterBloods, setMasterBloods] = useState([])
  const [valueBloods, setValueBloods] = useState(null)

  useEffect(() => {
    if (dataMasterBlood) {
      setMasterBloods(dataMasterBlood)
    }
  }, [dataMasterBlood])
  useEffect(() => {
    if (dataBloods) {
      setValueBloods(String(dataBloods))
    }
  }, [dataBloods])
  const optionsBlood = masterBloods.map((blood) => ({
    label: blood.nama,
    value: blood.id.toString(),
  }))

  return (
    <>
      <Form.Item
        label="Kontak Darurat"
        name="noTelpDarurat"
        rules={[{ required: true }]}
        colon={false}
        labelAlign="right"
        initialValue={dataUser?.noTelpDarurat || ''}
      >
        <SimpleInput placeholder="Masukkan nomor kontak darurat" />
      </Form.Item>
      <Form.Item
        label="Atas Nama"
        name="namaTelpDarurat"
        rules={[{ required: true }]}
        colon={false}
        labelAlign="right"
        initialValue={dataUser?.namaTelpDarurat || ''}
      >
        <SimpleInput placeholder="Masukkan nama orang sebagai kontak darurat" />
      </Form.Item>
      <Form.Item
        label="Hubungan dengan Kontak Darurat"
        name="emergencyContactRelation"
        rules={[{ required: true }]}
        colon={false}
        labelAlign="right"
        initialValue={dataUser?.emergencyContactRelation || ''}
      >
        <SimpleInput placeholder="Masukkan hubungan dengan kontak darurat" />
      </Form.Item>
      <Form.Item
        label="Golongan Darah"
        name="MasterBloodId"
        initialValue={valueBloods || ''}
      >
        <Radio.Group options={optionsBlood} />
      </Form.Item>

      <Form.Item
        label="Daftar Riwayat Penyakit"
        name="AthleteDiseaseHistories"
        rules={[{ required: true }]}
        initialValue={
          dataUser?.AthleteDiseaseHistories[0].name !== 'null'
            ? dataUser?.AthleteDiseaseHistories[0].name
            : 'Tidak ada'
        }
      >
        <TextArea placeholder="Masukkan riwayat penyakit" />
      </Form.Item>
    </>
  )
}
export default FormKesehatan
