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
    path: '/dashboard/my-profile',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/dashboard/my-profile/detail-profile',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/event/register-event/step-one',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/event/register-event/step-two',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/event/register-event/step-three',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/event/register-event/step-four',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/dashboard/padang-explore',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/dashboard/padang-explore/[id]',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/dashboard/payment-history',
    layout: PublicContainer,
    exact: true,
  },
]

export default routes
