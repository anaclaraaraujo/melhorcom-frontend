import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { DetailsPhone } from '@/pages/DetailsPhone'
import { TablePhones } from '@/pages/TablePhones'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <TablePhones /> },
      { path: '/details', element: <DetailsPhone /> },
    ],
  },
])
