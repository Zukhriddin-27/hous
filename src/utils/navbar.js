import React from 'react'
import useId from '../hooks/useId'
import SigninPage from '../page/SignIn'

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
    element: <SigninPage />,
    title: 'Sign in',
    path: '/signin',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Generic sign up</h1>,
    title: 'Sign up',
    path: '/signup',
    private: false,
    hidden: true,
  },
]
