import dynamic from 'next/dynamic'

const PublicContainer = dynamic(() => import('layouts/containers/Public'))

const routes = [
  {
    path: '/',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/register',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/register/persyaratan',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/faq',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/event',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/event/event-detail',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/event/event-explore',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/dashboard/myprofile',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/dashboard/my-profile/detailprofile',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/dashboard/paymenthistory',
    layout: PublicContainer,
    exact: true,
  },
]

export default routes
