import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { Router } from './routes /Router'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | ShopCell" />
      <RouterProvider router={Router} />
    </HelmetProvider>
  )
}
