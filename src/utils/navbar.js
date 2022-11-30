import React from 'react'
import useId from '../hooks/useId'
import RegisterPage from '../page/Register'
import Favourite from '../page/Favourite'

const HomePage = React.lazy(() => import('../page/Home'))
const PropertiesPage = React.lazy(() => import('../page/Properties'))
const HouseItem = React.lazy(() => import('../page/HouseItem'))

// import PropertiesPage from '../page/Properties'
// import HomePage from '../page/Home'

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />
      </React.Suspense>
    ),

    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <PropertiesPage />
      </React.Suspense>
    ),
    title: 'Properties',
    path: '/properties',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HouseItem />
      </React.Suspense>
    ),
    title: 'House Item',
    path: '/properties/:id',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <RegisterPage />,
    title: 'Sign in',
    path: '/signin',
    private: false,
    hidden: true,
  },
  // {
  //   id: useId,
  //   element: <RegisterPage />,
  //   title: 'Register',
  //   path: '/register',
  //   private: false,
  //   hidden: true,
  // },
  {
    id: useId,
    element: <Favourite />,
    title: 'Favourite',
    path: '/favourite',
    private: true,
    hidden: true,
  },
]
