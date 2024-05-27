import { UserAddOutlined, UserOutlined } from '@ant-design/icons'
import { Image, Layout, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import LinkText from 'components/LinkText'
import styles from './AdminContainer.module.scss'

const { Header, Content, Sider } = Layout

/**
 * TODO: refactor parameters
 */
function createMenu(label, key, icon?, children?: any, link?: any) {
  return {
    key,
    icon,
    children,
    label: link ? <LinkText href={link}>{label}</LinkText> : label,
  }
}

const MENUS = [
  createMenu('Users', 'admin', <UserAddOutlined />, null, '/admin'),
  createMenu("FAQ's", 'faq', <UserOutlined />, null, '/admin/manage-faq'),
  createMenu("Event's", 'event', <UserOutlined />, null, '/admin/manage-event'),
  createMenu(
    'Request Host Event',
    'request host event',
    <UserOutlined />,
    null,
    '/admin/manage-request-host-event',
  ),
]

function AdminContainer(props: any) {
  const { Component } = props
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    /**
     * You can handle Login Session actions here
     */
  }, [])

  return (
    <Layout id={styles.adminContainer} style={{ minHeight: '100vh' }}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={classNames(styles.logo)}>
          <Image src="/logo/WRTC.png" preview={false} className="w-28" />
        </div>
        <Menu defaultSelectedKeys={['admin']} mode="inline" items={MENUS} />
      </Sider>

      <Layout className={styles['site-layout']}>
        <Header
          className={styles['site-layout-background']}
          style={{ padding: 0 }}
        />
        <Content style={{ marginRight: 32, marginLeft: 32, marginTop: 40 }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Component {...props} />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminContainer
