import { Button, Col, Form, Row, Select } from 'antd'
import { LinkButton } from 'components/Buttons'
import CardCategories from 'components/Cards/CardCategories'
import CustomCollapse from 'components/Collapse'
import ContactUs from 'components/ContactUs'
import SimpleInput from 'components/Forms/Input/Inputs'
import Text from 'components/Text'
import useAdditionalEventsCategory from 'data/useAdditionalEventsCategory'
import Image from 'next/image'
import React, { useState } from 'react'

function StepTwo() {
  const [count, setCount] = useState<number>(0)

  const { data: eventsCategory } = useAdditionalEventsCategory({
    filtered: [{ id: 'event_category_id', value: '386' }],
  })

  return (
    <div className="container">
      <div className="flex flex-col items-center gap-y-6 mt-20 ">
        <Text
          size="body1"
          className="text-lg px-8 py-4 font-bold font-inter text-[#0079C4] bg-[#FFFFFF] rounded-full"
        >
          REGISTER EVENT
        </Text>
        <Text className="text-neutral80 text-[38px] font-bold">
          Padang half marathon
        </Text>
        <Text className="bg-white text-neutral80 text-xl font-semibold shadow-[0_4px_20px_0px_rgba(0,0,0,0.05)] rounded-full px-8 py-4">
          Step 2 dari 5
        </Text>
      </div>
      <div className="my-[108px]">
        <div className="flex justify-between">
          <Text className="h-[23px] text-neutral80 text-[18px] md:text-[28px] font-bold border-l-[6px] border-[#1088C8] ps-8 flex items-center">
            Pilih Kategori yang anda ikuti
          </Text>
          <Text className="text-bluemain text-xl font-medium">
            Earlybird (Periode 12 Desember - 24 Desember 2025)
          </Text>
        </div>

        <Row className="mt-12 justify-between">
          <Col span={14}>
            <div className="flex flex-wrap gap-6">
              {eventsCategory?.map((e) => (
                <CardCategories
                  key={e.id}
                  image={e.image.path}
                  title={e.title}
                  price="IDR 200.000,00"
                  description={e.description}
                  className=" w-[396px]"
                />
              ))}
            </div>
          </Col>
          <Col span={10}>
            <CustomCollapse label="Upload Profile">
              <Text className="font-medium">Add On</Text>
              <Text className="font-normal text-neutral60">
                Anda dapat memilih add-on atau tidak sama sekali
              </Text>
              <div className="flex items-center gap-x-6 mt-4">
                <Image
                  className="rounded-lg"
                  src="/images/example-optional.png"
                  alt="product"
                  width={64}
                  height={64}
                />
                <div>
                  <Text className="text-base text-neutral60 font-semibold">
                    Runner Jacket
                  </Text>
                  <Text className="text-lg font-medium text-[#27273E]">
                    IDR 80.000,00
                  </Text>
                </div>
              </div>

              <div className="w-full flex justify-between items-center border border-[#DFDFE3] px-2 py-[6px] my-4 rounded-lg">
                <Button
                  className="bg-[#DFDFE3] w-11 h-11"
                  disabled={count === 0 && true}
                  icon={
                    <Image
                      src="/icons/u_minus.png"
                      alt="product"
                      width={24}
                      height={24}
                    />
                  }
                  onClick={() => setCount(count - 1)}
                />
                <Text className="text-neutral80 text-base font-semibold">
                  {count}
                </Text>
                <Button
                  className="bg-bluemain w-11 h-11"
                  icon={
                    <Image
                      className="rounded-lg"
                      src="/icons/plus-icon.png"
                      alt="product"
                      width={24}
                      height={24}
                    />
                  }
                  onClick={() => setCount(count + 1)}
                />
              </div>
              <Form>
                <Form.Item
                  name="no_hp"
                  className="font-inter text-sm font-medium"
                >
                  <Select
                    className="w-full h-[56px]"
                    allowClear
                    placeholder="Pilih Ukuran"
                    options={[
                      { value: 'jack', label: 'Jack' },
                      { value: 'lucy', label: 'Lucy' },
                      { value: 'Yiminghe', label: 'yiminghe' },
                      { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  name="no_hp"
                  className="font-inter text-sm font-medium"
                >
                  <Text className="font-medium mb-2">Voucher</Text>
                  <div className="flex">
                    <SimpleInput
                      className="font-normal rounded-r-none"
                      placeholder="Input Voucher"
                    />
                    <Button className="bg-bluemain w-[81px] h-[58px] text-white font-medium rounded-l-none">
                      Check
                    </Button>
                  </div>
                  <Text className="font-normal text-neutral60 text-sm mt-2">
                    Silahkan redeem voucher kamu disini (jika ada).
                  </Text>
                </Form.Item>
              </Form>
            </CustomCollapse>
          </Col>
        </Row>
      </div>
      <div className="bg-white w-full flex justify-between items-center px-12 py-6 rounded-lg">
        <div>
          <Text className="text-xl text-neutral80 font-semibold">
            Total Bayar
          </Text>
          <Text className="text-base text-neutral60 font-medium">
            Potongan Harga
          </Text>
        </div>
        <div>
          <Text className="text-xl text-neutral80 font-semibold">
            IDR 100.000
          </Text>
          <div className="flex">
            <Image
              src="/images/hemat-illustration.png"
              alt="hemat icon"
              width={60}
              height={30}
            />
            <Text className="text-base text-neutral80 font-semibold">
              - IDR 0
            </Text>
          </div>
        </div>
        <div className="flex justify-end gap-6">
          <Button
            href="step-one"
            className="w-[220px] h-14 px-14 flex items-center justify-center text-lg font-medium text-primary bg-white  border border-primary"
          >
            Back
          </Button>
          <LinkButton
            href="step-three"
            className="w-[220px] h-14 px-14  text-lg font-medium bg-primary text-white"
          >
            Checkout
          </LinkButton>
        </div>
      </div>

      <div className="pt-16 pb-20">
        <ContactUs />
      </div>
    </div>
  )
}

export default StepTwo
