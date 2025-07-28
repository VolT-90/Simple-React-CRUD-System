import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'


function App() {
  
  const routes = createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {path:'/',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'/contact',element:<Contact/>}
    ]}
  ])

  return (
    <>
      
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
