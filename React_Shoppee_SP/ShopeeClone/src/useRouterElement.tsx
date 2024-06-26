import { useRoutes } from 'react-router-dom'
import ProdustList from './pages/ProductList'
import Logins from './pages/Logins'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'

export default function useRouterElement() {
  const elementRouter = useRoutes([
    {
      path: '/',
      element: <ProdustList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Logins />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return elementRouter
}
