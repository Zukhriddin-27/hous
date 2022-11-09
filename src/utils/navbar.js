import useId from '../hooks/useId'
import HomePage from '../page/Home'
import PropertiesPage from '../page/Properties'
export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <PropertiesPage />,
    title: 'Properties',
    path: '/properties',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Generic sign in</h1>,
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
