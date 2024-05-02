import React from 'react'
import { AppProps } from 'next/app'
import getSiteLayout from 'layouts/core/DefaultLayout'
import Head from 'next/head'
import 'styles/global.css'
import { ConfigProvider } from 'antd'

const title = 'We Run The City'
const description = `Rum buccaneer tails crack fleet ketch buccaneer. Belaying o'nine scourge ballast poop heave bilged. Grog bucko overhaul lateen grapple black anchor jennys. Measured tell rat poop gangway spanish lateen. Swab hang lugsail six jones' sink seven smartly lee.`
const webIconURL = '/logo/favicon.png'

function ThemeSetting({ children }) {
  return (
    <ConfigProvider
      theme={{
        hashed: false, // fix error layouting
        components: {
          Radio: {
            colorPrimary: '#0079C4',
            colorBgBlur: '#0079C4',
            colorPrimaryHover: '#0079C4',
            borderRadius: 0,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

function App(props: AppProps) {
  const siteLayout = getSiteLayout(props)
  return (
    <ThemeSetting>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <link rel="shortcut icon" href={webIconURL} />
        <meta name="description" content={description} />
      </Head>
      {siteLayout}
    </ThemeSetting>
  )
}

export default App
