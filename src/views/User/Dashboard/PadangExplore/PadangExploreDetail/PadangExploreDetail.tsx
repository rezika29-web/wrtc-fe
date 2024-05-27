import ContactUs from 'components/ContactUs'
import SegmentedComponent from 'components/Segmented'
import CardChallenge from 'components/Cards/CardChallenge'
import Text from 'components/Text'
import Image from 'next/image'
import React from 'react'

const challengeData = [
  {
    id: 1,
    color: 'bg-bluemain',
    point: 45,
    title: 'ITENARY',
    description:
      'Dapatkan informasi terbaru tentang jadwal acara dan kegiatandengan kartu Rencana Perjalanan. Rencanakan hari Anda dan maksimalkan pengalaman We Run the City Anda.',
    imageIllustration: '/images/itenary-illustration.png',
    periode: '2 Januari',
    to: '5 Januari 2024',
    status: 'Selesai',
  },
  {
    id: 2,
    color: 'bg-yellowmain',
    point: 45,
    title: 'MINI GAMES',
    description:
      'Dapatkan informasi terbaru tentang jadwal acara dan kegiatandengan kartu Rencana Perjalanan. Rencanakan hari Anda dan maksimalkan pengalaman We Run the City Anda.',
    imageIllustration: '/images/mini-games-illustration.png',
    periode: '2 Januari',
    to: '5 Januari 2024',
    status: 'Menunggu',
  },
  {
    id: 3,
    color: 'bg-toscamain',
    point: 45,
    title: 'VIRTUAL RUN',
    description:
      'Dapatkan informasi terbaru tentang jadwal acara dan kegiatandengan kartu Rencana Perjalanan. Rencanakan hari Anda dan maksimalkan pengalaman We Run the City Anda.',
    imageIllustration: '/images/virtual-run-illustration.png',
    periode: '2 Januari',
    to: '5 Januari 2024',
    status: 'Menunggu',
  },
  {
    id: 4,
    color: 'bg-[#945ADE]',
    point: 45,
    title: 'SHOPPING',
    description:
      'Jelajahi toko merchandise kami untuk mendapatkan pakaian dan aksesori eksklusif We Run the City. Tunjukkan dukungan Anda dan bawa pulang sepotong semangat acara ini.',
    imageIllustration: '/images/shopping-illustration.png',
    periode: '2 Januari',
    to: '5 Januari 2024',
    status: 'Menunggu',
  },
  {
    id: 5,
    color: 'bg-[#ACA500]',
    point: 45,
    title: 'SHAKEOUT RUN',
    description:
      'Bergabunglah dengan lari santai pra-lomba kami untuk melemaskan kaki Anda dan terhubung dengan sesama peserta. Ini adalah cara yang sempurna untuk bersantai dan mempersiapkan diri untuk acara utama.',
    imageIllustration: '/images/shake-out-illustration.png',
    periode: '2 Januari',
    to: '5 Januari 2024',
    status: 'Menunggu',
  },
]

function PadangExploreDetail() {
  return (
    <div className="px-5 md:px-[100px] md:py-20">
      <div className="md:w-[840px] md:pb-24 w-[320px] mx-auto text-center flex justify-center flex-col items-center">
        <Text
          size="body1"
          className="md:text-lg md:w-[253px] md:mb-6 md:py-3 font-bold font-inter text-[#0079C4] bg-[#FFFFFF] rounded-full"
        >
          SELAMAT DATANG 👋
        </Text>
        <Text
          size="body1"
          className="md:text-[38px] md:leading-[52px] mb-12 font-rubik font-extrabold text-[#444458]"
        >
          Alexander Supatramp
        </Text>
        <SegmentedComponent
          hrefSegmented
          options={[
            { label: 'Dashboard', link: '/dashboard/myprofile' },
            { label: 'Padang Explorer', link: '/dashboard/padang-explore' },
            { label: 'Gallery', link: '/' },
            { label: 'Riwayat Pembayaran', link: '/dashboard/paymenthistory' },
          ]}
          className="p-0 w-[86px] md:w-auto md:px-12 md:py-2"
        />
      </div>

      <div className="w-[222px] text-xl font-semibold shadow-[0_4px_20px_0px_rgba(0,0,0,0.05)] rounded-full flex items-center gap-4 ps-8 pr-4 py-4 my-8 mx-auto">
        <Text>Total Point</Text>
        <span className="w-12 h-11 flex justify-center items-center text-lg text-white font-semibold rounded-full bg-gradient-to-r from-[#EB0030] to-[#0079C4]">
          5
        </span>
      </div>

      <div className="my-16 md:flex md:justify-between">
        <Text className="h-[23px] text-[18px] md:text-[28px] font-bold border-l-[6px] border-[#1088C8] ps-8 flex items-center">
          Padang Half Marathon Challange
        </Text>
        <div className="flex gap-2 mt-11 md:mt-0">
          <Image src="/icons/u_sync.svg" width={20} height={20} alt="" />
          <span>Update: 12/05/2024</span>
          <span className="text-[#00ACA2] font-semibold">( + 45 Point )</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {challengeData?.map((d) => {
          return (
            <CardChallenge
              key={d.id}
              point={d.point}
              title={d.title}
              className={d.color}
              description={d.description}
              imageIllustration={d.imageIllustration}
              periode={d.periode}
              to={d.to}
              status={d.status}
            />
          )
        })}
      </div>
      <ContactUs />
    </div>
  )
}

export default PadangExploreDetail
