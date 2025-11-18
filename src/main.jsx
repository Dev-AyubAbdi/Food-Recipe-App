import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home.jsx'
import { About } from './Pages/About.jsx'
import { Contact } from './Pages/Contact.jsx'
import { RecipesDetails } from './Components/RecipesDetails.jsx'
import { Recipes } from './Pages/recipes.jsx'

const routerProvider = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
          index: true,
          element: <Home />
      },
      
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/recipes",
        element: <Recipes/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/RecipesDetails/:id",
        element: <RecipesDetails/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerProvider} />
  </StrictMode>
)
