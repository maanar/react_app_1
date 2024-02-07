
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout.jsx';
import Home from './Component/Home/Home.jsx';
import Abot from './Component/About/Abot.jsx';
import Portfolio from './Component/Portfolio/Portfolio.jsx';
import Contact from './Component/Contact/Contact.jsx';

let routers = createBrowserRouter([
  {path:'', element:<Layout/> , children :[
    {index:true, element:<Home/>},
    {path:'home', element:<Home/>},
    {path:'about', element:<Abot/>},
    {path:'portfolio', element:<Portfolio/>},
    {path:'contact', element:<Contact/>},

  ]}
 
])


function App() {
  return <>
  
  <RouterProvider router={routers}></RouterProvider>
 
  </>
}

export default App;
