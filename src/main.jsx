import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Home from '../routes/Home'
import Carrinho from '../routes/Carrinho'
import Pagamento from '../routes/Pagamento'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element:<Home/>,
    path:"/"
  },
  {
    element: <Carrinho/>,
    path:"carrinho"
  },
  {
    element: <Pagamento/>,
    path:"pagamento"
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
