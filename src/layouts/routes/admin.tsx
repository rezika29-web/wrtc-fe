import dynamic from 'next/dynamic'

const AdminContainer = dynamic(() => import('layouts/containers/Admin'))

const routes = [
  {
    path: '/admin/login',
    exact: true,
  },
  {
    path: '/admin',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-user/add',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-user/edit',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-faq/add',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-faq/edit',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-faq',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-qna',
    layout: AdminContainer,
    exact: true,
  },
]

export default routes
