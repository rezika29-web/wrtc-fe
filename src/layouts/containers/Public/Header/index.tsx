import React, { useEffect, useState } from 'react'
import LinkText from 'components/LinkText'
import Image from 'next/image'
import { Divider, Dropdown, MenuProps } from 'antd'
import PrimaryButton, { IconButton, LinkButton } from 'components/Buttons'
import { CloseCircleOutlined, MenuOutlined } from '@ant-design/icons'
import useTokenHandler from 'hooks/useTokenHandler'
import Text from 'components/Text'
import useAthlete from 'data/useAthlete'
import Link from 'next/link'
import { useRouter } from 'next/router'

const headerNavigation = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Event',
    href: '/event',
  },
  {
    name: 'FAQ',
    href: '/faq',
  },
]

interface HeaderProps {
  setModalLogin: () => void
}

function Header(props: HeaderProps) {
  const { setModalLogin } = props
  const router = useRouter()
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState(false)
  const { token, deleteToken } = useTokenHandler('userToken')

  useEffect(() => {
    setIsAuth(!!token)
  }, [])

  const { data } = useAthlete(isAuth)

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link href="/dashboard">Dashboard</Link>,
      className: 'hover:bg-[#EEF7FC] p-3',
      icon: (
        <Image
          className="bg-transparent"
          src="/icons/home.png"
          alt="Logo"
          width={16}
          height={16}
        />
      ),
    },
    {
      key: '2',
      label: <Link href="/dashboard">Profile</Link>,
      className: 'hover:bg-[#EEF7FC] p-3',
      icon: (
        <Image
          className="bg-transparent"
          src="/icons/user.svg"
          alt="Logo"
          width={18}
          height={20}
        />
      ),
    },
    {
      key: '3',
      label: <Link href="/">Log Out</Link>,
      className: 'hover:bg-[#EEF7FC] p-3',
      icon: (
        <Image
          className="bg-transparent"
          src="/icons/logout.svg"
          alt="Logo"
          width={18}
          height={20}
        />
      ),
      onClick: () => {
        deleteToken('/')
        router.push('/').then(() => {
          window.location.reload()
        })
      },
    },
  ]

  const showMenuResponsive = (
    <div className="fixed bg-white top-0 bottom-0 left-0 right-0 w-full h-full z-[999]">
      <div className="flex justify-center w-full h-full">
        <div className="w-full mx-5">
          <div className="h-24 flex justify-between items-center w-full">
            <Image src="/logo/WRTC-2.png" alt="Logo" width={75} height={64} />
            <IconButton
              onClick={() => setShowMenu(!showMenu)}
              className="border-none text-primary"
              icon={<CloseCircleOutlined />}
            />
          </div>
          <div className="flex-col h-full">
            {headerNavigation.map((d) => (
              <LinkText
                key={d.href}
                href={d.href}
                onClick={() => setShowMenu(!showMenu)}
                className={`block my-7 text-center text-base font-medium ${
                  d.name === 'FAQ' && 'font-semibold text-primary'
                }`}
              >
                {d.name}
              </LinkText>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="bg-white">
        <div className="container flex justify-between items-center h-24">
          <div className="min-[850px]:flex hidden min-[1280px]:gap-x-16 gap-x-6">
            {headerNavigation.map((d) => (
              <LinkText
                key={d.href}
                href={d.href}
                className={`text-base font-medium ${
                  d.name === 'FAQ' && 'font-semibold text-primary'
                }`}
              >
                {d.name}
              </LinkText>
            ))}
          </div>
          <Image src="/logo/WRTC-2.png" alt="Logo" width={75} height={64} />
          {isAuth && (
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full"
                src={data?.photoAthlete?.file}
                alt="profile"
                width={48}
                height={48}
                crossOrigin="anonymous"
              />
              <Text
                size="body1"
                className="text-neutral80 text-lg font-semibold mr-4"
              >
                {data?.fullname}
              </Text>

              <Dropdown menu={{ items }} arrow>
                <Image
                  className="cursor-pointer"
                  src="/icons/down-outlined.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                />
              </Dropdown>
            </div>
          )}

          {!isAuth && (
            <div className="min-[850px]:flex hidden min-[1280px]:gap-x-6 gap-x-2 items-center">
              <LinkButton
                className="h-12 min-[1250px]:w-36 w-20 font-medium min-[1250px]:text-base text-xs"
                href="/register"
              >
                Register
              </LinkButton>
              <Divider className="bg-gray-200 h-9" type="vertical" />
              <PrimaryButton
                onClick={setModalLogin}
                className="h-12 min-[1250px]:w-36 w-20 font-medium min-[1250px]:text-base text-xs"
              >
                Login
              </PrimaryButton>
            </div>
          )}
          <IconButton
            onClick={() => setShowMenu(!showMenu)}
            className="border-none min-[850px]:hidden"
            icon={<MenuOutlined className="text-primary" />}
          />
        </div>
        {showMenu && showMenuResponsive}
      </div>
    </>
  )
}

export default Header
