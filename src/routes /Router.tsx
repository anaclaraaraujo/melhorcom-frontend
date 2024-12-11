import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '../_layouts/app'
import { ListCell } from '../pages/ListCell'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <ListCell /> }],
  },
])
