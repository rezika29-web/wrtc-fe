import React from 'react'
import Text from 'components/Text'

function Kontak() {
  return (
    <div className="mb-10 px-10">
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Kontak Darurat</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">083180164636</Text>
          </div>
        </div>
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Golongan Darah</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">O</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Atas Nama</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">Septian</Text>
          </div>
        </div>
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Riwayat Penyakit</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">Tidak Ada</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full mb-10 ">
        <div className="md:w-[50%] flex flex-row mr-10">
          <div className="md:w-[50%] w-full">
            <Text size="subtitle">Hubungan Dengan</Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text size="h6">Saudara</Text>
          </div>
        </div>
        <div className="md:w-[50%] flex flex-row mr-10 pb-5" />
      </div>
    </div>
  )
}
export default Kontak
