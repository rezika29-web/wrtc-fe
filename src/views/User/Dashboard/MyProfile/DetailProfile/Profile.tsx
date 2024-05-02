import React from 'react'
import Text from 'components/Text'

function Profile() {
  return (
    <div className="mb-10 px-10">
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50% w-full">
            <Text size="subtitle">Nama Lengkap</Text>
          </div>
          <div className="md:w-[50% w-full">
            <Text size="h6">Septiandri Rezika</Text>
          </div>
        </div>
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50% w-full">
            <Text size="subtitle">Provinsi</Text>
          </div>
          <div className="md:w-[50% w-full">
            <Text size="h6">Sumatera Barat</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50% w-full">
            <Text size="subtitle">Email</Text>
          </div>
          <div className="md:w-[50% w-full">
            <Text size="h6">septiandrirezika97@gmail.com</Text>
          </div>
        </div>
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50% w-full">
            <Text size="subtitle">Kabupaten / Kota</Text>
          </div>
          <div className="md:w-[50% w-full">
            <Text size="h6">Padang</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50% w-full">
            <Text size="subtitle">Tempat Lahir</Text>
          </div>
          <div className="md:w-[50% w-full">
            <Text size="h6">padang</Text>
          </div>
        </div>
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50% w-full">
            <Text size="subtitle">Alamat</Text>
          </div>
          <div className="md:w-[50% w-full">
            <Text size="h6">Kuranji, Padang</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50% w-full">
            <Text size="subtitle">Tanggal Lahir</Text>
          </div>
          <div className="md:w-[50% w-full">
            <Text size="h6">01 Januari 2000</Text>
          </div>
        </div>
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50% w-full">
            <Text size="subtitle">Jenis Identitas</Text>
          </div>
          <div className="md:w-[50% w-full">
            <Text size="h6">KTP</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mb-10 ">
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50% w-full">
            <Text size="subtitle">Gender</Text>
          </div>
          <div className="md:w-[50% w-full">
            <Text size="h6">Pria</Text>
          </div>
        </div>
        <div
          className="md:w-[50%] flex flex-row mr-10 pb-5"
          style={{ borderBottom: '1px dashed black' }}
        >
          <div className="md:w-[50% w-full">
            <Text size="subtitle">Nomor Identitas</Text>
          </div>
          <div className="md:w-[50% w-full">
            <Text size="h6">1234567899876543</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full mb-10 ">
        <div className="md:w-[50%] flex flex-row mr-10">
          <div className="md:w-[50% w-full">
            <Text size="subtitle">Kewarganegaraan (WNI/WNA)</Text>
          </div>
          <div className="md:w-[50% w-full">
            <Text size="h6">Indonesia</Text>
          </div>
        </div>
        <div className="md:w-[50%] flex flex-row mr-10 pb-5" />
      </div>
    </div>
  )
}
export default Profile
