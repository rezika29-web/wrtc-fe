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
  {
    path: '/admin/manage-event',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/add',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/detail',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/category',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/category/detail-category',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/category/edit',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/we-run-the-city',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/we-run-the-city/edit-sambutan',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/we-run-the-city/edit-partner',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/we-run-the-city/edit-kunjungan',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/we-run-the-city/edit-aturan',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/we-run-the-city/add-sambutan',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/we-run-the-city/add-partner',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/we-run-the-city/add-kunjungan',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/we-run-the-city/add-aturan',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-event/peserta',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-qna/add',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-qna/edit',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-request-host-event',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-request-host-event/add',
    layout: AdminContainer,
    exact: true,
  },
  {
    path: '/admin/manage-request-host-event/edit',
    layout: AdminContainer,
    exact: true,
  },
]

export default routes
