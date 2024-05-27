import { AxiosError } from 'axios'
import React, { useState } from 'react'
import { UseQueryOptions, useQuery } from 'react-query'
import CallAPI, { UrlQueryTypes } from 'services/CallAPI'

export interface PaymentHistoryDataType {
  statusLabel: string
  id: number
  AthleteId: number
  EventId: number
  status: number
  MasterRejectReasonId: number
  keterangan: string
  kodeTransaksi: string
  proof: string
  convenienceFee: any
  VoucherId: number
  discountAmount: any
  UserId: number
  redirectUrl: any
  createdAt: any
  updatedAt: any
  EventCategoryId: number
  isEmailSent: boolean
  namaKomunitas: string
  namaTelpDarurat: string
  noTelpDarurat: string
  MasterShirtSizeId: number
  alamatPengiriman: string
  kodePos: string
  KirimCityId: number
  isEmailNotifSent: boolean
  shippingPlatform: string
  subdistrictId: number
  shippingService: string
  shippingCost: any
  totalAmount: any
  subdistrictName: string
  cityName: string
  provinceName: string
  midtransPayload: string
  EventDonationId: number
  donation: any
  namaBIB: string
  RacepakShirtSize: string
  isImported: boolean
  MasterKlasifikaseId: number
  Athlete: {
    id: number
    username: string
    fullname: string
    email: string
    telp: string
    createdAt: any
    updatedAt: any
    MasterBloodId: number
    MasterShirtSizeId: number
    noTelpDarurat: any
    BeyondId: number
    MasterGenderId: number
    MasterIdentityCardId: number
    noIdentitas: string
    tempatLahir: string
    tglLahir: any
    alamat: string
    MasterCountryId: number
    namaTelpDarurat: string
    referral: string
    CityId: number
    StravaTokenId: number
    isActive: boolean
    otp: string
    otpExpiredDate: any
    forceOtp: boolean
    emergencyContactRelation: string
    wni: boolean
    City: {
      id: number
      nama: string
      createdAt: any
      updatedAt: any
      ProvinsiId: number
      Provinsi: {
        id: number
        createdAt: any
        updatedAt: any
        nama: string
        latitude: string
        longitude: string
        geojson: any
        zoom: any
      }
    }
  }
  EventCategoriesVirtualSport: {
    isEventCategoryRegisterStarted: boolean
    isEventRegisterFinished: boolean
    id: number
    EventId: number
    MasterCategoryId: number
    harga: any
    kuota: number
    sisaKuota: number
    tanggalMulaiDaftar: any
    tanggalSelesaiDaftar: any
    createdAt: any
    updatedAt: any
    MasterJenisVirtualId: number
    maxDistance: number
    isWithRacepak: boolean
    MasterJenisKegiatanId: number
    limitPeserta: number
    MasterTeamVirtualId: number
    isKomunitasRequired: boolean
    minDistance: any
    maxSpeed: any
    maxPace: any
    allowIncompleteMember: boolean
    fixedMember: boolean
    isLimitSubmitUsed: boolean
    limitSubmit: number
    limitResetInterval: number
    lastLimitReset: any
    showBib: boolean
    showKlasifikasi: boolean
    isSubmitlinkAvailable: boolean
    MasterEventLabelId: number
    MasterTeamGenderId: number
    MasterJenisVirtual: {
      id: number
      nama: string
      createdAt: any
      updatedAt: any
    }
    MasterCategory: {
      id: number
      nama: string
      createdAt: any
      updatedAt: any
      ultra: string
      kodeBib: string
    }
    InternalEvents: []
  }
  EventVirtualSport: {
    isEventRegisterOpened: boolean
    isEventStarted: boolean
    isEventFinished: boolean
    isEventRegisterFinished: boolean
    id: number
    nama: string
    kode: string
    CompanyId: number
    filename: any
    CityId: number
    idAlias: string
    deskripsi: any
    fileShirtSize: string
    referral: string
    fileLogoTiket: any
    tglBukaPendaftaran: any
    tglTutupPendaftaran: any
    tglEventMulai: any
    tglEventSelesai: any
    createdAt: any
    updatedAt: any
    isGenerateSertificate: boolean
    isHidden: boolean
    isCustomPaymentUsed: boolean
    isDefaultTosUsed: boolean
    isLeaderboardAvailable: boolean
    isSubmitlinkAvailable: boolean
    isDownloadBibAvailable: boolean
    certificateFontColor: any
    teamCertificateFontColor: any
    memberTeamCertificateFontColor: any
    poweredByImg: any
    isPoweredByImageUsed: boolean
    isLimitSubmitUsed: boolean
    limitSubmit: number
    limitResetInterval: number
    lastLimitReset: any
    nonFinisherCertificate: boolean
    allowRegisterMultiCategory: boolean
    EventSenderAddressId: number
    MasterEventLabelId: number
    bgCertificate: any
    isBgCertificateUsed: boolean
    bgTeamCertificate: any
    isBgTeamCertificateUsed: boolean
    bgTeamMemberCertificate: any
    isBgTeamMemberCertificateUsed: boolean
    bgBib: any
    isBgBibUsed: boolean
    logoSize: any
    InternalEvents: []
  }
  VoucherVirtualRun: null
  EventAddOns: []
  MasterShirtSize: null
  MasterRejectReason: {
    id: number
    nama: string
    createdAt: any
    updatedAt: any
  }
  EventCategoriesVirtualSports: [
    {
      isEventCategoryRegisterStarted: boolean
      isEventRegisterFinished: boolean
      id: number
      EventId: number
      MasterCategoryId: number
      harga: any
      kuota: string
      sisaKuota: string
      tanggalMulaiDaftar: any
      tanggalSelesaiDaftar: any
      createdAt: any
      updatedAt: any
      MasterJenisVirtualId: number
      maxDistance: number
      isWithRacepak: boolean
      MasterJenisKegiatanId: number
      limitPeserta: number
      MasterTeamVirtualId: number
      isKomunitasRequired: boolean
      minDistance: number
      maxSpeed: number
      maxPace: number
      allowIncompleteMember: boolean
      fixedMember: boolean
      isLimitSubmitUsed: boolean
      limitSubmit: number
      limitResetInterval: number
      lastLimitReset: any
      showBib: boolean
      showKlasifikasi: boolean
      isSubmitlinkAvailable: boolean
      MasterEventLabelId: number
      MasterTeamGenderId: number
      PaymentEventCategories: {
        id: number
        PaymentVirtualEventId: number
        EventCategoryId: number
        VoucherId: number
        discountAmount: any
        total: any
        updatedAt: any
        createdAt: any
        deletedAt: null
        MasterKlasifikaseId: number
      }
      MasterJenisVirtual: {
        id: number
        nama: string
        createdAt: any
        updatedAt: any
      }
      MasterCategory: {
        id: number
        nama: string
        createdAt: any
        updatedAt: any
        ultra: string
        kodeBib: string
      }
      InternalEvents: []
    },
  ]
  MasterKlasifikase: {
    id: number
    nama: string
    createdAt: any
    updatedAt: any
  }
  EventDonation: null
}

type IResponse = {
  code: number
  message: string
  data: PaymentHistoryDataType
  total: number
}

type IParams = UrlQueryTypes & {
  options?: UseQueryOptions<IResponse, AxiosError>
}

function usePaymentHistory(params: IParams = {}) {
  const { page, pageSize, options, ...restParams } = params
  const [pagination, setPagination] = useState({ page, pageSize })

  const queryKey = ['paymentHistory', pagination, restParams]

  const query = useQuery({
    queryKey,
    queryFn() {
      return CallAPI.getPaymentHistory({ ...restParams, ...pagination }).then(
        (res) => {
          return res.data
        },
      )
    },
  })

  return {
    ...query,
    data: query?.data?.data,
  }
}

export default usePaymentHistory
